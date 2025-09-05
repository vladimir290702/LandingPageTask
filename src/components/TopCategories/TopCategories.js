import "./TopCategories.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Printer from "../../assets/TopCategories/printer.png";
import { topCategoriesData } from "../../data/topCategoriesData";
import CategoriesCard from "./CategoriesCard/CategoriesCard";

export default function TopCategories() {
  return (
    <div id="top-categories-container">
      <div id="top-categories-title">
        <h1>Топ Категории</h1>
      </div>
      <div id="top-categories">
        <div id="main-category">
          <div id="main-category-image-container">
            <img src={Printer} alt="Printer" />
          </div>
          <div id="main-category-information">
            <h1>ПРИНТЕРИ</h1>
            <p>Висококачествени принтери за дома и офиса</p>
          </div>
          <div id="main-category-button-container">
            <div>
              <p id="see-all-categories">Виж всички</p>
            </div>
            <div id="main-category-button">
              <button>
                <FaLongArrowAltRight id="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div id="secondary-categories">
          {topCategoriesData.map((data) => {
            return <CategoriesCard key={data.name} category={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
