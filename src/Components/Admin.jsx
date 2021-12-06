import React from "react";

const Admin = () => {
  return (
    <>
      <header>
        <div className="container-fluid bg-header shadow-sm">
          <div className="row d-flex p-5 ms-2">
            <div className="col">
              <h2> LABORATORIOS HARPER</h2>
            </div>
            <div className="col">
              <nav className="nav d-flex align-items-center justify-content-center">
                <select
                  className="form-select w-25 bg-light"
                  aria-label=".form-select-lg example"
                >
                  <option value="perfil">Perfil</option>
                  <option value="resultado">Administrador/Usuario</option>
                  <option value="salir">Salir</option>
                </select>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row bg-primary bg-gradient bg-opacity-50">
            <p className="text-white p-3 mb-2">Persona/Administrador</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="btn-group-vertical p-4">
                <button type="button" className="btn btn-secondary m-3">
                  Inicio
                </button>
                <button type="button" className="btn btn-secondary m-3">
                  Administrar Usuarios
                </button>
                <button type="button" className="btn btn-secondary m-3">
                  Cerrar Sesion
                </button>
              </div>
            </div>
            <div className="col-9 p-4">
              {/* Usuarios */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id_usuario</th>
                    <th scope="col">Nombres y Apellidos</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="btn btn-primary">Editar</button>
                      &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <button className="btn btn-primary">Editar</button>
                      &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                      <button className="btn btn-primary">Editar</button>
                      &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
