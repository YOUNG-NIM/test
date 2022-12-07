import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="fixed-bottom">

      <div className="start-0 end-0"> 

          <div className="d-flex justify-content-around bg-light">
              
              <div className="m-1 p-2 bd-highlight">
              <span className={styles.logo}>
                  <img width={41} height={40} src={`/img/ico_home.png`} />
              </span>
              </div>
              <div className="m-1 p-2 bd-highlight">
              <span className={styles.logo}>
                  <img width={41} height={40} src={`/img/ico_my.png`} />
              </span>
              </div>
              <div className="m-1 p-2 bd-highlight">
              <span className={styles.logo}>
                  <img width={42} height={40} src={`/img/ico_bubble.png`} />
              </span>
              </div>
          </div>
        </div> 

    </div>
    )
}
