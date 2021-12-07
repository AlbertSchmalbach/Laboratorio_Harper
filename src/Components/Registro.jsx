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
                    <a className="nav-link ms-5 text-secondary active cursor">
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
            <div className = "row d-flex justify-content-evenly w-70" >
            <div class="mb-3 w-25 col-6">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control w-70" name="nombre"/>
            </div>
            <div className="mb-3 w-25 col-6">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control w-70" name="apellido"/>
            </div>
            </div>
            <div className = "row d-flex justify-content-evenly w-70" >
            <div className="mb-3 w-25 col-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control w-70" name="email"/>
            </div>
            <div className="mb-3 w-25 col-6">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input type="password" className="form-control w-70" name="contrasena"/>
            </div>
            </div>
            <div className="row d-flex justify-content-center w-70">
            <button type="submit" className="btn btn-primary w-25">Agregar</button>
            </div>
            
            </form>
            
          </div>
        </main>
    </div>;
  }
}

export default Registro;
