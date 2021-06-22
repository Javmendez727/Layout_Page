import React, {Component} from "react";
import './Description.css';

class description extends Component {
    
    render() {
        return (
            <div className = "content_des">
                <div className="t1 white">Titulo</div>
                <div className="t3 white">Descripción larga de la página Web</div>
            </div>
        );
    }
}

export default description;