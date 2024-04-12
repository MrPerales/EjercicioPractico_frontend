import React from "react";

export default function Card({ articulo }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-orange-500">
      <a href="">
        <img class="rounded-t-lg" src={articulo.imagen} alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {articulo.metaTitulo}
          </h5>

          <p class="mb-3 font-normal text-gray-700 ">
            {articulo.metaDescripcion}
          </p>
        </div>
      </a>
    </div>
  );
}
