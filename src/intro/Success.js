import styles from '../App.module.css';
const Success = () => {
  return (
    <div className={styles.success}>
        <div className={styles.successAnimation}>
        <svg
          className={styles.checkMark}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52">
          <circle
            className={styles.checkMark_circle}
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className={styles.checkMark_check}
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div className={styles.contact_message}>
        Your message has been successfully forwarded to 06bisik03@gmail.com. I shall reach out as soon as possible.
      </div>
    </div>
      

  );
};
export default Success;
