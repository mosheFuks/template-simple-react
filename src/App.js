//import logo from '../src/img/logo-circular-texto.png';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Componentes/Nav';
import Footer from './Componentes/Footer'
import Blog from "./Componentes/Blog"
import Formulario from "./Componentes/Formulario"
import Home from "./Componentes/Home"

function App() {
  return (
    <div className="container-fluid">
      <Router >
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
