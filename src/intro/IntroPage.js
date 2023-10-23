import styles from "../App.module.css";
import Navbar from "../UI/Navbar";
import Intro from "./Intro";
import { useState } from "react";
const IntroPage = () => {
    const [scroller, setScroller ] = useState(0);
  return (
    <div className={styles.appContainer}>
      <Navbar scroller={setScroller} />
      <Intro scroller={scroller} />
    </div>
  );
};
export default IntroPage;
