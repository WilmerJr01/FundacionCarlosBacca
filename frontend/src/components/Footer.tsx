import "../styles/Footer.scss";
import { FaFacebook, FaInstagram, FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoFinal from "../assets/logo-completo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="redes-sociales">
                    <a href="https://www.facebook.com/FundacionCarlosBacca" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://www.instagram.com/FundacionCarlosBacca" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://twitter.com/FundCarlosBacca" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="icon" />
                    </a>
                </div>
                <div className="logo-final">
                    <img src={logoFinal} alt="Logo de la Fundación Carlos Bacca" />
                </div>
                <div className="informacion">
                    <p>¿Donde estamos?</p>
                    <div className="ubicacion">
                        <FaHome />
                        <p>Calle 7 No. 9 - 23, Puerto Colombia, Atlántico</p>
                    </div>
                </div>
                

            </div>
            <p className="derechos">© 2025 Fundación Carlos Bacca. Todos los derechos reservados.</p>
        </footer>
    );
};
