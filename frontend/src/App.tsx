import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Documentos from './pages/Documentos'
import Galeria from './pages/Galeria'
import Noticias from './pages/Noticias'
import Nosotros from './pages/Nosotros'
import Header from './components/Header'
import './styles/App.scss'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contactanos" element={<Contacto />} />
          <Route path="/Documentos legales" element={<Documentos />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

