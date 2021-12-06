import React from "react";

const Resultados = () => {
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
                  <option value="resultado">Resultados</option>
                  <option value="salir">Salir</option>
                </select>

                {/* <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5 text-secondary cursor"> INICIO DE SESION </a>{" "}
                  </li> */}
              </nav>
            </div>
          </div>
        </div>
      </header>

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
                  Cerrar Sesion
                </button>
              </div>
            </div>
            <div className="col-9">
              {/* Resultados */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombres y Apellidos</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Medico</th>
                    <th scope="col">Descargar</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Empresa1</td>
                    <td>Medico1</td>
                    <td>Resultado1</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Empresa1</td>
                    <td>Medico1</td>
                    <td>Resultado1</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Empresa1</td>
                    <td>Medico1</td>
                    <td>Resultado1</td>
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

export default Resultados;
