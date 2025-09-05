import "./ProductsOfTheMonth.css";
import { useState, useEffect } from "react";
import { getProuctsOfTheMonth } from "../../services/getProductsOfTheMonth";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Connect from "../../assets/connect.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductOfTheMonth from "../../assets/ProductsOfTheMonth.png";

export default function ProductsOfTheMonth() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    try {
      const fetchedShopData = async () => {
        const response = await getProuctsOfTheMonth();

        setProducts(response.data);
      };
      fetchedShopData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-title">
        <h1 className="carousel-text">ТОП ПРОДУКТИ</h1>
        <h2 className="carousel-front-text">ПРОДУКТИ НА МЕСЕЦА</h2>
      </div>
      <div className="carousel-stage">
        <div className="carousel-track">
          {products.map((product, i) => {
            let position = "hiddenSlide";

            if (i === index) position = "activeSlide";
            else if (i === (index - 1 + products.length) % products.length)
              position = "previousFirstLayer";
            else if (i === (index - 2 + products.length) % products.length)
              position = "previousSecondLayer";
            else if (i === (index + 1) % products.length)
              position = "nextFirstLayer";
            else if (i === (index + 2) % products.length)
              position = "nextSecondLayer";

            return (
              <div key={product.id} className={`product-card ${position}`}>
                {product.available && (
                  <span className="stock-badge">В наличност</span>
                )}
                <img
                  src={ProductOfTheMonth}
                  alt={product.model}
                  className="product-img"
                />
                <h3>{product.model.slice(0, 50)}...</h3>
                <p className="price">Цена: {product.price.toFixed(2)}</p>
                <div className="actions">
                  <button className="buy-button">
                    <FaShoppingCart />
                    Купи
                  </button>
                  <img src={Connect} alt="" />
                  <CiHeart className="wishlist-button" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>
          <IoIosArrowBack size={20} />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
}
