import { motion, useScroll, useSpring } from "framer-motion";
import PortfolioSection from "./PortfolioSection";
import "./portfolio.scss";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const [t] = useTranslation("global");

  const items = [
    {
      id: 1,
      title: t("Portfolio.portfolio1Title"),
      img: "/BeSocial.png",
      desc: t("Portfolio.portfolio1Text"),
      tech: ["React", "TypeScript", "HTML", "TailwindCSS", "Appwrite"],
      link: "https://be-social-psi.vercel.app/",
    },
    {
      id: 2,
      title: t("Portfolio.portfolio2Title"),
      img: "/pages.png",
      desc: t("Portfolio.portfolio2Text"),
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://ilianchik.github.io/Page/",
    },
    {
      id: 3,
      title: t("Portfolio.portfolio3Title"),
      img: "/BeSocial.png",
      desc: t("Portfolio.portfolio3Text"),
      tech: ["HTML", "TailwindCSS", "TypeScript", "React", "Appwrite"],
      link: "https://be-social-psi.vercel.app/",
    },
    {
      id: 4,
      title: t("Portfolio.portfolio4Title"),
      img: "/BeSocial.png",
      desc: t("Portfolio.portfolio4Text"),
      tech: ["HTML", "TailwindCSS", "TypeScript", "React", "Appwrite"],
      link: "https://be-social-psi.vercel.app/",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1> {t("Portfolio.progressText")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <PortfolioSection item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
