import logoX from '../../assets/logosRedesSociales/logoX.png'
import logoInstagram from '../../assets/logosRedesSociales/logoInstagram.png'
import logoFacebook from '../../assets/logosRedesSociales/logoFacebook.png'
import logoYoutube from '../../assets/logosRedesSociales/logoYoutube.png'
import logoTikTok from '../../assets/logosRedesSociales/logoTikTok.png'

import '../../styles/footer/footer.css'

import React from 'react'

function pieDePagina() {
  return (
    <footer>
        <div className="conocenos">
            <h4>Conocenos</h4>
            <ul>
                <li>
                    <a href="">Trabaja con nosotros</a>
                </li>
                <li>
                    <a href="">Folletos</a>
                </li>
                <li>
                    <a href="">Encuentra tu tienda</a>
                </li>
                <li>
                    <a href="">Tarjeta de socio</a>
                </li>
                <li>
                    <a href="">App</a>
                </li>
                <li>
                    <a href="">Videojuegos</a>
                </li>
            </ul>
        </div>
        <div className="atencionAlCLiente">
            <h4>Atencion al cliente</h4>
            <ul>
                <li>
                    <a href="">Contactanos</a>
                </li>
                <li>
                    <a href="">Compra en nuestra tienda</a>
                </li>
                <li>
                    <a href="">Clic y recoger</a>
                </li>
                <li>
                    <a href="">Reservas</a>
                </li>
                <li>
                    <a href="">Envios</a>
                </li>
                <li>
                    <a href="">Mi pedido</a>
                </li>
                <li>
                    <a href="">Facturacion</a>
                </li>
            </ul>
        </div>
        <div className="siguenos">
            <h4>Siguenos</h4>
            <ul>
                <li>
                  <img src={logoX} alt="" />
                    <a href="">X</a>
                </li>
                <li>
                  <img src={logoInstagram} alt="" />
                    <a href="">Instagram</a>
                </li>
                <li>
                  <img src={logoFacebook} alt="" />
                    <a href="">Facebook</a>
                </li>
                <li>
                  <img src={logoYoutube} alt="" />
                    <a href="">Youtube</a>
                </li>
                <li>
                  <img src={logoTikTok} alt="" />
                    <a href="">Tik Tok</a>
                </li>
            </ul>
        </div>
        <div className="Legal">
            <h4>Legal</h4>
            <ul>
                <li>
                    <a href="">Condiciones de venta</a>
                </li>
                <li>
                    <a href="">Informacion legal</a>
                </li>
                <li>
                    <a href="">Politica de privacidad</a>
                </li>
                <li>
                    <a href="">Politica de cookies</a>
                </li>
                <li>
                    <a href="">Contratos</a>
                </li>
            </ul>
        </div>

    </footer>
  )
}

export default pieDePagina