import React from "react";

export const ImageList = ({ result }) => {
    console.log(result)
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {result.map((elemento, indice) => {
          return (
            <div key={indice}>
              <img
                src={elemento.urls.regular}
                alt={`Imagen ${indice}`}
                style={{ width: "195px", height: "auto", borderRadius: "8px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
