import React, { Component } from "react";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <header>
          <div className="container-fluid bg-header shadow-sm">
            <div className="row d-flex p-5 ms-2">
              <div className="col">
                <h2> LABORATORIOS HARPER</h2>
              </div>
              <div className="col">
                <nav className="nav d-flex align-items-center justify-content-center">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5 active cursor"> HOME </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5 text-secondary cursor">
                      {" "}
                      REGISTRESE{" "}
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5 text-secondary cursor">
                      {" "}
                      INICIO DE SESION{" "}
                    </a>{" "}
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </header>
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
            <form action="" className="w-100 mt-5">
            <div className = "row d-flex justify-content-around w-70" >
            <div class="mb-3 w-50">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control w-70" id="nombre"/>
            </div>
            <div class="mb-3 w-50">
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control w-70" id="apellido"/>
            </div>
            </div>
            <div className = "row d-flex justify-content-around w-70" >
            <div class="mb-3 w-50">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control w-70" id="email"/>
            </div>
            <div class="mb-3 w-50">
                <label for="contrasena" class="form-label">Contraseña</label>
                <input type="password" class="form-control w-70" id="contrasena"/>
            </div>
            </div>

            <button type="submit" class="btn btn-primary w-25">Enviar</button>
            </form>
            
          </div>
        </main>
    </div>;
  }
}

export default Registro;
