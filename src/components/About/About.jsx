import React from 'react';
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.aboutTab}>
            <h1 className={styles.aboutTitle}>Welcome to my Social Network Project</h1>

            <div className={styles.loginInfo}>
                <h3>For login you can use my credentials:</h3>
                <ul>
                    <li className={styles.listItem}><span><b>Login:</b></span> <span>veng93@yandex.ru</span></li>
                    <li className={styles.listItem}><span><b>Password:</b></span> <span>12345</span></li>
                </ul>
                <p>Without logging in, you can only check the Users and About tabs.<br />
                    After five failed login attempts, you will see a captcha that needs to be solved.</p>
            </div>

            <div className={styles.mainInfo}>
                <h3>Main information</h3>
                <div className={styles.mainInfoItem} >On the 'Profile' tab, you can change your profile info, update status and photo. The API that was used does not allow you to save posts, so they are in the redux store.</div>
                <div className={styles.mainInfoItem} >The 'Messages' tab is not working yet due to the same API capabilities. So you can only write messages in an improvised chat, without choosing a user.</div>
                <div className={styles.mainInfoItem} >On the 'Friends' tab, you see a list of users you are followed to. You can go to each user's page by clicking on their name or photo.</div>
                <div className={styles.mainInfoItem} >On the 'All users' tab, you can see all the Network users. You can also go to each user's page and also click the button to follow or unfollow user.</div>
                <div className={styles.mainInfoItem} >
                    You can find my code in my public repository on GitHub by
                    <a href={"https://github.com/KubantsevAS/SocialNetwork"} target="_blank" rel="noreferrer">
                        <button className={styles.link}>link</button>
                    </a>
                </div>
            </div>

            <div className={styles.loginInfo}>
                <h3>Used tech stack:</h3>
                <ul>
                    <li>React v18</li>
                    <li>React-router-dom</li>
                    <li>Redux</li>
                    <li>Redux-Thunk</li>
                    <li>React-Redux</li>
                    <li>React-final-form</li>
                    <li>Axios</li>
                    <li>Reselect</li>
                    <li>Jest for some unit tests</li>
                    <li>Yarn as a package manager</li>
                </ul>
            </div>


        </div>

    )
}


export default About;