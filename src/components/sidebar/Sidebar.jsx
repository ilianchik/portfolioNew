import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const variants = {
  opened: {
    opacity: 1,
    clipPath: "circle(3000px at 50px 50px)",
    transition: { type: "spring", stiffness: 10, delay: 0.1 },
  },
  closed: {
    opacity: 1,
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.1, type: "spring", stiffness: 300, damping: 40 },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "opened" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
