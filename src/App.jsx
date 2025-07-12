import { useEffect, useState } from "react"
import AddTaks from "./components/AddTaks"
import Tasks from "./components/tasks"
import Title from "./components/title";
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

  useEffect(() => {// quando passamos como segundo parametro uma lista vazia, a função só é executada uma vez, e essa vez é quando o usuario iniciar a aplicação 
    // async function dadosInit() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3', 
    //   {
    //     method: 'GET'
    //   })
    //   const jason = await response.json()
    //   setTasks(jason)
    // }

    // dadosInit()
  }, [])//em poucas pala executa a função quando o usuario acessa pela primeira vez
  

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
      <Title>
        gerenciador de tarefas
      </Title>
        <AddTaks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeletTaskClick={onDeletTaskClick} />
      </div>
    </div>
  )
}

export default App

// quando queremos que o componente filho altere o (STATES) criamos uma função no componente pai que altera o estate e passamos essa função para o componente filho