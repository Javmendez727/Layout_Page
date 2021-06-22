import React, {Component} from "react";
import './Navbar.css';

  
class navbar extends Component {
    
    render() {
        return (
            <div className="wrapper">
                <div className="menu_position">
	                <a href="/albergue" className="menu white">Albergue</a>         
	                <a href="/historias" className="menu white">Historias</a>
                    <a href="/actividades" className="menu white">Actividades</a>
                    <a href="/blog" className="menu white">Blog</a>
                    <a href="/contacto" className="menu white">Contacto</a>
	
                </div>
            </div>  
        );
    }
}

export default navbar;