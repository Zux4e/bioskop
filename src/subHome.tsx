import "./home.css";
import Slider from "./slider";
function MainHome() {
  return (
    <>
      <div className="main">
        <div className="film">
          <h2>Daftar film</h2>
          <p>
            <a href="">Selengkapnya</a>
          </p>
        </div>
        <Slider />
      </div>
    </>
  );
}

export default MainHome;
