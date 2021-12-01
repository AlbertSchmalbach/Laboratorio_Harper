import React, { Component } from "react";

class Sesion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                <h2> INICIO DE SESION</h2>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <form action="" className="w-25 mt-5">
            <div class="mb-3">
                <label for="login" class="form-label">Usuario</label>
                <input type="text" class="form-control w-100" id="login"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control w-100" id="password"/>
            </div>

            <button type="submit" class="btn btn-primary w-100">Enviar</button>
            </form>
            
          </div>
        </main>
      </>
    );
  }
}

export default Sesion;
<div></div>;
