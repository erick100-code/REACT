import { useState } from "react"


function AddTaks(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="p-6 rounded-md shadow bg-slate-200 flex flex-col space-y-4">
            
            <input id="inp1" type="text"  placeholder="digite o título da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            onChange={(event) => setTitle(event.target.value)}
            />
            
            <input id="inp2" type="text"  placeholder="digite o descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            onChange={(event) => setDescription(event.target.value)}
            />
            
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer" onClick={() => {
                
                if (!title.trim() || !description.trim()) {
                    return alert('prencha as duas caixas de entrada')
                }
                
                props.onAddTaskSubmit(title, description)
                
                {document.getElementById('inp1').value = ""}
                {document.getElementById('inp2').value = ""}

                setTitle("")
                setDescription("")
            }}>adicionar</button>
   
        </div>
    )
}

export default AddTaks