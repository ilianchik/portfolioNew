import { useTranslation } from "react-i18next";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <Cursor />
      <section id={t("Sidebar.homepage")}>
        <Navbar />
        <Hero />
      </section>
      <section id={t("Sidebar.services")}>
        <Parallax type="services" />
      </section>
      {/* <section>
        <Services />
      </section> */}
      {/* <section id={t("Sidebar.portfolio")}>
        <Parallax type="portfolio" />
      </section> */}
      {/* <Portfolio /> */}

      {/* <section id={t("Sidebar.contact")}>
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
