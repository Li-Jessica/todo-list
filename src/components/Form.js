// import react so we can actually use it 
import React from "react";

// e.g. setInputText is from App.js
const Form = ({ setInputText, todos, setTodos, inputText, setStatus, setFilteredTodos }) => {
    // log the value of the todo input
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    };
    
    // prevent page refresh when we hit "+" button 
    const submitTodoHandler = (e) => {
        e.preventDefault();
        // array of todo's 
        setTodos([
            // ...todos = if I had todos already in the list, just pass it 
            // , {} = if I have a new one, just add it on
            // should use a package to generate an ID instead of just random 
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}, 
        ]);
        // set state of input text back to empty
        setInputText("");
    };

    const statusHander = (e) => {
        // get value of select 
        //console.log(e.target.value);
        setStatus(e.target.value);
    }

    const deleteHandler = () => {
        setTodos([]);
        setFilteredTodos([]);
        localStorage.setItem("todos", JSON.stringify([]));
    };


    return(
        <form>
            {/* adding "value={inputText}" makes UI update with the state by making value = our state (input text) */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHander} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <button onClick={deleteHandler} className="clear-btn"> 
                <i className="fas fa-trash"></i>
            </button>
      </form>
    );
}

export default Form;