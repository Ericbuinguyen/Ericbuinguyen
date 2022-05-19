import React from 'react';

const Task = (props) => {
    return(
        <div className="task">
            <h1>{props.checked}</h1>
        </div>
        <Task />
        <Task />
        <Task />
    );
}

export default Task;