import React from 'react'
import style from '../styles/Signup.module.css'

const Signup = () => {
  return (
    <div className={style.authContainer}>
      <h1 className={style.title}>Sign up to use TikTok</h1>
      <div className={style.signupForm}>
        <div className={style.inputField}>
          <div className={style.inputTitle}>Username:</div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type='text'
              onChange={e => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className={style.inputField}>
          <div className={style.inputTitle}>Profile Image:</div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type='text'
              onChange={e => setProfile(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={style.loginButton} onClick={signUpClicked}>
        Sign up
      </div>
    </div>
  )
}

export default Signup