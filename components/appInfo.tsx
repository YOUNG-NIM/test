import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.footer}>

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

    </div>
    )
}
