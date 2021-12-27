//import logo from '../src/img/logo-circular-texto.png';
import Card from './Componentes.js/Card.js';
import Carousel from './Componentes.js/Carousel.js';
import Footer from './Componentes.js/Footer.js';
import Nav from './Componentes.js/Nav.js'

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
