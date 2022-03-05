import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/friends.module.css'

export const Birthdays = () => {
  return (<>
    <div className={styles.sidebar}>
      <section>
        <h1>Friends</h1>
      </section>
      <div>
      <Link to='/friends'>
      <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReuh}></span></span>
        Home</Link>
      </div>
      <div>
        <Link to='/friends/requests'>
          <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReu}></span></span>
          Friend requests
          <span className={styles.arrowsection}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/suggestions'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMRe}></span></span>
          Suggestions
          <span className={styles.arrowsection2}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/list'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMR}></span></span>
          All Friends
          <span className={styles.arrowsection3}><span className={styles.arrow}></span></span>
          </Link>
      </div>
      <div>
        <Link to='/friends/birthdays'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzM}></span></span>
          Birthdays</Link>
      </div>
    </div>
    <div className={styles.content}>
    </div>
  </>
  )
}
