import styles from "../App.module.css";
const Portfolio = () => {
  const x = [
    {
      project_img: "/images/kinfusion.png",
      project_link: "https://chimerical-sable-61c106.netlify.app",
    },
    { project_img: "x", project_link: "x" },
    { project_img: "x", project_link: "x" },
    { project_img: "x", project_link: "x" },
    { project_img: "x", project_link: "x" },
    { project_img: "x", project_link: "x" },
  ];

  return (
    <div className={styles.portfolio_container}>
      <div>Website Preview Ideas</div>
      <div>
        {x.map((item, key) => {
          return (
            <a target="_blank" rel="noreferrer" href={item.project_link} className={styles.portfolio_project_thumbnail} key={key}>
              <div className={styles.portfolio_thumb_cont}>
                <img alt="x" src={item.project_img} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
