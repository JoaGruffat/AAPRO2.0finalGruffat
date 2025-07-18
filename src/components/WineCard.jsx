import "../components/styles/winecard.css";

export const WineCard = ({
  nombre,
  bodega,
  anio,
  cepa,
  descripcion,
  image,
  onDelete,
}) => {
  const imageUrl = image
    ? image
    : "https://placehold.co/200x300?text=No+Bottle+Sorry";

  return (
    <div className="card">
      <img src={imageUrl} alt={nombre} />
      <div className="card-content">
        <h2>{nombre}</h2>
        <h3>{anio}</h3>
        <h3>{bodega}</h3>
        <h4>{cepa}</h4>
        <p>{descripcion}</p>
        <button onClick={onDelete}>Borrar</button>
      </div>
    </div>
  );
};
