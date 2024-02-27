import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ilia Kozachyshyn */}
        </motion.span>
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
