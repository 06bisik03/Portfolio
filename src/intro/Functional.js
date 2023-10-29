import styles from "../App.module.css";
const Functional = () => {
  const x = [
    {
      project_img: "/images/cryptpulse.png",
      project_link: "https://singular-faloodeh-e684e1.netlify.app",
    },
    {
      project_img: "/images/comingsoon.jpeg",
      project_link: "xx"
    },
    {
      project_img: "/images/comingsoon.jpeg",
      project_link: "xx"
    }
   
   
   
  ];

  return (
    <div className={styles.portfolio_container}>
      <div>Full-Fledged Functional Templates</div>
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
export default Functional;