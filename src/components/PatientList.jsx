import Paciente from "./Paciente";
function PatientList({ pacientes, setPaciente,eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="font-bold text-center mt-5  mb-10">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y Citas</span>{" "}
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            La lista está vacía
          </h2>
          <p className="font-bold text-center mt-5  mb-10">
            Agrega pacientes {""}
            <span className="text-indigo-600">Y se mostrarán aquí</span>{" "}
          </p>
        </>
      )}
    </div>
  );
}
export default PatientList;
