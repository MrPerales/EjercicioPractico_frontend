import React from "react";
import Card from "../../components/Card";

export default function HomePage() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-center space-x-2 space-y-2">
      {demo.map((articulo) => (
        <Card articulo={articulo} />
      ))}
    </div>
  );
}

const demo = [
  {
    metaTitulo: "Claves para una Administración Logística Eficiente",
    metaDescripcion:
      "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
    titulo: "Claves para una Administración Logística Eficiente",
    descripcion:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    imagen:
      "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
    contenidoDelArticulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    fechaDePublicacion: "13/04/2024",
  },
  {
    metaTitulo: "Claves para una Administración Logística Eficiente",
    metaDescripcion:
      "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
    titulo: "Claves para una Administración Logística Eficiente",
    descripcion:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    imagen:
      "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
    contenidoDelArticulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    fechaDePublicacion: "13/04/2024",
  },
  {
    metaTitulo: "Claves para una Administración Logística Eficiente",
    metaDescripcion:
      "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
    titulo: "Claves para una Administración Logística Eficiente",
    descripcion:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    imagen:
      "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
    contenidoDelArticulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    fechaDePublicacion: "13/04/2024",
  },
  {
    metaTitulo: "Claves para una Administración Logística Eficiente",
    metaDescripcion:
      "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
    titulo: "Claves para una Administración Logística Eficiente",
    descripcion:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    imagen:
      "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
    contenidoDelArticulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    fechaDePublicacion: "13/04/2024",
  },
  {
    metaTitulo: "Claves para una Administración Logística Eficiente",
    metaDescripcion:
      "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
    titulo: "Claves para una Administración Logística Eficiente",
    descripcion:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    imagen:
      "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
    contenidoDelArticulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
    fechaDePublicacion: "13/04/2024",
  },
];
