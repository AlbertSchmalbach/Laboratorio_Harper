import React, { Component } from "react";
import Banner from '../Components/img/banner.PNG'
import '../Components/css/Inicio.css'

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
                    <a className="nav-link ms-5 text-secondary cursor"> REGISTRESE </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5 text-secondary cursor"> INICIO DE SESION </a>{" "}
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container-fluid">
            <img src={Banner} class="img-fluid w-100 h-20 d-inline-block" alt="imagen del banner"/>
          </div>
        </main>
        <footer className=" text-center text-white">
  
        <div className="container d-flex justify-content-around p-4 ">
          <div className="col">
            <h1><a className="boton-cita cursor">Agende su cita aquí</a></h1>
          </div>
          <div className="col">
          <button type="button" class="boton">Libro de agendas</button>
          </div>

        </div>
        {/* <div className="text-center p-3">
          © 2021 Copyright -
          <a className="text-white" href="#">&nbsp; Laboratorios Harper</a>
        </div> */}

  </footer>
      </div>
    );
  }
}

export default Inicio;
