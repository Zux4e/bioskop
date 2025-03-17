import "./home.css";

function Subhome() {
  return (
    <>
      <div className="homeScreen">
        <div className="head">
          <h1>WELCOME TO ZEVELYN!</h1>
          <p>Discover our latest movies and TV shows.</p>
          <div className="tombol">
            <button className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Get Started</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="akhir">
          <p>
            Nikmati pengalaman menonton terbaik di layar lebar dengan kualitas
            gambar tajam dan suara yang menggelegar. Saat lampu redup, kisah
            luar biasa siap menghipnotis Anda
          </p>
        </div>
      </div>
    </>
  );
}

export default Subhome;
