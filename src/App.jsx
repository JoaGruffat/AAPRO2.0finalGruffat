import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WineCard } from "./components/WineCard";
import vinosData from "./data/catalogo";
import { Form } from "./components/Form";

function App() {
 const [vino, setVino] = useState(() => {
   const localStore = localStorage.getItem("cardsStorage");
   return localStore
     ? JSON.parse(localStore)
     : vinosData.map((vinoInicial, index) => ({
         ...vinoInicial,
         id: index + 1,
       }));
 });

  const handleDelete = (id) => {
    const cardsStore = vino.filter((vino) => vino.id !== id);
    setVino(cardsStore);
    localStorage.setItem("cardsStorage", JSON.stringify(cardsStore));
  };

  const handleSubmit = (nuevoVino) => {
    setVino((prevVinos) => [
      ...prevVinos,
      {
        ...nuevoVino,
        id: prevVinos.length + 1,
      },
    ]);
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit} />
      <div className="card-container">
        {vino.map((vino) => (
          <WineCard
            key={vino.id}
            image={vino.image}
            nombre={vino.nombre}
            anio={vino.anio}
            bodega={vino.bodega}
            cepa={vino.cepa}
            descripcion={vino.descripcion}
            onDelete={() => handleDelete(vino.id)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;

/* 
boton para mostrar formulario "agregar vino"
puntuacion 1/5 👎🫳🫴👍💪
secciones en el header (lista negra y para recomendar segun puntuacion)
filtro por puntos
botones a componente
preguntar "desea borrar?" al eliminar card
boton para editar card
no permitir agregar con campos vacios exceptoo imagen
mejorar formatos del form

*/
