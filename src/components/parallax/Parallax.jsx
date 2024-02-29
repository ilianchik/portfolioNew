import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const [t] = useTranslation("global");
  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services"
          ? t("Parallax.parallaxServices")
          : t("Parallax.parallaxPortfolio")}
      </motion.h1>
      <motion.span style={{ y: yText }}>
        <motion.img
          initial={{ y: 40 }}
          animate={{ y: 110 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,

            repeatType: "mirror",
          }}
          width={100}
          src="/arrow-down.svg"
        />
      </motion.span>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
