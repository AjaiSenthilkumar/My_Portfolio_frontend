import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <p>&copy; {new Date().getFullYear()} Ajai.S. All rights reserved.</p>
            <nav className={styles.footerNav}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            </nav>
        </div>
        </footer>
    );
    }

export default Footer;
