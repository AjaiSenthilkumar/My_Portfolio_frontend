import React from "react";
import styles from './About.module.css';

function About(){
    return(
        <section id="about" className={styles.about}>
            <h2>About Me  ___________________________________________________________________</h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3>Experience</h3>
                    <p>Practiced in few internship  programs</p>
                </div>
                <div className={styles.card}>
                    <h3>Education</h3>
                    <p>B.e Computer Science and Engineering From P.S.V College of Engineering and Technology</p>
                </div>
            </div>
            <p className={styles.dec}>Hi, I'm Ajai, a passionate and enthusiastic Computer Science Engineering student at P.S.V. College of Engineering and Technology. 
                With a strong foundation in Python, React, and Flask, I am continually honing my skills to stay ahead in the dynamic world of
                technology.I thrive on solving problems, learning new technologies, and turning ideas into impactful projects. As a dedicated 
                fresher, I am excited to explore diverse fields in technology and expand my expertise with every opportunity.Whether it's building 
                intuitive web applications, designing robust backends, or diving into the latest advancements in AI, I am committed to pushing 
                boundaries and contributing to meaningful innovations.<br/>Let's connect and create something extraordinary together!</p>
        </section>
    );
};

export default About;