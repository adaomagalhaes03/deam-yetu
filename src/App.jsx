import React from "react";
import desenvolvimentoLogo from "./assets/dream-yet-12.png";
import linguasLogo from "./assets/dream-yet-11.png";
import backgroundImage from "./assets/persona.png";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
        backgroundColor: "#fff", 
        transition: "all 0.6s ease-in-out",
      }}
    >
      {/* Lado Esquerdo - Desenvolvimento Infantil */}
      <section
        className="
          flex-1 flex flex-col justify-center items-end text-white 
          bg-blue-900/70 md:bg-blue-800/70
          p-10 md:p-16 text-right 
          transition-all duration-700 ease-in-out
          hover:scale-[1.01]
        "
      >
        <div className="flex flex-col items-end text-right max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex flex-col md:items-end">
            <img
              src={desenvolvimentoLogo}
              alt="Dream Yetu - Desenvolvimento Infantil"
              className="w-52 md:w-64 lg:w-72 mb-8 drop-shadow-2xl transition-all duration-500"
            />
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wide uppercase">
                Método de Ensino Alternativo
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 font-semibold uppercase tracking-widest">
                Dream Yetu
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold uppercase shadow-lg hover:shadow-2xl transition-all duration-500">
            Entrar em Desenvolvimento Infantil
          </button>
        </div>
      </section>

      {/* Lado Direito - Línguas e Serviços */}
      <section
        className="
          flex-1 flex flex-col justify-center items-start text-white 
          bg-yellow-500/80 md:bg-yellow-500/70
          p-10 md:p-16 text-left
          transition-all duration-700 ease-in-out
          hover:scale-[1.01]
        "
      >
        <div className="max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex flex-col md:items-start">
            <img
              src={linguasLogo}
              alt="Dream Yetu - Serviços e Línguas"
              className="w-48 md:w-64 lg:w-72 mb-8 drop-shadow-2xl transition-all duration-500"
            />
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wide uppercase text-black">
                Línguas, Formação e Serviços
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 font-semibold uppercase tracking-widest text-black">
                Dream Yetu
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-full text-base md:text-lg font-bold uppercase shadow-lg hover:shadow-2xl transition-all duration-500">
            Entrar em Serviços e Línguas
          </button>
        </div>
      </section>

      {/* Responsividade e centralização */}
      <style jsx>{`
        /* Desativa parallax no mobile */
        @media (max-width: 1024px) {
          div {
            background-attachment: scroll !important;
            background-size: cover !important; /* Mostra bem em telas menores */
          }
        }

        /* Em telas menores: cada seção ocupa 100% da tela e tudo centralizado */
        @media (max-width: 768px) {
          .min-h-screen {
            flex-direction: column !important;
          }

          section {
            min-height: 100vh !important;
            width: 100% !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }

          section div {
            align-items: center !important;
            text-align: center !important;
          }

          img {
            width: 15rem !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1.3rem !important;
          }

          button {
            font-size: 1rem !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
