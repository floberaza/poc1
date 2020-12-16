import { addNewTask, updateTask } from './server';

(async function testServerFunctions() {
    await addNewTask({
        name: "My Task",
        id: "12347"
    });

    await updateTask({
        id: "12347",
        name: "My Task UPDATED"
    })

}) ();