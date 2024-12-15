import styles from './Header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Projects'>Project</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Contact'>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;