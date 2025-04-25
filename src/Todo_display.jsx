import 'material-symbols';



function Todo_display(props) {

    function delete_todo(todo_id)
    {
        // console.log(todo)

        const updated_todos = props.todos.filter((todo)=>{
            console.log(todo);
            return(todo.id!=todo_id)
        })

        props.setTodos(updated_todos);
    }

    function update_todo(todo_id)
    {
        // console.log(todo)

        const updated_todos = props.todos.map((todo)=>{
            if(todo.id === todo_id)
            {
                todo.completed = !todo.completed;
            }
            return(todo)
        })

        props.setTodos(updated_todos);
    }
     
    let todo_list = props.todos.map((todo)=>{
     return(<div className="flex flex-row bg-white px-2 py-1 hover:shadow-md cursor-pointer" key={todo.id} >
  
        {todo.completed?<div className="w-1/2 line-through"  > {todo.text}  </div>:<div className="w-1/2"  > {todo.text}  </div>}
        
        {todo.completed ?<div className="w-1/4"></div>:<div className="w-1/4 bg-green-200 text-center text-black font-semibold hover:cursor-pointer" onClick={()=>{update_todo(todo.id)}}>Done</div>}
        
        <div className="w-1/4 text-center " onClick={()=>{delete_todo(todo.id)}}><span className="material-symbols-outlined text-red-500 hover:cursor-pointer">delete</span></div>


        
        </div>)
    })
    return (
      <>
       <div className="flex flex-col gap-3 h-50 overflow-y-scroll ">{todo_list}</div>
            
      
      </>
    )
  }
  
  export default Todo_display
  