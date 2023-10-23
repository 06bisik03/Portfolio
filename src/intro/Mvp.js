import styles from "../App.module.css";
import Navbar from "../UI/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../swiper.css";
const Mvp = () => {
  const setScroller = () => {
    window.location.href = "/";
  };
  const slideContent = Array.from({ length: 22 }, (v, i) => (
    <SwiperSlide key={i}>
      <div className={styles.slideContent}>
        <img alt="x" src={`/images/opusElite/${i + 1}.png`} />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.mvp_container}>
      <div>
        <Navbar scroller={setScroller} />
      </div>
      <div className={styles.mvpDetails}>
        <div className={styles.carouselMvp}>
          <div className={styles.swiperCont}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              {slideContent}
            </Swiper>
          </div>

          <div className={styles.video}>
            <iframe
              className={styles.ivideo}
              title="vimeo-player"
              src="https://player.vimeo.com/video/876983499?h=6170c8ef5a"
              frameborder="0"
              allowfullscreen></iframe>
          </div>
        </div>
        <div className={styles.mvp_expl}>
          <div>OPUSELITE</div>
          <div className={styles.mvp_expl_details}>
            <div>
              OpusElite is a luxury suit and scent website. It uses the latest
              technologies and modern languages/frameworks like ReactJS,
              JavaScript, NodeJS, Express, NoSQL, MongoDB and many other complex
              middlewares like O-Auth2 Google.
              <br />
              Having both frontend and backend, while it can be classified as a
              full-stack project, due to the prices required for a backend, this
              project is only available for employers if run "npm run deploy" on
              a local machine on the terminal of the repository.
              <br />
              Very important to keep in mind is that, this project is a full
              fledged website and not just a template or a preview. Every last
              component is created to function and the whole website can
              hypothetically be run as a real website.
              <br />
              It makes use of NoSQL languages such as MongoDB, to store data
              about products and also store data about users and transactions.
              While also using cookies and sessions, it makes the best use of
              backend languages such as NodeJS to provide the best user
              experience.
              <br />
              It is an E-Commerce website that makes use of the latest features
              of every language to bring forth the maximum potential of a
              website. Not just in the backend but the data is also sorted on
              the frontend to showcase ReactJS skills. The Video of the project
              can be found on the right of the top container, meanwhile a
              slideshow of the webpage can be found on the left.
            </div>
            <div className={styles.logos}>
              <div>
                <img alt="x"src="/images/jsLogo.png"/>
              </div>
              <div>    <img alt="x" src="/images/reactLogo.png"/></div>
              <div>    <img alt="x"src="/images/nodeLogo.png"/></div>
              <div>    <img alt="x"src="/images/expressLogo.png"/></div>
              <div> <img alt="x"src="/images/mongoLogo.png"/> </div>
              <div> <img alt="x"src="/images/excelLogo.png"/> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mvp;
