import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ articulo }) {
  const navigate = useNavigate();
  const goToArticule = () => {
    navigate(`/articuloDetail?id=${articulo.id}`);
  };
  return (
    <div
      onClick={goToArticule}
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-orange-600 cursor-pointer"
    >
      <img class="rounded-t-lg" src={articulo.imagen} alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {articulo.metaTitulo}
        </h5>

        <p class="mb-3 font-normal text-gray-700 ">
          {articulo.metaDescripcion}
        </p>
      </div>
    </div>
  );
}
