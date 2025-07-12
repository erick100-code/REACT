import { useState } from "react"
import Input from "./input";


function AddTaks(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="p-6 rounded-md shadow bg-slate-200 flex flex-col space-y-4">
            
            <Input 
                type="text"  
                placeholder="digite o título da tarefa" 
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input  
                type="text"  
                placeholder="digite o descrição da tarefa" 
                onChange={(event) => setDescription(event.target.value)}
            />


            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer" onClick={() => {
                
                if (!title.trim() || !description.trim()) {
                    return alert('prencha as duas caixas de entrada')
                }
            
                props.onAddTaskSubmit(title, description)
                {document.getElementsByTagName('input')[0].value = ''}
                {document.getElementsByTagName('input')[1].value = ''}

                setTitle("")
                setDescription("")
            }}>adicionar</button>
   
        </div>
    )
}

export default AddTaks