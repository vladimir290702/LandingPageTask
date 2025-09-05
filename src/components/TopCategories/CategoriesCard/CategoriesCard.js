import "./CategoriesCard.css";

export default function CategoriesCard({ category }) {
  return (
    <div className="category-card">
      <h2 className="category-name">
        {category.name.split(" ").map((word, idx) => (
          <div key={idx}>{word}</div>
        ))}
      </h2>
      <div className="category-image-container">
        <img
          src={category.img}
          alt={category.name}
          className="category-image"
        />
        <button className="category-button">Купи сега</button>
      </div>
    </div>
  );
}
