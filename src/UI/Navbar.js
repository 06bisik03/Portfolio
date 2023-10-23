import styles from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserTie,faMapPin } from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
const Navbar = ({scroller}) => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_content_container}>
        <div className={styles.navbar_content_detail}>
      
          <FontAwesomeIcon icon={faEnvelopeOpen} color="black"/>
         
          06bisik03@gmail.com
         
        </div>
     
        <div className={styles.navbar_content_detail}>
        <FontAwesomeIcon icon={faWhatsapp} color="green"/>
        +90 5510603669
        </div>
        <div className={styles.navbar_content_detail}>
        <FontAwesomeIcon icon={faMapPin} color="black"/>
        Rütscher Straße 165, 52072, Aachen
        </div>
        <div className={styles.navbar_elements}>
          <div onClick={() => scroller(1)}>Portfolio</div>
          <div onClick={() => scroller(2)} >Professions</div>
          <div onClick={() => scroller(3)}>Skills</div>
          <div onClick={() => scroller(4)}>Extras</div>
          <div onClick={() => scroller(5)}>Contact</div>
         
        </div>
      </div>
    </div>
  );
};
export default Navbar;
