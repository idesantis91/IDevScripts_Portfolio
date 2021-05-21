import React from 'react';
import profile from '../img/profile.png';

const AboutMe = () => {

    return(
        <div className="main">
             <div className="glass">
                <div className="aboutSection">
                    <div className="user">
                        <img src={profile} alt=""/>
                        <h3>Isaiah DeSantis</h3>
                        <p>Software Engineer</p>
                    </div>
                    <div className="skills">
                        <div className="languages">
                            <h3>Langauges/Frameworks</h3>
                            <p>Javascript</p>
                            <p>Java</p>
                            <p>Reactjs</p>
                            <p>React Native</p>
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <p>BS in Computer Science- Cheyney University</p>
                    </div>
                </div>
                <div className="projects">
                    <h3>Projects</h3>
                </div>
             </div>
        </div>
    )
}


export default AboutMe;