import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

function Todo_input(props) {

    function handle_change(e){
        props.setTodo(e.target.value)
    }

    function handle_submit(){

        if(props.todo==="")
        {
            toast.error("Can not add an empty task");
            return;
        }
       
       let new_todo={
        text:props.todo,
        id:uuidv4(),
        completed:false
       }
       props.setTodos([...props.todos , new_todo ]);
       props.setTodo("");
       toast.success("Successfully added a task")
    }

    useEffect(()=>{
  console.log(props.todo);
  console.log(props.todos);
    })
  return (
    <>
       {/* From here input todo */}
      <div className="flex h-8 justify-between"> 
        
       <div className="w-3/4 h-8"><input className="bg-white h-8" type="text" placeholder="Enter TODO" value={props.todo} onChange={(e)=>{handle_change(e)}} /></div>
       <div className="w-1/4 h-8 bg-blue-600 text-white text-center pt-1 font-semibold hover:cursor-pointer" onClick={handle_submit}>Add</div>
      </div>
      <ToastContainer />
    </>

  )
}

export default Todo_input
