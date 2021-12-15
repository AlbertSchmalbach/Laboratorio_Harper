//import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import Header from "./Header";

const Sesion = () => {
  const initialState = {
    login: "",
    password: "",
  };

  const [sesion, setSesion] = useState({ initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    // pequeña validación
    if (sesion.login==="") {
      e.target[0].focus();
      return Swal.fire({
        title: "Error!",
        text: "Usuario obligatorio",
        icon: "error",
      });
    }

    if (sesion.password==="") {
      e.target[1].focus();
      return Swal.fire({
        title: "Error!",
        text: "Contraseña obligatorio",
        icon: "error",
      });
    }

    Swal.fire({
      title: "Éxito",
      text: "¡Logeado con exito!",
      icon: "success",
    });

    // limpiar form
    setSesion(initialState);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setSesion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div>
      <Header />
      <main>
        <div className="container-fluid bg-success p-5">
          <div className="row d-flex justify-content-center">
            <div className="col text-white">
              <h2> INICIO DE SESION</h2>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          {/* {error && <PintarError />} */}
          <form onSubmit={handleSubmit} className="w-25 mt-5">
            <div class="mb-3">
              <label htmlFor="login" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control  w-100 mb-2"
                name="login"
                value={sesion.login}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control w-100 mb-2"
                name="password"
                value={sesion.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Sesion;
