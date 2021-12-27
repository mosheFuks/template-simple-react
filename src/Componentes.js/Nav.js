import imgnavbar from '../img/imagenes/header-simpsons.gif'
import React from 'react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src={imgnavbar} alt="logo pagina" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <form class="d-flex margin">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" / >
                        <button class="btn btn-outline-danger" type="submit">Busqueda</button>
                    </form>
                    
                </div>
            </nav>
        );
    }
}

export default Nav;
