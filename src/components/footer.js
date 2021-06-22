import React, {Component} from "react";
import './Footer.css';
class footer extends Component {
    render() {
        return (
            <div className ="wrapper-pie">
                <div className ="container">
                    <div className ="row pie">
                        <div className="col-sm-4 piebloque">
                            Ubicación: Informacion
                        </div>
                        <div className="col-sm-4 piebloque">
                            Contactanos: Informacion
                        </div>
                        <div className="col-sm-4 piebloque">
                            Sobre este sitio
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;