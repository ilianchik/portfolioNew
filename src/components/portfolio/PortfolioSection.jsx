import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function PortfolioSection({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [t] = useTranslation("global");

  const isSmallScreen = window.innerWidth < 1366;
  return (
    <section className="portfolioSection">
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img ref={ref} src={item.img} alt="portfolio image" />
          </div>

          <motion.div style={!isSmallScreen && { y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <ul>
              {t("Portfolio.technologies")}:
              {item.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <motion.a
              animate={{ scale: 1.2 }}
              transition={{
                repeat: Infinity,
                duration: 0.4,
                repeatType: "mirror",
              }}
              target="blank"
              href={item.link}
            >
              {t("Portfolio.button")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
