import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { animate, motion } from "framer-motion";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

const variants = {
  initial: { x: 500, y: -500 },
  animate: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      staggerChildren: 0.1,
    },
  },
};

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <LanguageSwitcher />
      <div className="wrapper">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="social"
        >
          <motion.a
            variants={variants}
            whileHover={{ scale: 1.2 }}
            target="blank"
            href="https://www.linkedin.com/in/ilia-kozachyshyn-a4b025283"
          >
            <motion.img
              variants={variants}
              src="/linkedin.svg"
              alt="linkedin logo"
            />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover={{ scale: 1.2 }}
            target="blank2"
            href="https://github.com/ilianchik"
          >
            <motion.img
              variants={variants}
              src="/github.svg"
              alt="github logo"
            />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover={{ scale: 1.2 }}
            target="blank3"
            href="https://www.instagram.com/ilianchikk"
          >
            <motion.img
              variants={variants}
              src="/instagram.svg"
              alt="instagram logo"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
