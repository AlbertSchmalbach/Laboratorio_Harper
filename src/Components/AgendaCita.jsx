import Swal from "sweetalert2";
import { useState } from "react";
import Header from "./Header";

const AgendaCita = () => {
    const initialState = {
        nombres: "",
        tel: "",
        fecha: "",
        hora: ""
      };
    
      const [agenda, setAgenda] = useState(initialState)
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // pequeña validación
        if (agenda.nombres==="") {
          e.target[0].focus();
          return Swal.fire({
            title: "Error!",
            text: "Escriba su nombre completo",
            icon: "error",
          });
        }
    
        if (agenda.tel==="") {
          e.target[1].focus();
          return Swal.fire({
            title: "Error!",
            text: "Registre su numero de telefono",
            icon: "error",
          });
        }
    
        if (agenda.fecha==="") {
          e.target[2].focus();
          return Swal.fire({
            title: "Error!",
            text: "Registre la fecha de la cita",
            icon: "error",
          });
        }
    
        if (agenda.hora==="") {
          e.target[3].focus();
          return Swal.fire({
            title: "Error!",
            text: "Registre la hora de la cita",
            icon: "error",
          });
        }
    
        Swal.fire({
          title: "Éxito",
          text: "¡Cita agendada!",
          icon: "success",
        });
    
        // limpiar form
        setAgenda(initialState);
      };
    
      const handleChange = (e) => {
        const { name, value, type } = e.target;
    
        setAgenda((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    return (
        <>
      <Header />
        <main>
          <div className="container-fluid bg-primary p-5">
            <div className="row d-flex justify-content-center">
              <div className="col text-white">
                <h2> AGENDAR CITA</h2>
              </div>
            </div>
          </div>
          {/* formulario de registro */}
          <div className="container d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="w-100 mt-5">
              <div className="row d-flex justify-content-evenly w-70">
                <div class="mb-3 w-25 col-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control w-70"
                    name="nombres"
                    value={agenda.nombres}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="apellido" className="form-label">
                    Celular
                  </label>
                  <input
                    type="text"
                    className="form-control w-70"
                    name="tel"
                    value={agenda.tel}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-evenly w-70">
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="email" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="form-control w-70"
                    name="fecha"
                    value={agenda.fecha}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="contrasena" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    className="form-control w-70"
                    name="hora"
                    value={agenda.hora}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center w-70">
                <button type="submit" className="btn btn-primary w-25">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </main>
    </>
    )
}

export default AgendaCita
