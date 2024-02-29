import { motion } from "framer-motion";
import "./services.scss";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

function Services() {
  const [t] = useTranslation("global");

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {t("Services.topText1")} <br /> {t("Services.topText2")}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="title img" />
          <h1>
            <motion.b whileHover={{ color: "#324b4a" }}>
              {t("Services.headingText1.1")}
            </motion.b>{" "}
            {t("Services.headingText1.2")}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#324b4a" }}>
              {t("Services.headingText2.1")}{" "}
            </motion.b>
            {t("Services.headingText2.2")}
          </h1>
          <button>{t("Services.headingButton")}</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#ebeded", color: "black" }}
        >
          <h2> {t("Services.box1Heading")}</h2>
          <p>{t("Services.box1Text")}</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#ebeded", color: "black" }}
        >
          <h2> {t("Services.box2Heading")}</h2>
          <p>{t("Services.box2Text")}</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#ebeded", color: "black" }}
        >
          <h2> {t("Services.box3Heading")}</h2>
          <p>{t("Services.box3Text")}</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#ebeded", color: "black" }}
        >
          <h2> {t("Services.box4Heading")}</h2>
          <p>{t("Services.box4Text")}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
