import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div
        className="loader__image"
        style={{
          width: "20%",
          height: 0,
          paddingBottom: "100%",
          position: "fixed",
        }}
      >
        <iframe
          src="https://giphy.com/embed/3o7bu8sRnYpTOG1p8k"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Giphy Embed"
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/pizza-loading-snacks-3o7bu8sRnYpTOG1p8k">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default Loader;
