import img1 from '../img/imagenes/carrousel-1.jpg'
import img2 from '../img/imagenes/carrousel-2.jpg'
import img3 from '../img/imagenes/carrousel-3.jpg'
import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <   img src={img3} className="d-block imgCarousel" alt="Primera Imagen" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block imgCarousel" alt="Segunda Imagen" />
                </div>
                <div className="carousel-item">
                    <img src={img1} className="d-block imgCarousel" alt="Tercera Imagen" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        )
    }
}
 
export default Carousel;