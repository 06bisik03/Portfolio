import styles from "../App.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_container}>
        <div className={styles.projects_title}>Professions</div>
        <div className={styles.projects_carousel_container}>
          <div className={styles.projects_carousel}>
            <div className={styles.projects_carousel__face}>
              <span>Backend Developer</span>
            </div>
            <div className={styles.projects_carousel__face}>
              <span>Frontend Developer</span>
            </div>
            <div className={styles.projects_carousel__face}>
              <span>FullStack Developer</span>
            </div>
            <div className={styles.projects_carousel__face}>
              <span>OOP Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
