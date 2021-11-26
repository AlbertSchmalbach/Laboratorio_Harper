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
          <div className="container-fluid bg-danger shadow-sm">
            <div className="row d-flex p-5 ms-2">
              <div className="col">
                <h2> LABORATORIOS HARPER</h2>
              </div>
              <div className="col">
                <nav className="nav d-flex align-items-center justify-content-center">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5"> HOME </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5"> REGISTRESE </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link ms-5"> INICIO DE SESION </a>{" "}
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
        <footer className="bg-dark text-center text-white">
  
  <div className="container p-4 pb-0">
    
    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      
  
    
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

    </section>
  
  </div>
  <div className="text-center p-3">
    © 2021 Copyright -
    <a className="text-white" href="#">&nbsp; Laboratorios Harper</a>
  </div>

  </footer>
      </div>
    );
  }
}

export default Inicio;
