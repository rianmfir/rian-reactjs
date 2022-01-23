import React from "react";
import { CSS, HTML, Java, Javascript, MySQL, NodeJS, ReactJS } from "../../assets";
import '../index.css'

const Skills = () => {

    return (
        <section class="py-5" id="skills">
            <div class="row justify-content-center text-center">
                <h3 class="text-white fw-bold pb-3">Skills</h3>
                <div class="col-md-6 d-flex justify-content-center">
                    <img src={Javascript} width="64" alt="" class="img-skills bg-Secondary p-1" />
                    <img src={Java} width="64" alt="" class="img-skills bg-white p-2" />
                    <img src={HTML} width="64" alt="" class="img-skills bg-white p-2" />
                    <img src={CSS} width="64" alt="" class="img-skills bg-white p-2" />
                    <img src={MySQL} width="64" alt="" class="img-skills bg-white p-2" />
                    <img src={NodeJS} width="64" alt="" class="img-skills bg-white p-2" />
                    <img src={ReactJS} width="64" alt="" class="img-skills bg-Secondary pt-2" />
                </div>
            </div>
        </section>

    )
}

export default Skills