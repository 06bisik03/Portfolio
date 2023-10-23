import Introduction from "./Introduction";
import styles from "../App.module.css";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import { useEffect, useRef, useState } from "react";
import Extras from "./Extras";

const Intro = ({ scroller }) => {
  const [explorer, setExplorer] = useState(null);
  const portfolioRef = useRef(null);
  const projectsRef = useRef(null);
  const extrasRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const scrollToSection = (ref) => {
      if (ref.current) {
        const element = ref.current;
        const topOffSet = element.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + topOffSet - 120,
          behavior: "smooth",
        });
      }
    };
    if (explorer) {
      scrollToSection(portfolioRef);
    }
    switch (scroller) {
      case 1:
        scrollToSection(portfolioRef);
        break;
      case 2:
        scrollToSection(projectsRef);
        break;
      case 3:
        scrollToSection(skillsRef);
        break;
      case 4:
        scrollToSection(extrasRef);
        break;
      case 5:
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  }, [scroller, explorer]);
  return (
    <div className={styles.intro_container}>
      <Introduction explorer={setExplorer} />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={extrasRef}>
        <Extras />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};
export default Intro;
