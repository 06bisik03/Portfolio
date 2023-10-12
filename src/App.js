
import styles from './App.module.css';
import Intro from './intro/Intro';
import Navbar from './UI/Navbar';
import { useState } from 'react';
function App() {
  const [scroller, setScroller ] = useState(0);
  return (
    <div className={styles.appContainer}>
      <Navbar  scroller={setScroller}/>
        <Intro scroller={scroller}/>

    </div>
  );
}

export default App;
