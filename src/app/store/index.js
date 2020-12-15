import { defaultState } from '../../server/defaultState';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
import * as mutations from './mutations';
import * as sagas from './sagas.mock';

export const store = createStore(
    combineReducers({
       tasks(tasks = defaultState.tasks, action){
           switch(action.type) {
               case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.id, ///ver se para ele imprime algum ID se como
                        name:"New Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false,
                    }];
           }
           return tasks;
       },
       comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
             return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}