import React from 'react'

const CrearUsuario = () => {
    return (
        <div>
            <h2 className="text-center bg-primary text-white p-2">Crear Usuario</h2>
              <div className="container d-flex justify-content-center align-items-center">
                
                <form action="" className="w-100 mt-5">
                  <div className="row d-flex justify-content-evenly w-70">
                    <div className="mb-3 w-25 col-6">
                      <label for="nombre" className="form-label">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control w-70"
                        htmlName="name"
                      />
                    </div>
                    <div className="mb-3 w-25 col-6">
                      <label for="apellido" className="form-label">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control w-70"
                        htmlName="lastname"
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-evenly w-70">
                    <div className="mb-3 w-25 col-6">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control w-70"
                        htmlName="mail"
                      />
                    </div>
                    <div className="mb-3 w-25 col-6">
                      <label for="contrasena" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control w-70"
                        htmlName="password"
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
        </div>
    )
}

export default CrearUsuario
