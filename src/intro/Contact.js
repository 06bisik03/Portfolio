import { useState } from "react";
import styles from "../App.module.css";
import Success from "./Success";
const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_title}>Contact Me!</div>
      <div className={styles.contact_details}>
        <div className={styles.contact_img} />

        <div className={!sent ? styles.contact_form: styles.contact_success}>
          {!sent ? (
            <>
              <input placeholder="Your Name/Company" />
              <textarea placeholder="" />
              <div className={styles.contact_button}>
                <button onClick={() => setSent(true)}>
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </>
          ) : (
            <Success />
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
