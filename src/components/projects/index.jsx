import React from "react";
import { Project_1, Project_2 } from "../../assets";

const Projects = () => {

    return (
        <section id="projects" className="pt-5 my-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col mb-5">
                        <h3 className="text-white fw-bold">My Projects</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src={Project_1} className="card-img-top" alt="Project 1" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src={Project_2} className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src={Project_1} className="card-img-top" alt="Project 3" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src={Project_2} className="card-img-top" alt="Project 3" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src={Project_1} className="card-img-top" alt="Project 3" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects