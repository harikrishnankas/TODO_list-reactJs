import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos,setTodos] = useState(["a", "bb", "ccc"]);
  const [value,setValue] = useState('')

  function presit(newList){
    localStorage.setItem('todos' , JSON.stringify({todos:newList}))
  }

  function handelAddTodo(newTodo){
    const newTodos = [...todos,newTodo]
    //presit(newTodos)
    setTodos(newTodos)
  }
  function handelDelete(index){
    const newTodos = todos.filter((todo,todoIndex) =>{return todoIndex!=index})
    //presit(newTodos)
    setTodos(newTodos)
  }
  function handelEdit(index){
    setValue(todos[index])
    handelDelete(index)  
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput value={value} setValue={setValue} handelAddTodo={handelAddTodo} />
      <TodoList handelDelete={handelDelete} handelEdit={handelEdit} todos={todos}/>
    </>
  )
}

export default App
