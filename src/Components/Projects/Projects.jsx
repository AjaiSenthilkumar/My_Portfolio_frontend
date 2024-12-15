import React from 'react';
import styles from './Projects.module.css';
import news from '../images/news.jpeg';
import chats from '../images/chating.png';
import bot from '../images/bot.png';

const Projects = () => {
    const projects = [
        { title: 'News Aggregator', description: 'A simple News aggregator using News API.', link: 'https://github.com/AjaiSenthilkumar/news_aggrecator.git' , image: news},
        { title: 'Chatting Application', description: 'an Real time chating application using REACT.JS', link: 'https://github.com/AjaiSenthilkumar/React-Chating_application.git',image: chats },
        { title: 'python chatbot', description: 'An simple chatbot application.', link: 'https://github.com/AjaiSenthilkumar/chatbot_py.git',image: bot },
    ];

    return (
        <section id="projects" className={styles.projects}>
        <h2>Projects____________________________________________________________________</h2>
        <div className={styles.grid}>
            {projects.map((project, index) => (
            <div key={index} className={styles.card}>
                <img 
                    src={project.image} 
                    alt={`${project.title} Thumbnail`} 
                    className={styles.image} 
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button 
                className={styles.gitlink} 
                onClick={() => window.open(project.link)}>
                    Git link
                </button>
            </div>
            ))}
        </div>
        </section>
    );
    };

export default Projects;
