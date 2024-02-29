import { motion } from "framer-motion";
import "./hero.scss";
import { useTranslation } from "react-i18next";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1250%",

    transition: {
      type: "tween",
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    },
  },
};

function Hero() {
  const [t] = useTranslation("global");

  return (
    <div className="hero">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="wrapper"
      >
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>
            {t("Hero.secondaryText")}
          </motion.h2>
          <motion.h1 variants={textVariants}>
            {t("Hero.primaryText1")} <br /> {t("Hero.primaryText2")}
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`#${t("Sidebar.portfolio")}`}
              variants={textVariants}
            >
              {t("Hero.portfolioButton")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`#${t("Sidebar.contact")}`}
              variants={textVariants}
            >
              {t("Hero.contactButton")}
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="slidingTextContainer"
        >
          React, JavaScript, TypeScript, HTML, CSS, SASS, TailwindCSS
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          className="imageContainer"
        >
          <img src="/hero.png" alt="hero img" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
