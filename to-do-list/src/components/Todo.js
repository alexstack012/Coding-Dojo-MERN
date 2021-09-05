import React, { useState } from 'react';

const Todo = (props) => {
    const { todo, setTodo } = props;
    const deleteTask = (deleteI) => {
        setTodo(todo.filter((task, i) => {
            return deleteI !== i;
        }));
    }
    const handleCheck = (i) => {
        const copiedTodo = [...todo];
        copiedTodo[i].isFinished = !copiedTodo[i].isFinished;
        setTodo(copiedTodo);
    }
    return (
        <div>
            {todo.map((task, i) => {
                const taskStyle = {
                    display: "inline-block"
                };
                if (task.isFinished) {
                    taskStyle.textDecoration = "line-through";
                }
                return (
                    <div key={i} className="thingsTodo">
                        <p style={taskStyle}>{task.name}</p>
                        <input onChange={(event) => { handleCheck(i); }} type="checkbox" checked={task.isFinished} />
                        <button className="btn" onClick={(event) => { deleteTask(i); }}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
export default Todo;