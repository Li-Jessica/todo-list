// importing react and anything inside the {} = something specific from the library
import React, {useState, useEffect} from "react";
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";



function App() {
  {/* setInputText is the function that updates inputText 
      doing this, we can use the state anywhere in the app  
      we want inputText's state to reset each time we submit a new string

      we set the states up here so any other levels of components can use it
      we cannot set it in a lower component level and use it in a higher component level
      we can only pass states and props "downwards" and not "upwards"
  */}
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // USE EFFECT -> want to only RUN ONCE when app starts
  // empty array = makes this function run only once 
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT - everytime todo state changes, run this function
  // first parameter = a function (can have multiple, in this case we have filterHandler & saveLocalTodos)
  // second parameter = an array, if empty ([] -> then function will only run once)
  // but if we put states in the array, the function will run for every value 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions and events
  const filterHandler = () => {
    switch(status){
      case "completed":
        // if todo completed = true, set as completed 
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        // if all, then set them to every todo we have 
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local ONLY if todos is NOT empty (adding todos to local storage)
  // array of todos created in f12 -> application -> storage -> local storage -> http session
  const saveLocalTodos = () => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } 
  };

  // keeps todos even after refresh
  // check if we have todos or not
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Bumbus List</h1>
        </header>
      {/* rendering my components 
          taking "setInputText" and making it accessible to "Form"
      */}
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}
      />

      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos} 
        // setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default App;
