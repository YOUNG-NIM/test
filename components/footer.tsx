import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className="mb-5">

        <div className={styles.container}>

          <div className="mt-3 mb-5">

              <div className="float-end">
                  <a className={styles.footerText}>이용약관</a> | <a className={styles.footerText}>개인정보처리방침</a>
              </div>

              <img width={80} height={15} src={`/img/logo_gray.png`} />

              <div>
                  <span className={styles.footerText}>Copyright ⓒ 2015 MODUBIZ. All rights reserved.</span>
              </div>

          </div>

        </div>

      </div>

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
