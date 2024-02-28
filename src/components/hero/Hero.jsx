import { motion } from "framer-motion";
import "./hero.scss";

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
    x: 500,
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
  return (
    <div className="hero">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="wrapper"
      >
        <motion.div
          className="textContainer"
          variants={textVariants}
          // initial="initial"
          // whileInView="animate"
        >
          <motion.h2 variants={textVariants}>Ilia Kozachyshyn</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend <br /> developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
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
