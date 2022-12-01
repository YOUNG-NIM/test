import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="mt-3 mb-3">
        <div className={styles.container}>
          <a onClick={() => signOut()}>

            <div className={styles.loginsub}>
              <div className="float-end">
                  
                로그아웃
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                
              </div>
            </div>

            <div className={styles.loginmain}>
              <span className='fw-bold'>{session.user.email}님</span>안녕하세요
            </div>

          </a>
        </div>
      </div>
    )
  }
  return (
    <div className="mt-3 mb-3">
      <div className={styles.container}>

        <a onClick={() => signIn()}>
          <div className={styles.loginsub}>
            <div className="float-end">
                
              로그인
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
              
            </div>
          </div>
        </a>

        <a href="signup">
          <div className={styles.loginsub}>
            <div className="float-end">
                
              회원가입
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
              
            </div>
          </div>
        </a>

        <div className={styles.loginmain}>
          <span className='fw-bold'>로그인</span>하세요
        </div>

      </div>
    </div>
  )
}