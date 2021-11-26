import React, { Component } from 'react';


class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <header>
            <div className = "container-fluid bg-danger shadow-sm">
                
                <div className = "row d-flex p-5 m-2">
                <div className = "col">
                    <h2> LABORATORIOS HARPER</h2>
                     </div> 
                <div className = "col">
                    
                    <nav className = "nav d-flex align-items-center justify-content-center" > 
                        
                            <li className = "nav-item"> <a className = "nav-link ms-5"> HOME </a> </li>
                            <li className = "nav-item"> <a className = "nav-link ms-5"> REGISTRESE </a> </li>
                            <li className = "nav-item"> <a className = "nav-link ms-5"> INICIO DE SESION </a> </li>
                        

                    </nav>
                    
                     </div>
                     
                     </div>
            </div>

           </header>

           


        </div>);
    }
}
 
export default Inicio;
