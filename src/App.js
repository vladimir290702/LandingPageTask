import "./App.css";
import "@fontsource/exo-2";
import CompaniesCarousel from "./components/CompaniesCarousel/CompaniesCarousel";
import TopCategories from "./components/TopCategories/TopCategories";
import Information from "./components/Information/Information";
import ProductsOfTheMonth from "./components/ProductsOfTheMonth/ProductsOfTheMonth";

function App() {
  return (
    <div className="App">
      <CompaniesCarousel />
      <TopCategories />
      <Information />
      <ProductsOfTheMonth />
    </div>
  );
}

export default App;
