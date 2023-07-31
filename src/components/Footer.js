import React from 'react';
import "./Footer.css"


const Footer = () => {
  return (
    <footer class="footer-distributed">

      <div class="footer-left">

        <h3><span>Misiotrónica</span></h3>

        <p class="footer-links">
          <a href="/" class="link-1">Inicio</a>
          
          <a href="/venta">Venta</a>
        
          <a href="/quienesomos">Quienes Somos</a>
        
          <a href="/contacto">Contacto</a>
          
         </p>

        <p class="footer-company-name">Company Name © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span> Av. República Argentina 37, N3370</span> Posadas, Misiones</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+54 1131648210</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">misiotronica@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        
        <div class="footer-icons">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
