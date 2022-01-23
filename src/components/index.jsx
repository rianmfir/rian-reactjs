import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Skills from "./skills";
import Contact from "./contact";
import Footer from './footer';



export default class Components extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Skills />
                <Contact />
                <Footer />
            </div>
        )
    }
}