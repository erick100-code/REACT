import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks({ tasks, onDeletTaskClick, onTaskClick }) {
    const navigate = useNavigate()
   
    function onSeeDetailsClick(task){

        const query = new URLSearchParams()

        query.set('title', task.title)
        query.set('description', task.description)

        navigate(`task/?${query}`)

    }


    return (
        <ul className="space-y-4 p-6 rounded-md shadow bg-slate-200">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-[0px_10px]">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 text-white p-2 rounded-[6px] w-full text-left ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>

                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    
                    <button onClick={() => onDeletTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
       
    )

}   

export default Tasks