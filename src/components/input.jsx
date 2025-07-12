function input(props) {
    return (
        <input 
            className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...props}// todas as props que eu passar para esse input eu vou passar para esse html
        />
    )
}

export default input