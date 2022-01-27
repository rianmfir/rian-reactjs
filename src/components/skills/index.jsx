import React from "react";
import { CSS, HTML, Java, Javascript, MySQL, NodeJS, ReactJS } from "../../assets";
import '../../index.css'

const Skills = () => {

    return (
        <section className="py-5" id="skills">
            <div className="container">
                <div className="row text-center">
                    <div className="col mb-5">
                        <h3 className="text-white fw-bold">Skills</h3>
                    </div>
                </div>

                <div className="row justify-content-center text-center ">
                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={Javascript} width="64" alt="" className="img-skills bg-Tertiary p-1" />
                    </div>

                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={Java} width="64" alt="" className="img-skills bg-Tertiary  p-1" />
                    </div>
                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={HTML} width="64" alt="" className="img-skills bg-Tertiary  p-1" />
                    </div>
                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={CSS} width="64" alt="" className="img-skills bg-Tertiary  p-1" />
                    </div>
                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={MySQL} width="64" alt="" className="img-skills bg-Tertiary  p-1" />
                    </div>
                    <div className="col-md-1 col-sm-3 mb-4 mx-2" >
                        <img src={NodeJS} width="64" alt="" className="img-skills bg-Tertiary  p-1" />
                    </div>
                    <div className="col-md-1 col-sm-3 mb-4 mx-2 d-flex" >
                        <img src={ReactJS} width="64" alt="" className="img-skills bg-Tertiary  px-1 py-2" />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Skills