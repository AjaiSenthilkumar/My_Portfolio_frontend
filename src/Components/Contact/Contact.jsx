import React from "react";
import styles from './Contact.module.css';

const Contact = () =>{

    // const handleEmailClick=()=>{
    //     const mailtoLink = "mailto:example@email.com?subject=Hello&body=This%20is%20a%20test%20email";
    // window.location.href = mailtoLink;
    // }

    return(
    <section className={styles.contact}>
        <h2>Contact Me_________________________________________________________________________</h2>
        <h4>Find out me on the following Platform ?</h4>
        <div className={styles.container}>
            <button className={styles.btn}> 📧 Email Me</button>
            <button className={styles.btn}> 🔗 LinkedIn</button>
        </div>
    </section>
    );
};

export default Contact;