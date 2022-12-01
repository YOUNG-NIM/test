import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className="fixed-bottom"> 

        <div className="d-flex justify-content-around bg-light">
            
            <div className="m-3 p-2 bd-highlight">
            <span className={styles.logo}>
                <img width={55} height={50} src={`/img/ico_home.png`} />
            </span>
            </div>
            <div className="m-3 p-2 bd-highlight">
            <span className={styles.logo}>
                <img width={55} height={50} src={`/img/ico_my.png`} />
            </span>
            </div>
            <div className="m-3 p-2 bd-highlight">
            <span className={styles.logo}>
                <img width={60} height={50} src={`/img/ico_bubble.png`} />
            </span>
            </div>
        </div>

      </div>

    </div>
    )
}
