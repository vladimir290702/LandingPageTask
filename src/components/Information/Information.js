import "./Information.css";
import { informationData } from "../../data/informationData";

export default function Information() {
  const renderComponent = (data) => {
    if (data.type === "image") {
      return (
        <div className="information-card" key={data.id}>
          <img
            src={data.img}
            className="informationImage"
            alt="Please wait..."
          />
        </div>
      );
    } else if (data.type === "icon") {
      return (
        <div className="information-card icon" key={data.id}>
          <img
            src={data.img}
            className="informationIcon"
            alt="Please wait..."
          />
          <h3 className="informationIconText">{data.text}</h3>
          <div className="informationIconLine"></div>
        </div>
      );
    } else if (data.type === "text") {
      return (
        <div className="information-card text" key={data.id}>
          <h3>{data.text}</h3>
        </div>
      );
    }
  };
  return (
    <div id="information-container">
      {informationData.map((item) => {
        return renderComponent(item);
      })}
    </div>
  );
}
