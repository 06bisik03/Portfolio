import styles from "../App.module.css";
const Skills = () => {
  return (
    <div className={styles.skills_container}>
      <div className={styles.skills_title}>Skills</div>
      <div className={styles.skills_list}>
        <div className={styles.void} id="void">
          <div className={styles.crop}>
            <ul id="card-list" styles="--count: 5">
              <li>
                <div className={styles.card}>
                  <div >
                    <span className={styles.modelName}>Highly Advanced JS Algorithm Knowledge</span>
                    <span>
                    Advanced Complex Data Structures and Algorithms
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.card}>
                  <div>
                    <span className={styles.modelName}>Highly Advanced ReactJS Knowledge</span>
                    <span>
                        Skillset focused purely on rapid performance and time-complexity
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.card}>
                  <div>
                    <span className={styles.modelName}>Vast Microsoft Office Knowledge</span>
                    <span>
                        Vast Knowledge of MS Excel, Powerpoint and Access
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.card}>
                  <div>
                    <span className={styles.modelName}>Highly Advanced NoSQL Knowledge</span>
                    <span>
                        Advanced NoSQL Database Knowledge: MongoDB and Firebase
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.card}>
                  <div>
                    <span className={styles.modelName}>Intermediate OOP Programming Knowledge</span>
                    <span>
                        Intermediate OOP Programming Knowledge: C++, C, Java
                    </span>
                  </div>
                </div>
              </li>
              
            </ul>
            <div className={styles.lastCircle}></div>
            <div className={styles.secondCircle}></div>
          </div>
          <div className={styles.mask}></div>
          <div className={styles.centerCircle}></div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
