import "../styles/Footer.scss";
import { FaFacebook, FaInstagram, FaHome } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logoFinal from "../assets/logo-completo.png";

export default function Footer() {
    const instagram = "https://www.instagram.com/cdcarlosbacca/";
    const facebook = "https://www.facebook.com/clubcarlosbacca/";
    const twitter = "https://x.com/FDCBacca";
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="redes-sociales">
                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <div className="red">
                            <p className="nombre">Facebook</p>
                            <FaFacebook className="icon" />

                        </div>
                    </a>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">

                        <div className="red">
                            <p className="nombre">Instagram</p>
                            <FaInstagram className="icon" />

                        </div>
                    </a>
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <div className="red">
                            <p className="nombre">X</p>
                            <FaXTwitter className="icon" />

                        </div>
                    </a>
                </div>
                <div className="logo-final">
                    <img src={logoFinal} alt="Logo de la Fundación Carlos Bacca" onClick={() => {window.scrollTo({top:0, behavior:'smooth'})}} />
                </div>
                <div className="informacion">
                    <div className="seccion">
                        <p className="Titulo">¿Donde estamos?</p>
                        <div className="contenido">
                            <FaHome className="icono" />
                            <p>Calle 7 No. 9 - 23, Puerto Colombia, Atlántico</p>
                        </div>
                    </div>
                    <div className="seccion">
                        <p className="Titulo">¿Cómo contactarnos?</p>
                        <div className="contenido">
                            <FaPhone className="icono" />
                            <p>+57 300 272 7154</p>
                        </div>
                        <div className="contenido">
                            <MdPhoneAndroid className="icono" />
                            <p>+57 300 272 7154</p>
                        </div>
                        <div className="contenido">
                            <MdEmail className="icono" />
                            <p>fundacion_cb@hotmail.com</p>
                        </div>
                    </div>
                </div>


            </div>
            <p className="derechos">© 2025 Fundación Carlos Bacca. Todos los derechos reservados.</p>
        </footer>
    );
};
