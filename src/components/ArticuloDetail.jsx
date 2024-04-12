import React from "react";

export default function ArticuloDetail({ articuleDetail }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mb-4">
        <h1 className="text-3xl font-bold ">{articuleDetail?.titulo}</h1>
      </div>
      <div className="w-2/4">
        <img
          className="w-full"
          src={articuleDetail?.imagen}
          alt={articuleDetail?.id}
        />
      </div>
      <div className="w-2/4 mt-11">
        <p>{articuleDetail?.contenidoDelArticulo}</p>
      </div>
    </div>
  );
}
