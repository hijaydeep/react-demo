import React from "react";

const FeatureIcon = ({ imgSrc, altText, label, positionClasses }) => (
  <div
    className={`absolute flex flex-col items-center space-y-2 ${positionClasses}`}
  >
    <div className="bg-white rounded-full p-4 shadow-md">
      <img src={imgSrc} alt={altText} className="w-20 h-20" />
    </div>
    <p className="font-bold text-sm text-center uppercase tracking-wider text-gray-700">
      {label}
    </p>
  </div>
);

const LeftPanel = () => {
  return (
    <div
      className="h-full grid grid-cols-2 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg-1.png')" }}
    >
      <div
        className="text-white flex flex-col justify-center items-center p-8 text-center bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/img/bg-2.png')" }}
      >
        <img
          src="/img/left-frame.png"
          alt="App preview on phone"
          className="w-64 mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">
          Mets enfin Allah au centre de ta famille
        </h2>
        <p className="font-normal text-xl max-w-md">
          Apprends à ton enfant les indispensables de sa religion facilement et
          rapidement, même s’il débute
        </p>
      </div>

      <div className="relative p-6 rounded-br-3xl overflow-hidden">
        <img
          src="/img/left-1.png"
          alt="Climbing girl"
          className="absolute top-[4%] left-1/2 -translate-x-1/2 w-24"
        />

        <FeatureIcon
          imgSrc="/img/left-2.png"
          altText="recitateur"
          label="Drôle de Récitateur"
          positionClasses="top-1/4 left-1"
        />
        <FeatureIcon
          imgSrc="/img/left-3.png"
          altText="mission"
          label="Mission Sourate"
          positionClasses="top-[35%] right-1"
        />
        <FeatureIcon
          imgSrc="/img/left-4.png"
          altText="tafsir"
          label="Tafsir Mystery"
          positionClasses="top-[50%] left-1"
        />
        <FeatureIcon
          imgSrc="/img/left-5.png"
          altText="moushaf"
          label="Moushaf Décidé"
          positionClasses="top-[65%] right-1"
        />
        <FeatureIcon
          imgSrc="/img/left-6.png"
          altText="blabla"
          label="Blabla Box"
          positionClasses="top-[80%] left-1"
        />
      </div>
    </div>
  );
};

export default LeftPanel;