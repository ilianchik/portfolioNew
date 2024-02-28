import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="#">
            <img src="/facebook.svg" alt="facebook logo" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
