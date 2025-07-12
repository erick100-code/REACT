import { useEffect, useState } from "react"
import AddTaks from "./components/AddTaks"
import Tasks from "./components/tasks"
import './App.css'
import { v4 } from "uuid"
// import { json } from "react-router-dom"


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {// sempre que o valor que eu colocar dentro da lista for alterado executa função!
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      
      // NÃO PRECISA ALTERAR A TAREFA
      return task
    }) 
    setTasks(newTasks)
    
  }
  
  function onDeletTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id != taskId)// cria um novo array e mantem na lista apenas as tasks que tiverem o id diferente de task.id
    setTasks(newTask)
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
  }
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> 
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">gerenciador de tarefas</h1>
        <AddTaks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeletTaskClick={onDeletTaskClick} />
      </div>
    </div>
  )
}

export default App

// quando queremos que o componente filho altere o (STATES) criamos uma função no componente pai que altera o estate e passamos essa função para o componente filho