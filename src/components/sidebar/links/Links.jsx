import { motion } from "framer-motion";

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

function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
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
