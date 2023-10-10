
import styles from './App.css';
import Intro from './intro/Intro';
import Navbar from './UI/Navbar';
function App() {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
