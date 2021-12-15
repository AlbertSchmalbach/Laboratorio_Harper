import React, { Component } from "react";
import Banner from "../Components/img/banner.PNG";
import "../Components/css/Inicio.css";
import Header from "./Header";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     
        <>
          <Header />
          <main>
            <div className="container-fluid">
              <img
                src={Banner}
                class="img-fluid w-100 h-20 d-inline-block"
                alt="imagen del banner"
              />
            </div>
          </main>
          <footer className=" text-center text-white">
            <div className="container d-flex justify-content-around p-4 ">
              <div className="col">
                <h1>
                  <a className="boton-cita cursor">Agende su cita aquí</a>
                </h1>
              </div>
              <div className="col">
                <button type="button" className="boton">
                  Libro de agendas
                </button>
              </div>
            </div>
          </footer>
        </>
      
    );
  }
}

export default Inicio;
