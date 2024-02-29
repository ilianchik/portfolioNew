import { motion } from "framer-motion";
import "./languageswitcher.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");
  const [t, i18n] = useTranslation("global");

  const toggleSwitch = () => {
    setLanguage((lng) => (lng === "en" ? "ua" : "en"));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <motion.div
      initial={{ x: -500, y: -500 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      className="switch"
      data-language={language}
      onClick={toggleSwitch}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-us"
        viewBox="0 0 512 512"
      >
        <path fill="#bd3d44" d="M0 0h512v512H0" />
        <path
          stroke="#fff"
          strokeWidth="40"
          d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
        />
        <path fill="#192f5d" d="M0 0h390v275H0z" />
        <marker id="us-a" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
        </marker>
        <path
          fill="none"
          markerMid="url(#us-a)"
          d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-ua"
        viewBox="0 0 512 512"
      >
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="gold" d="M0 0h512v512H0z" />
          <path fill="#0057b8" d="M0 0h512v256H0z" />
        </g>
      </svg>
      <motion.div className="handle" layout transition={spring} />
    </motion.div>
  );
}

export default LanguageSwitcher;
