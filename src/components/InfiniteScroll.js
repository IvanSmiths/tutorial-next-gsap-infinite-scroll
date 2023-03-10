import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "../data/projects"

function InfiniteScroll() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        ScrollTrigger.create({
            start: 1,
            end: "max",
            onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
            onLeave: self => self.scroll(2)
        }).scroll(2);
    }, []);
    return (
        <>
            <div className='infinite-scroll'>
                <div className='infinite-scroll-fixed'>
                    <span className='skill'>Frontend developer, based in Wiesbaden</span>
                    <h1>
                        John <br /> Doe
                    </h1>
                    <div className='contact'>
                        <span className='email'>info@johndoe.com</span>
                        <span className="linkedin">linkedin</span>
                    </div>
                </div>
                <div className="projects-wrapper">
                    {projects.map((project, index) => (
                        <div className='project' key={index}>
                            <img src={project.image} alt="" />
                            <h2>{project.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InfiniteScroll