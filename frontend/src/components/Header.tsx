import { Link } from "react-router"
import { useNavigate } from "react-router"
import "../styles/Header.scss"
import logoLetras from "../assets/logo-letras.png"
export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-container">
                <img className="logo-img" src={logoLetras} alt="Logo de la Fundación Carlos Bacca" onClick={() =>{navigate("/")}} />
                <nav className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/Contactanos">Contacto</Link>
                    <Link to="/Documentos legales">Documentos legales</Link>
                    <Link to="/Galeria">Galería</Link>
                    <Link to="/Noticias">Noticias</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                </nav>
            </div>
        </header>
    )
}