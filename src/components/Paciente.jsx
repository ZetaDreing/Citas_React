function Paciente({paciente,setPaciente,eliminarPaciente}){
    const {nombre,propietario,email,fecha,sintomas,id} = paciente
    const handleEliminar =()=>{
        const respuesta = confirm('¿Desear eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return(
        <div className="bg-white py-10 rounded-xl px-5 shadow-md mx-2 mb-5 ">
                    
        <p className="uppercase font-bold mb-3 text-gray-700">Nombre: {''} <span className="normal-case font-normal">{nombre} </span> </p>
    
        <p className="uppercase font-bold mb-3 text-gray-700">Propietario: {''} <span className="normal-case font-normal">{propietario} </span> </p>
    
        <p className="uppercase font-bold mb-3 text-gray-700">Email: {''} <span className="normal-case 
        font-normal">{email} </span> </p>
    
        <p className="uppercase font-bold mb-3 text-gray-700">Fecha Alta: {''} <span className="normal-case font-normal">{fecha} </span> </p>
    
        <p className="uppercase font-bold mb-3 text-gray-700">Síntomas: {''} <span className="normal-case font-normal">{sintomas} </span> </p>
        <div className="flex justify-between mt-10">
            <button 
            type="button"
            className="bg-indigo-600 py-2 px-11 uppercase hover:bg-indigo-700 font-bold text-white rounded-lg"
            onClick={()=>setPaciente(paciente)}
            >Editar</button>
                        <button 
            type="button"
            className="bg-red-600 py-2 px-11 uppercase hover:bg-red-700 font-bold text-white rounded-lg"
            onClick={handleEliminar}
            >eliminar</button>
        </div>
    </div>

    )
}
export default Paciente