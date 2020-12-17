import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = ({authenticateUser, authenticated})=> {
    return <div>
        <h2>
            Please login
        </h2>
        <form onSubmit={authenticateUser}>
            <input type="text" placeholder="username" name="username" defaultValue="Dev"/>
            <input type="password" placeholder="passsword" name="passsword" defaultChecked="" />
            {authenticated === mutations.NOT_AUTHENTICATED ? 
                <p>Login incorrect</p> : null
            }
            <button type="submit">Login</button>
        </form>
    </div>
};

const mapStateteToProps = ({session}) => ({
    authenticated: session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let username = e.target["username"].value;
        let passsword = e.target["passsword"].value;
        dispatch(mutations.requestAuthenticateUser(username, passsword));
    }
});

export const ConnectedLogin = connect(mapStateteToProps, mapDispatchToProps) (LoginComponent)