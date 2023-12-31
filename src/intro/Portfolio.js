import styles from "../App.module.css";
const Portfolio = () => {
  const x = [
    {
      project_img: "/images/kinfusion.png",
      project_link: "https://chimerical-sable-61c106.netlify.app",
    },
    { project_img: "/images/hiPex.png", project_link: "https://astounding-pika-903876.netlify.app" },
    { project_img: "/images/flavor.png", project_link: "https://sensational-pixie-1acf57.netlify.app" },
    {project_img: "/images/kinosmetics.png", project_link: "https://dapper-tanuki-24b6f6.netlify.app"},
    {project_img: "/images/omega.png",project_link: "https://phenomenal-baklava-a9d4d7.netlify.app"},
    {project_img: "/images/comingsoon.jpeg",project_link: "/"},
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
