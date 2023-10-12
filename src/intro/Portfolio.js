import styles from "../App.module.css";
const Portfolio = () => {
  const x = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.portfolio_container}>
        <div>
            Website Preview Ideas
        </div>
      <div>
        {x.map((item, key) => {
          return (
            <div className={styles.portfolio_project_thumbnail} key={key}>
              <div>
                <img alt="x"/>
              </div>
              <div>
              <button><span></span>button</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
