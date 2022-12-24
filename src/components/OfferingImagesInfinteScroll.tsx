import "../App.css";

export function OfferingImagesInfinteScroll() {
  return (
    <div className="slider">
      <div className="slide-track-primary">
        <div className="slide">
          <img src={require("../assets/images/offering/Image1.jpeg")}></img>
        </div>{" "}
        <div className="slide">
          <img src={require("../assets/images/offering/Image2.jpeg")}></img>
        </div>{" "}
        <div className="slide">
          <img src={require("../assets/images/offering/Image3.jpeg")}></img>
        </div>{" "}
        <div className="slide">
          <img src={require("../assets/images/offering/Image4.jpeg")}></img>
        </div>{" "}
        <div className="slide">
          <img src={require("../assets/images/offering/Image5.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image6.jpeg")}></img>
        </div>
      </div>

      <div className="slide-track-secondary">
        <div className="slide">
          <img src={require("../assets/images/offering/Image1.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image2.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image3.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image4.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image5.jpeg")}></img>
        </div>
        <div className="slide">
          <img src={require("../assets/images/offering/Image6.jpeg")}></img>
        </div>
      </div>
    </div>
  );
}
