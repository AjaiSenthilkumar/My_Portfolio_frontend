import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <>
        <Header />
        <Hero />
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
    );
}

export default App;
