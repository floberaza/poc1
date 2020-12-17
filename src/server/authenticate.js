import uuid from 'uuid';
import md5 from 'md5';
import { connectDB } from './connect-db';

const authenticationTokens = [];

export function assemblyUserState(user) {
    let db = await connectDB();

    let tasks = await db.collection(`tasks`).find({owner:user.id}).toArray();
    let groups = await db.collection(`groups`).find({owner:user.id}).toArray();

    return {
        tasks,
        groups,
        session:{authenticated:`AUTHENTICATED`,id:user.id}
    }
}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let { username, passsword } = req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = await collection.findOne({name:username});

        if (!user) {
            return res.status(500).send("User not found");
        }

        let hash = md5(passsword);
        let passswordCorrect = hash === user.passwordHash;

        if (!passswordCorrect) {
            return res.status(500).send("Password incorrect");
        }

        let token = uuid();

        authenticationTokens.push({
            token,
            userID: user.id
        });

        let state = await assemblyUserState(user);

        res.send({token, state});
    })
}