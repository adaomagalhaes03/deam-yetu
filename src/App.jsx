import React from "react";
import desenvolvimentoLogo from "./assets/dream-yet-12.png";
import linguasLogo from "./assets/dream-yet-11.png";
import backgroundImage from "./assets/persona.png";

// 👉 substitui estas imagens pelos teus caminhos locais
import bgDesenvolvimento from "./assets/infantil1.jpeg";
import bgLinguas from "./assets/comunicacao2.jpeg";

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
          relative p-10 md:p-16 text-right
          transition-all duration-700 ease-in-out
          hover:scale-[1.01]
        "
        style={{
          backgroundImage: `url(${bgDesenvolvimento})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative flex flex-col items-end text-right max-w-md md:max-w-lg lg:max-w-xl z-10">
          <div className="flex flex-col md:items-end">
            <img
              src={desenvolvimentoLogo}
              alt="Dream Yetu - Desenvolvimento Infantil"
              className="w-48 md:w-56 lg:w-60 mb-6 drop-shadow-2xl transition-all duration-500"
            />
            <h2 className="text-lg md:text-3xl lg:text-3xl font-extrabold mb-4 tracking-wide uppercase">
              Métodos Alternativos de Ensino
            </h2>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full text-sm md:text-base font-bold uppercase shadow-lg hover:shadow-2xl transition-all duration-500">
            Entrar em Desenvolvimento Infantil
          </button>
        </div>
      </section>

      {/* Lado Direito - Línguas e Serviços */}
      <section
        className="
          flex-1 flex flex-col justify-center items-start text-white
          relative p-10 md:p-16 text-left
          transition-all duration-700 ease-in-out
          hover:scale-[1.01]
        "
        style={{
          backgroundImage: `url(${bgLinguas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-md md:max-w-lg lg:max-w-xl z-10">
          <div className="flex flex-col md:items-start">
            <img
              src={linguasLogo}
              alt="Dream Yetu - Serviços e Línguas"
              className="w-44 md:w-56 lg:w-60 mb-6 drop-shadow-2xl transition-all duration-500"
            />
            <h2 className="text-lg md:text-3xl lg:text-3xl font-extrabold mb-4 tracking-wide uppercase text-white">
              Línguas, Formação e Serviços
            </h2>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full text-sm md:text-base font-bold uppercase shadow-lg hover:shadow-2xl transition-all duration-500">
            Entrar em Serviços e Línguas
          </button>
        </div>
      </section>

      {/* Responsividade */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            background-attachment: scroll !important;
            background-size: cover !important;
          }
        }

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
            width: 14rem !important;
          }

          h2 {
            font-size: 1.6rem !important;
          }

          button {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
