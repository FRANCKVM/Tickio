import { Link } from 'react-router-dom';
import './Footer.css';

import {
  FaEnvelope,
  FaPhone,
  FaRegCalendarAlt,
  FaRegClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column-logo">
          <img src="/logo.png" alt="Tickio" className="footer-logo-img" />
        </div>

        <div className="footer-column-links">
          <Link to="/">Inicio</Link>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/trending">Eventos en tendencia</Link>
          <Link to="/categorias">Categorías</Link>
        </div>

        <div className="footer-column-contact">
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <span className="contact-label">Correo</span>
            <span className="contact-value">sparessupport@metaticket.in</span>
          </div>

          <div className="footer-contact-item">
            <FaPhone className="footer-icon" />
            <span className="contact-label">Teléfono</span>
            <span className="contact-value">8884516856</span>
          </div>

          <div className="footer-contact-item">
            <FaRegCalendarAlt className="footer-icon" />
            <span className="contact-label">Días de atención</span>
            <span className="contact-value">Lunes a domingo</span>
          </div>

          <div className="footer-contact-item">
            <FaRegClock className="footer-icon" />
            <span className="contact-label">Horario de atención</span>
            <span className="contact-value">8:00 a. m. - 8:00 p. m. (IST)</span>
          </div>

          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span className="contact-label">Dirección</span>
            <span className="contact-value">Jr. Yavari 123, Breña, Lima</span>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © 2025 Tickio S.A.C.
      </div>
    </footer>
  );
}

export default Footer;