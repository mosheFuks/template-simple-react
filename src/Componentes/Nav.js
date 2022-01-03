import imgnavbar from '../Componentes/img/imagenes/header-simpsons.gif'
import React from 'react';
import { Link } from 'react-router-dom';


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
                            <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/formulario">Formulario</Link>
                        </li>
                    </ul>
                    <form className="d-flex margin">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" / >
                        <button className="btn btn-outline-danger" type="submit">Busqueda</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Nav;
