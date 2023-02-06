import { useState, useEffect } from "react";
import Error from "./Error";
function Form({ pacientes, setPacientes, paciente,setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);

      //Objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };
      if (paciente.id) {
        //Editando el registro
        objetoPaciente.id = paciente.id

        const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente:pacienteState)

        setPacientes(pacienteActualizados)
        setPaciente({})
      } else {
        //Nuevo Registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      //Reiniciar el formulario
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    }
  };
  return (
    <div className="md:w-1/2 lg:-2/5">
      <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
      <p className="text-center mt-5 font-bold">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md py-10 px-5 rounded-md my-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}
          <label
            htmlFor="mascota"
            className="block text-gray-700  uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full placeholder-gray-400 border-2 p-2 rounded-md mt-2 "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block text-gray-700  uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="w-full placeholder-gray-400 border-2 p-2 rounded-md mt-2 "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700  uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="w-full placeholder-gray-400 border-2 p-2 rounded-md mt-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="alta"
            className="block text-gray-700  uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="w-full placeholder-gray-400 border-2 p-2 rounded-md mt-2 cursor-pointer "
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sintomas"
            className="block text-gray-700  uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas de tu mascota"
            name=""
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
          type="submit"
          onClick={()=>{
          }}
          className="bg-indigo-600 w-full p-2 uppercase text-white font-bold rounded-md hover:bg-indigo-500 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
}

export default Form;
