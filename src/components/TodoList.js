import React from 'react';
// import components
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos, setFilteredTodos}) => {
    // const deleteHandler = () => {
    //     setTodos([]);
    //     setFilteredTodos([]);
    //     localStorage.setItem("todos", JSON.stringify([]));
    // };

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* From each todo from our state (of inputs), we'll render out a todo component 
                    Then within each todo, pass the input text (state) data to Todo.js 
                    Can pass the props e.g. todo.text, todo.id, etc. 
                    e.g. pass data from state 
                    key = unique id so react can render react lists properly 
                    */}
                {filteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos}
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                    />
                ))}
            </ul>
            {/* <button onClick={deleteHandler} className="clear-btn"> 
                <i className="fas fa-trash"></i>
            </button> */}
        </div>
    );
};

export default TodoList;