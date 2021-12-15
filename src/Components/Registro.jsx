import Swal from "sweetalert2";
import { useState } from "react";
import Header from "./Header";

const Registro = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    contrasena: ""
  };

  const [registro, setRegistro] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault();

    // pequeña validación
    if (registro.nombre==="") {
      e.target[0].focus();
      return Swal.fire({
        title: "Error!",
        text: "Registre nombre de usuario",
        icon: "error",
      });
    }

    if (registro.apellido==="") {
      e.target[1].focus();
      return Swal.fire({
        title: "Error!",
        text: "Registre su apellido",
        icon: "error",
      });
    }

    if (registro.email==="") {
      e.target[2].focus();
      return Swal.fire({
        title: "Error!",
        text: "Registre su email",
        icon: "error",
      });
    }

    if (registro.password==="") {
      e.target[3].focus();
      return Swal.fire({
        title: "Error!",
        text: "El campo contraseña no cumple los requisitos",
        icon: "error",
      });
    }

    Swal.fire({
      title: "Éxito",
      text: "¡Registro exitozo!",
      icon: "success",
    });

    // limpiar form
    setRegistro(initialState);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setRegistro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
        <main>
          <div className="container-fluid bg-success p-5">
            <div className="row d-flex justify-content-center">
              <div className="col text-white">
                <h2> REGISTRESE</h2>
              </div>
            </div>
          </div>
          {/* formulario de registro */}
          <div className="container d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="w-100 mt-5">
              <div className="row d-flex justify-content-evenly w-70">
                <div class="mb-3 w-25 col-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control w-70"
                    name="nombre"
                    value={registro.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control w-70"
                    name="apellido"
                    value={registro.apellido}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-evenly w-70">
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-70"
                    name="email"
                    value={registro.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 w-25 col-6">
                  <label htmlFor="contrasena" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control w-70"
                    name="contrasena"
                    value={registro.contrasena}
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

export default Registro

