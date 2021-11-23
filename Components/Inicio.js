import React, { Component } from 'react';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <header>
            <div className = "container">
                <div className="logo">
                    <h2> LABORATORIOS HARPER</h2>
                     </div> 
                <div className = "nav">
                    
                    <nav> 
                        <ul> 
                            <li> HOME </li>
                            <li> REGISTRESE </li>
                            <li> INICIO DE SESION</li>
                        </ul>

                    </nav>
                    
                     </div>

            </div>

            </header>

        </div>);
    }
}
 
export default Inicio;
