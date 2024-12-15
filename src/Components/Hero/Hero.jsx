import React from "react";
import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/ajai-resume-oct2024.pdf"; // Ensure this path is correct and accessible
        link.download = "ajai_resume.pdf"; // Set the desired file name for download
        document.body.appendChild(link); // Append to DOM to ensure click works in all browsers
        link.click();
        document.body.removeChild(link); // Clean up after click
    };

    return (
    <section className={styles.hero}>
        <div className={styles.container}>
            <img 
            src="/assets/images/ajai.jpg"
            alt="ajai img" 
            className={styles.profile}
            />
            <small>hello I'm</small>
            <h1>Ajai.S</h1>
            <p> Engineering Student</p>
            <div className={styles.buttonGroup}>
                <button onClick={handleDownload} className={styles.btn}>Download CV</button>
                <button onClick={() => alert('Contact form coming soon!')} className={styles.btn}>Contact Me</button>
            </div>
            <div className={styles.sociallinks}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.icon}> <FontAwesomeIcon icon={faGithub} /> </a>  <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
    </section>
    );
};

export default Hero;
