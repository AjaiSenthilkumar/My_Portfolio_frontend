import React from "react";
import styles from './skills.module.css';
import tick from '../images/tick.png';

const Skills = () => {
    const frontendSkills = [
        { name: 'HTML', icon: tick },
        { name: 'CSS', icon: tick },
        { name: 'JavaScript', icon: tick},
        { name: 'React', icon: tick}
    ];

    const backendSkills = [
        { name: 'Python', icon: tick },
        { name: 'Flask', icon: tick },
        { name: 'Java', icon: tick },
        { name: 'MySQL', icon: tick }
    ];

    return (
        <section id="skills" className={styles.skills}>
            <h2>Skills_____________________________________________________________________</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Frontend Development</h3>
                    <ul>
                        {frontendSkills.map((skill, index) => (
                            <li key={index} className={styles.skillItem}>
                                <img 
                                    src={skill.icon} 
                                    alt={`${skill.name} icon`} 
                                    className={styles.skillicon} 
                                />
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.card}>
                    <h3>Backend Development</h3>
                    <ul>
                        {backendSkills.map((skill, index) => (
                            <li key={index} className={styles.skillItem}>
                                <img 
                                    src={skill.icon} 
                                    alt={`${skill.name} icon`} 
                                    className={styles.skillicon} 
                                />
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
