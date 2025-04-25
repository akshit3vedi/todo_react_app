import Todo_input from "./Todo_input";
import Todo_display from "./Todo_display";
import { useState } from "react";
function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  

  return (
    <>
    <div className="h-screen w-screen grid place-items-center">
    <div className="h-1/2 w-1/4 bg-blue-50 p-8 shadow-md">
       <div className="text-center text-xl text-blue-600 font-semibold">Todo App</div>
       
       <br />
       <Todo_input todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
       <br />
       <Todo_display todos={todos} setTodos={setTodos}/>
       </div>
       </div>
    </>
  )
}

export default App
