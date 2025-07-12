function bot(props) {
    return(
        <button 
            {...props}
            className="bg-slate-400 text-white p-2 rounded-md"
        >
            {props.children}

        </button>//props.children é o que eu passo para dentro do componente quando eu utilizo eles
    )       
}

export default bot