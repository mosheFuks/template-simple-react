import maggie from '../Componentes/img/imagenes/maggie.jpg'
import homero from '../Componentes/img/imagenes/homer.jpg'
import bart from '../Componentes/img/imagenes/bart.jpg'

import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            personajes: [{name: homero, }]
         }
    }
    render() { 
        return (
        <div className="row mt-3 row-cols-1 row-cols-md-3 g-4 fondoCards">
            <div className="col marginCard">
                <div className="card" style={{width: "18rem"}}>
                <img src={maggie} className="card-img-top" alt="Maggie" />
                    <div className="card-body">
                        <h5 className="card-title">Maggie</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary color">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col marginCard">
                <div className="card" style={{width: "18rem"}}>
                <img src={homero} className="card-img-top" alt="Homero" />
                    <div className="card-body">
                        <h5 className="card-title">Homero</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary color">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col marginCard">
                <div className="card" style={{width: "18rem"}}>
                <img src={bart} className="card-img-top" alt="Bart" />
                    <div className="card-body">
                        <h5 className="card-title">Bart</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary color">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Card;