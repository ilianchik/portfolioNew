import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
  opened: {
    transition: { staggerChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};
const itemVariants = {
  opened: {
    y: 0,
    opacity: 1,
    transition: {},
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links({ setOpen }) {
  const [t, i18n] = useTranslation("global");
  const items = [
    t("Sidebar.homepage"),
    t("Sidebar.services"),
    t("Sidebar.portfolio"),
    t("Sidebar.contact"),
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          onClick={() => setOpen((prev) => !prev)}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
