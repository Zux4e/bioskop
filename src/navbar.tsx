import logo from "./assets/logo.png";
import user from "./assets/user.svg";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Zevelyn</h2>
        </div>
        <ul className="subNav">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">FILM</a>
          </li>
        </ul>

        <div className="user">
          <button className="primary-button">My User</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
