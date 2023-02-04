import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    // events
    const deleteHandler = () => {
        // todos.filter goes through each parameter  of the state 
        // basically it goes through the array of objects (e.g. completed, id, text) 
        // if element id (el.id) aka element we're clicking to delete matches todo.id, then it'll get rid of it 
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        // ...item = pass whatever properties it already has (e.g. id, text, etc.)
                        ...item, 
                        // and just modify "completed" to the opposite of the "completed" property
                        completed: !item.completed,
                    };
                }
                // just in case if it doesn't match, return whatever it was 
                return item;
            })
        );
    };

    return(
        <div className="todo">
            {/* surround to-item with {} -> insert javascript
                if todo.completed = true -> add class of "completed"
                if false, don't add anything ''
                so now we can toggle "completed"
                */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"> 
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;