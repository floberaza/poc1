import React from 'react';
import { Provider } from 'react-redux';
import connect from 'react-redux/lib/connect/connect';
import { requestTaskCreation } from '../store/mutations';

export const TaskList = ({tasks, name, id, createNewTask }) => (
    <div>
        <h3>
            {name}
        </h3>
        <div>
            {tasks.map(task =>(<div key={task.id}>{task.name}</div>))}
        </div>
        <button onClick={()=> createNewTask(id)}>Add New</button>
    </div>
)

const mapStateToProps = (state, ownProps) => { 
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};

const mapDispatchToProps = (dispatch, id)=>({
    createNewTask(){
        dispatch(requestTaskCreation(id));
    }
});

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);