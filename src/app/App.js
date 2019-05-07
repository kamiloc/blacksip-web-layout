import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faHeart,
  faShoppingBag,
  faShoePrints,
  faPlaneDeparture,
  faDollarSign,
  faSyncAlt,
  faPaperPlane,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faCcPaypal,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcDinersClub
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import Collapsible from "react-collapsible";

import "./App.css";
import logo from "../assets/images/logo.png";
import carouselImage2 from "../assets/carousel/2.jpg";
import carouselImage3 from "../assets/carousel/3.jpg";
import carouselImage4 from "../assets/carousel/4.jpg";
import chatImage from "../assets/images/chat.jpg";

function App() {
  const carouselSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="first-nav-options">
            <button>Mis pedidos</button>
            <span>·</span>
            <button>Contacto</button>
          </div>

          <div className="header-main">
            <div className="search-bar">
              <input placeholder="¿Que estás buscando?" type="text" />
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <div className="search-icon">
              <FontAwesomeIcon icon={faBars} size="2x" />
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </div>

            <img className="logo-image" src={logo} alt="Aplication logo" />

            <div className="header-nav">
              <button>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                Tiendas
              </button>

              <button>
                <FontAwesomeIcon icon={faHeart} size="2x" />
                Lista de deseos
              </button>

              <button>
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
                Mi bolsa
              </button>
            </div>

            <div className="header-nav-icons">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </div>
          </div>
        </header>

        <nav className="main-nav-menu">
          <ul>
            <li>JEANS</li>
            <li>DENIM</li>
            <li>ROPA</li>
            <li>ACCESORIOS</li>
            <li>BÁSICOS INFALTABLES</li>
            <li>NOVEDADES</li>
            <li class="special">REBAJAS</li>
          </ul>
        </nav>

        <section className="content content-1">
          <h1 className="title">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISCING ELI
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit prae-sent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi
          </p>
        </section>

        <Slider {...carouselSettings} className="Slider">
          <div className="carousel-img">
            <img src={carouselImage2} alt="Carousel 2" />
          </div>
          <div className="carousel-img">
            <img src={carouselImage3} alt="Carousel 3" />
          </div>
          <div className="carousel-img">
            <img src={carouselImage4} alt="Carousel 4" />
          </div>
        </Slider>

        <section className="content content-2">
          <div>
            <h2>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              NONUMMY NIBH
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat
            </p>

            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros.
            </p>
          </div>

          <div>
            <h2>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              NONUMMY NIBH
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>

            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>
        </section>

        <section className="content content-3">
          <div>
            <h2>LOREM IPSUM DOLOR</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla.
            </p>
          </div>

          <div>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Collapsible
                key={i}
                trigger="¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie
                  conse-quat, vel illum dolore eu feugiat nulla facilisis at
                  vero eros et accumsan et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis dolore te feugait
                  nulla facilisi
                </p>
              </Collapsible>
            ))}
          </div>
        </section>

        <section className="content content-4">
          <form>
            <h2>LOREM IPSUM DOLOR SIT </h2>

            <input placeholder="Item formulario" type="text" />

            <div class="form-row">
              <input placeholder="Item formulario" type="text" />
              <input placeholder="Item formulario" type="text" />
            </div>

            <div class="form-row">
              <input placeholder="Item formulario" type="text" />
              <input placeholder="Item formulario" type="text" />
            </div>

            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Mensaje"
            />

            <button>ENVIAR</button>
          </form>

          <div>
            <img src={chatImage} alt="Chat" />
          </div>
        </section>
      </div>

      <section className="content content-5">
        <div>
          <div>
            <FontAwesomeIcon icon={faShoePrints} size="4x" />
            <text>MI HORMA PERFECTA</text>
          </div>

          <div>
            <FontAwesomeIcon icon={faPlaneDeparture} size="4x" />
            <text>ENVÍOS A TODO EL PAÍS</text>
          </div>

          <div>
            <FontAwesomeIcon icon={faDollarSign} size="4x" />
            <text>MÉTODOS DE PAGO</text>
          </div>

          <div>
            <FontAwesomeIcon icon={faSyncAlt} size="4x" />
            <text>DEVOLUCIONES FÁCILES</text>
          </div>
        </div>

        <div>
          <h3>SUSCRÍBETE A NUESTRO NEWSLETTER</h3>
          <div className="mail-input">
            <input placeholder="tucorreo@mail.com" type="email" />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="mobile-social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>

        <div>
          <h4 className="desktop-title">LINKS DE INTERÉS</h4>

          <ul className="desktop-list">
            <li>¿QUIÉNES SOMOS?</li>
            <li>TÉRMINOS Y CONDICIONES</li>
            <li>POLÍTICA DE PRIVACIDAD</li>
            <li>PREGUNTAS FRECUENTES</li>
          </ul>

          <Collapsible trigger={<h4>LINKS DE INTERÉS</h4>}>
            <ul>
              <li>¿QUIÉNES SOMOS?</li>
              <li>TÉRMINOS Y CONDICIONES</li>
              <li>POLÍTICA DE PRIVACIDAD</li>
              <li>PREGUNTAS FRECUENTES</li>
            </ul>
          </Collapsible>
        </div>

        <div>
          <h4 className="desktop-title">SERVICIO AL CLIENTE</h4>

          <ul className="desktop-list">
            <li>WHATSAPP +57 300 123 4567</li>
            <li>TEL +57 123 4567</li>
            <li>CONTACTO@MARCA.COM</li>
            <li>CONTÁCTANOS</li>
          </ul>

          <Collapsible trigger={<h4>SERVICIO AL CLIENTE</h4>}>
            <ul>
              <li>WHATSAPP +57 300 123 4567</li>
              <li>TEL +57 123 4567</li>
              <li>CONTACTO@MARCA.COM</li>
              <li>CONTÁCTANOS</li>
            </ul>
          </Collapsible>
        </div>

        <div>
          <h4>ENCUENTRA TU TIENDA</h4>

          <div class="location-input">
            <input type="text" placeholder="ciudad" />
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
          </div>
        </div>

        <div>
          <h4>SÍGUENOS</h4>

          <div class="social-link">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <p>nombreMarca_</p>
          </div>

          <div class="social-link">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <p>Nombre Marca</p>
            faYoutube,
          </div>

          <div class="social-link">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <p>nombreMarca</p>
          </div>
        </div>
      </footer>

      <div class="end-footer">
        <p>Medios de pago</p>
        <FontAwesomeIcon icon={faCcMastercard} size="2x" />
        <FontAwesomeIcon icon={faCcVisa} size="2x" />
        <FontAwesomeIcon icon={faCcDinersClub} size="2x" />
        <FontAwesomeIcon icon={faCcDiscover} size="2x" />
        <FontAwesomeIcon icon={faCcPaypal} size="2x" />
        <span id="break-flex" />
        <p>
          Todos los derechos reservados Nombre Marca 2019 | Empowered by{" "}
          <strong>BlackSip</strong>
        </p>
      </div>
    </>
  );
}

export default App;
