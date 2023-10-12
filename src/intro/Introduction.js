import styles from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Use the correct import path
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"; // Correct the icon name
import { useState } from "react";
const Introduction = ({explorer}) => {
  const x = [1,2];
  const [toggleExplorer, setToggleExplorer] = useState(x[0])
  const exploreHandler = () => {
    if(toggleExplorer === x[0]) {
      setToggleExplorer(x[1])
    } else {
      setToggleExplorer(x[0]);
    }
    explorer(toggleExplorer)
  }
  return (
    <div className={styles.introduction_container}>
      <div>
        <img src="/images/Ekin.png" alt="Ekin" />
      </div>
      <div>
        <div>
          <div>
            Hi there, I am
            <br />
            <div
              className={`${styles.introduction_name} ${styles.introduction_glow_light}`}>
              BARIS EKIN ISIK
            </div>
            <div>Full Stack Developer</div>
          </div>
        </div>
        <div className={styles.introduction_exploration} onClick={exploreHandler}>
          Explore More
          <FontAwesomeIcon
            icon={faAnglesDown}
            className={styles.introduction_exploration_svg}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
