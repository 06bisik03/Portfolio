import styles from '../App.module.css';
const Extras = () => {
    return (
        <div className={styles.extras_container}>
            <div className={styles.extras_container_title}>Extras</div>
            <div className={styles.extras_details}>
                <div className={styles.extra_cont}>
                    <div>GitHub Account</div> 
                    <div><img alt="x" src="https://avatars.githubusercontent.com/u/85764773?s=400&v=4"/></div>
                    
                    <div>GitHub: 06bisik03</div>
                </div>
                <div className={styles.extra_cont}>
                    <div>LeetCode Account</div>
                    <div>
                        <img alt="x" src="/images/morde.jpg"/> 
                    </div>
                    <div>LeetCode: Kinbrah</div>
                </div>
                <div className={styles.extra_cont}>
                    <div>Most Valuable Project</div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Extras;