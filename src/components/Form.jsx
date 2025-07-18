import "../components/styles/form.css";
import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    bodega: "",
    anio: "",
    cepa: "",
    descripcion: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nombre: "",
      bodega: "",
      anio: "",
      cepa: "",
      descripcion: "",
      image: "",
    });
  };

  return (
    <section className="form-content">
      <h1>Agregar Vino</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre..."
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bodega"
          placeholder="Bodega..."
          value={formData.bodega}
          onChange={handleChange}
        />
        <input
          type="number"
          name="anio"
          placeholder="Año..."
          value={formData.anio}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cepa"
          placeholder="Cepa..."
          value={formData.cepa}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Breve descripción..."
          value={formData.descripcion}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la Imagen..."
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Cargar</button>
      </form>
    </section>
  );
};
