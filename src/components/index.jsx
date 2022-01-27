import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Skills from "./skills";
import Contact from "./contact";
import Footer from './footer';
import Projects from "./projects";



export default class Components extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        )
    }
}