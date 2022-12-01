import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className="fixed-bottom mb-5">

        <div className={styles.container}>

          <div className="mt-3 mb-5">

              <div className="float-end">
                  <a>이용약관</a> | <a>개인정보처리방침</a>
              </div>

              <img width={150} height={30} src={`/img/logo_gray.png`} />

              <div>
                  Copyright ⓒ 2015 MODUBIZ. All rights reserved.
              </div>

          </div>

        </div>

      </div>

      <div className="position-fixed bottom-0 start-0 end-0"> 

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
