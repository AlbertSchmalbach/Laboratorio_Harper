import React from "react";
import Header from "./Header";

const Usuario = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row bg-primary">
            <p className="text-white p-3 mb-2">Persona/Usuario</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="btn-group-vertical p-4">
                <button type="button" className="btn btn-secondary m-3">
                  Inicio
                </button>
                <button type="button" className="btn btn-secondary m-3">
                  Resultados
                </button>
                <button type="button" className="btn btn-secondary m-3">
                  Agendar Cita
                </button>
                <button type="button" className="btn btn-secondary m-3">
                  Cerrar Sesion
                </button>
              </div>
            </div>
            <div className="col-5">
              {/* Informacion de usuario */}
              <form action="" className="w-100 mt-5">
                <fieldset>
                  <legend className="text-center">
                    Informacion de Usuario
                  </legend>
                  <div className="row d-flex justify-content-around w-70">
                    <div class="mb-3 w-100">
                      <label for="nombre" className="form-label">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className="form-control w-100"
                        id="nombre"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-around w-70">
                    <div class="mb-3 w-50">
                      <label for="codigo-usuario" class="form-label">
                        Codigo de Usuario
                      </label>
                      <input
                        type="text"
                        class="form-control w-70"
                        id="codigo-usuario"
                        disabled
                      />
                    </div>
                    <div class="mb-3 w-50">
                      <label for="rol" class="form-label">
                        Rol
                      </label>
                      <input
                        type="text"
                        class="form-control w-70"
                        id="rol"
                        disabled
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-4">
              {/* Cambiar contraseña */}
              <form action="" className="w-70 mt-5 border border-2 p-3">
                <fieldset>
                  <legend className="text-center border border-2 bg-info p-2 text-secondary">
                    Cambiar Contraseña
                  </legend>
                  <div className="row d-flex justify-content-around w-70">
                    <div class="mb-3 w-50">
                      <label for="ant_contrasena" className="form-label">
                        Antigua Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control w-100"
                        id="ant_contrasena"
                      />
                    </div>
                    <div class="mb-3 w-50">
                      <label for="n_contrasena" class="form-label">
                        Nueva Contraseña
                      </label>
                      <input
                        type="password"
                        class="form-control w-70"
                        id="n_contrasena"
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-around w-70">
                    <div className="mb-3 w-50">
                      <label for="c_contrasena" class="form-label">
                        Confirmar Contraseña
                      </label>
                      <input
                        type="password"
                        class="form-control w-70"
                        id="c_contrasena"
                      />
                    </div>
                    <div className="mb-3 w-50">
                      <button className="btn btn-primary w-70 mt-4">
                        Guardar Cambios
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Usuario;
