import React, { useEffect, useState } from "react";
import ArticuloDetail from "../../components/ArticuloDetail";
import { useParams } from "react-router-dom";

export default function Articule() {
  const { id } = useParams();
  const [articuleDetail, setArticuleDetail] = useState();
  const urlApiId = `http://localhost/EjercicioPractico/index.php/restarticulos/${id}`;

  useEffect(() => {
    fetch(urlApiId)
      .then((resp) => resp.json())
      .then(({ data, _ }) => setArticuleDetail(data));
  }, [id, articuleDetail]);

  return (
    <>
      {/* <ArticuloDetail demo={demo}></ArticuloDetail> */}
      <ArticuloDetail articuleDetail={articuleDetail}></ArticuloDetail>
    </>
  );
}

// const demo = [
//   {
//     id: 1,
//     metaTitulo: "Claves para una Administración Logística Eficiente",
//     metaDescripcion:
//       "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//     titulo: "Claves para una Administración Logística Eficiente",
//     descripcion:
//       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     imagen:
//       "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//     contenidoDelArticulo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     fechaDePublicacion: "13/04/2024",
//   },
//   {
//     id: 2,
//     metaTitulo: "Claves para una Administración Logística Eficiente",
//     metaDescripcion:
//       "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//     titulo: "Claves para una Administración Logística Eficiente",
//     descripcion:
//       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     imagen:
//       "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//     contenidoDelArticulo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     fechaDePublicacion: "13/04/2024",
//   },
//   {
//     id: 3,
//     metaTitulo: "Claves para una Administración Logística Eficiente",
//     metaDescripcion:
//       "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//     titulo: "Claves para una Administración Logística Eficiente",
//     descripcion:
//       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     imagen:
//       "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//     contenidoDelArticulo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     fechaDePublicacion: "13/04/2024",
//   },
//   {
//     id: 4,
//     metaTitulo: "Claves para una Administración Logística Eficiente",
//     metaDescripcion:
//       "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//     titulo: "Claves para una Administración Logística Eficiente",
//     descripcion:
//       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     imagen:
//       "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//     contenidoDelArticulo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     fechaDePublicacion: "13/04/2024",
//   },
//   {
//     id: 5,
//     metaTitulo: "Claves para una Administración Logística Eficiente",
//     metaDescripcion:
//       "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//     titulo: "Claves para una Administración Logística Eficiente",
//     descripcion:
//       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     imagen:
//       "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//     contenidoDelArticulo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//     fechaDePublicacion: "13/04/2024",
//   },
// ];
// const demo = {
//   id: 1,
//   metaTitulo: "Claves para una Administración Logística Eficiente",
//   metaDescripcion:
//     "La administración logística juega un papel crucial en el éxito de las operaciones de cualquier empresa. En un mercado altamente competitivo, optimizar la logística y distribución se ha vuelto esencial. Upper Logistics sobresale en transformar el proceso logístico en una ventaja competitiva, asegurando que la logística en una empresa sea eficaz y eficiente.",
//   titulo: "Claves para una Administración Logística Eficiente",
//   descripcion:
//     "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//   imagen:
//     "https://upperlogistics.mx/uploads/blogs/covers/1712073104_2cd04f81d2eb4427b5fb.png",
//   contenidoDelArticulo:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi aperiam rem inventore dolores accusamus eum soluta. Incidunt iusto rem et.Labore quo, hic eaque dolor excepturi doloremque cum sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatibus enimnihil similique veritatis fuga impedit ex atque excepturi, saepe iste necessitatibus culpa veniam laboriosam provident mollitia non sequi?Lorempsum dolor sit amet consectetur adipisicing elit. Fugiat illo amet ipsum soluta ipsa rem ex officiis eum? Adipisci velit vero rerum provident iste    doloremque tenetur praesentium architecto reprehenderit delectus. Loremipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor    placeat quod natus nesciunt dolore neque ipsa porro praesentium ab corporis voluptatum accusantium fuga inventore quis et numquam laudantiumquia",
//   fechaDePublicacion: "13/04/2024",
// };
