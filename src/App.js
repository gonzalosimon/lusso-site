import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import About from './About';
import PizzaImage from "./PizzaImage";
import comunImg from "./assets/comun.jpg";
import napolitanaImg from "./assets/napolitana.jpg";
import milanImg from "./assets/milan.jpg";
import especialImg from "./assets/especial.jpg";
import fugazzetaImg from "./assets/fugazzeta.jpg";
import extraQuesoImg from "./assets/extra-queso.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { saveAs } from "file-saver";

import "./App.css";

function App() {
  return (
    <div className="site-container">
      <Router>
        <header>
          <div className="header-content">
            <a className="logo" href="/">
              Lusso
            </a>

            <Link to="/about" className="about-button">
              Sobre nosotros
            </Link>
          </div>
        </header>

        <Routes>
          <Route
            path="/about"
            element={
              <>
                <h1 style={{ padding: "0 60px" }}>Sobre nosotros</h1>

                <div className="about-section">

                  <p>
                    Disfruta del auténtico sabor italiano en nuestra pizzería,
                    donde cada pizza es una obra de arte culinaria. Nuestra masa
                    casera, preparada con pasión y los mejores ingredientes, es
                    la base perfecta para una variedad de toppings frescos y
                    sabrosos.
                  </p>

                  <p>
                    En el corazón de nuestra pizzería late una tradición única:
                    la pizza a la parrilla, una técnica perfeccionada a lo largo
                    de generaciones. Nuestra masa casera, secreto de la familia,
                    se transforma bajo el calor de la parrilla, adquiriendo un
                    sabor ahumado y una textura crujiente que la distingue.
                    Inspirados por la rica historia culinaria de Italia y el
                    toque innovador de nuestros antepasados, ofrecemos una
                    experiencia que solo tiene productos de calidad. Ven a
                    descubrir el sabor auténtico de la tradición, reinventado en
                    cada pizza que servimos.
                  </p>
                </div>
              </>
            }
          />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
}

const DownloadMenu = () => {
  const downloadImage = () => {
    saveAs("https://i.imgur.com/L7eLAPX.jpeg", "lusso-menu.jpg");
  };

  return (
    <button className="menu-download" onClick={downloadImage}>
      Menú
    </button>
  );
};

function Title({ children }) {
  return (
    <>
      <h1 className="gallery-title">{children}</h1>
    </>
  );
}

const menu = {
  comun: {
    name: "Comun",
    prize: 3500,
    description: "Masa casera, salsa de tomate, muzzarella y aceitunas",
    img: comunImg,
  },
  napolitana: {
    name: "Napolitana",
    prize: 4000,
    description:
      "Masa casera, salsa de tomate, muzzarella, tomate en rodajas y aceitunas",
    img: napolitanaImg,
  },
  especial: {
    name: "Especial",
    prize: 4500,
    description:
      "Masa casera, salsa de tomate, muzzarella jamon cocido, morrón y aceitunas.",
    img: especialImg,
  },
  extra_queso: {
    name: "Extra queso",
    prize: 4500,
    description: "Masa casera, salsa de tomate, mucha muzzarella y aceitunas",
    img: extraQuesoImg,
  },
  fugazzeta: {
    name: "Fugazzeta",
    prize: 4000,
    description:
      "Masa casera, salsa de tomate, muzzarella, cebolla y aceitunas",
    img: fugazzetaImg,
  },
  milan: {
    name: "Milan",
    prize: 4500,
    description: "Masa casera, salsa de tomate, muzzarella, milan y aceitunas",
    img: milanImg,
  },
};

function MainContent() {
  const { milan, comun, napolitana, fugazzeta, extra_queso, especial } = menu;
  return (
    <main>
      <div className="header-main-section">
        <Title>Lusso Pizzeria</Title>

        <span>Proba las mejores pizzas a la leña🍕🔥</span>

        <span>⏰ Abierto de 20 a 00hs ⏰</span>

        <span>🛵Envío a Villa María y Villa Nueva🛵</span>

        <span>Su consulta no molesta👨‍🍳👌</span>
      </div>

      <section class="social-links">
        <div className="social-links-anchor">
          <a href="https://www.instagram.com/lusso.vm/" rel="noreferrer">
            <InstagramIcon class="social-icon" />
          </a>

          <a href="https://wa.me/+5493535668990">
            <WhatsAppIcon class="social-icon" />
          </a>
        </div>

        <DownloadMenu />

        <p className="seleccion-pizza">
          Selecciona la pizza que quieras y envianos un mensaje!
        </p>
      </section>

      <section className="gallery">
        <PizzaImage
          name={comun.name}
          prize={comun.prize}
          description={comun.description}
          imageUrl={comun.img}
        />

        <PizzaImage
          name={napolitana.name}
          prize={napolitana.prize}
          description={napolitana.description}
          imageUrl={napolitana.img}
        />

        <PizzaImage
          name={especial.name}
          prize={especial.prize}
          description={especial.description}
          imageUrl={especial.img}
        />

        <PizzaImage
          name={extra_queso.name}
          prize={extra_queso.prize}
          description={extra_queso.description}
          imageUrl={extra_queso.img}
        />

        <PizzaImage
          name={fugazzeta.name}
          prize={fugazzeta.prize}
          description={fugazzeta.description}
          imageUrl={fugazzeta.img}
        />

        <PizzaImage
          name={milan.name}
          prize={milan.prize}
          description={milan.description}
          imageUrl={milan.img}
        />
      </section>

      <div className="footer">
        <p>Lusso - 353 - 566 - 8990</p>
      </div>
    </main>
  );
}

export default App;
