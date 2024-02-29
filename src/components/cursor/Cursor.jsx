import { useState } from "react";
import "./cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(function () {
    function mouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", mouseMove);

    return function () {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className="cursor"
    ></motion.div>
  );
}

export default Cursor;
