import React, { useState } from 'react';
import Todo from './Todo';

const Forms = (props) => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState({ name: "", isFinished: false });
    const onChange = (event) => {
        setTask({
            name: event.target.value,
            isFinished: false
        });
    };
    const addTask = (event) => {
        event.preventDefault();
        const newTodo = [...todo, task];
        setTodo(newTodo);
        setTask({ name: "", isFinished: false });
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input className="input" type="text" name="task" onChange={onChange} value={task.name} />
                <input className="btn" type="submit" value="Add" />
            </form>
            <Todo todo={todo} setTodo={setTodo} />
        </div>
    );
}
export default Forms;