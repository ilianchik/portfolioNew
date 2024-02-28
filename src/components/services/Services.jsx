import { animate, motion } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
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
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="title img" />
          <h1>
            <motion.b whileHover={{ color: "#324b4a" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#324b4a" }}>For Your </motion.b>
            Business
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#adb7b7", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iste
            voluptatibus aliquid excepturi soluta ad in repudiandae veniam ut
            blanditiis. Voluptatibus ea libero laboriosam ut assumenda
            consequuntur doloremque nulla enim.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#adb7b7", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iste
            voluptatibus aliquid excepturi soluta ad in repudiandae veniam ut
            blanditiis. Voluptatibus ea libero laboriosam ut assumenda
            consequuntur doloremque nulla enim.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#adb7b7", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iste
            voluptatibus aliquid excepturi soluta ad in repudiandae veniam ut
            blanditiis. Voluptatibus ea libero laboriosam ut assumenda
            consequuntur doloremque nulla enim.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#adb7b7", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iste
            voluptatibus aliquid excepturi soluta ad in repudiandae veniam ut
            blanditiis. Voluptatibus ea libero laboriosam ut assumenda
            consequuntur doloremque nulla enim.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
