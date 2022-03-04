import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import adchoice from '../adchoices.svg'

export const Footer = () => {

    return (
        <div className={styles.footerdiv}>
            <div >
            <Link to='#'>English (UK)</Link>
            <Link to='#'>हिन्दी</Link>
            <Link to='#'>मराठी</Link>
            <Link to='#'>اردو</Link>
            <Link to='#'>ਪੰਜਾਬੀ</Link>
            <Link to='#'>বাংলা</Link>
            <Link to='#'>ગુજરાતી</Link>
            <Link to='#'>தமிழ்</Link>
            <Link to='#'>తెలుగు</Link>
            <Link to='#'>മലയാളം</Link>
            <Link to='#'>ಕನ್ನಡ</Link>
            <hr/>
            <br/>
            <Link to='/reg'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
            <Link to='#'>Messenger</Link>
            <Link to='#'>Facebook Lite</Link>
            <Link to='#'>Watch</Link>
            <Link to='#'>Places</Link>
            <Link to='#'>Games</Link>
            <Link to='#'>Marketplace</Link>
            <Link to='#'>Facebook Pay</Link>
            <Link to='#'>Oculus</Link>
            <Link to='#'>Portal</Link>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Bulletin</Link>
            <Link to='#'>Local</Link><br/>
            <Link to='#'>Fundraisers</Link>
            <Link to='#'>Services</Link>
            <Link to='#'>Voting Information Centre</Link>
            <Link to='#'>Groups</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Create ad</Link>
            <Link to='#'>Create Page</Link>
            <Link to='#'>Developers</Link>
            <Link to='#'>Careers</Link>
            <Link to='#'>Privacy</Link>
            <Link to='#'>Cookies</Link>
            <Link to='#'>AdChoices<img className={styles.adIcon} src={adchoice}/></Link>
            <Link to='#'>Terms</Link><br/>
            <Link to='#'>Help</Link>

            <p>Meta © 2022</p>
        </div>
    </div>
    )
}
