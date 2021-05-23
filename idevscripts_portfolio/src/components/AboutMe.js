import React from 'react';
import Moment from 'react-moment';
import profile from '../img/profile.png';
//Animations
import { motion } from "framer-motion";
//Icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImMail } from "react-icons/im";


const AboutMe = () => {

    //Date and Time 
    const today = new Date();
    const date = today.toLocaleDateString();

    return(
        <div className="main">
            <div className="devName">
                <h3>IDevScripts</h3>
            </div>
            <div className="date-container">
            <Moment id='dates' format="dddd, MMMM Do YYYY" titleFormat="D MM YYYY" withTitle>
                {date}
            </Moment>
            </div>
             <div className="glass">
                <div className="aboutSection">
                    <div className="user">
                        {/* <img src={profile} alt=""/> */}
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
                        <p>GPA(3.65)</p>
                    </div>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="project-list">
                    <motion.div
                        className='container'
                        whileHover={{ scale: 1.7, rotate: 360 }}
                    >
                    <h3>ShapeShot</h3>
                    <p>
                        A 1v1 Shape Shooter, where the last Shape Standing Wins!
                    </p>
                    </motion.div>
                    <motion.div
                        className='container'
                        whileHover={{ scale: 1.7, rotate: 360 }}
                    >
                    <h3>StudyQuiz</h3>
                    <p>
                        A React Application that allows you to create 
                    a study guide to study for exams or just to have fun!
                    </p>
                    </motion.div>
                    <motion.div
                        className='container'
                        whileHover={{ scale: 1.7, rotate: 360 }} 
                    >
                    <h3>First Assembly App</h3>
                    <p>Created an App for First Assembly of God (React Native)</p>
                    </motion.div>
                    </div>

                    <div className="contact">
                    <h2>Contact Me</h2>
                    <div className="contact-list">
                    <motion.div
                        className='container-contact'
                        whileHover={{ scale: 1.7, rotate: 360 }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/idesantis91';
                         }} 
                    >
                    <FaGithub size='4rem' color='gray' className='icon'/>
                    </motion.div>
                    <motion.div
                        className='container-contact'
                        whileHover={{ scale: 1.7, rotate: 360 }} 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href=('mailto:IDevScript@gmail.com')
                         }}
                    >
                    <ImMail size='4rem' color='gray' className='icon'/>
                    </motion.div>
                    <motion.div
                        className='container-contact'
                        whileHover={{ scale: 1.7, rotate: 360 }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.linkedin.com/in/isaiahdesantis/';
                         }}
                    >
                    <FaLinkedin size='4rem' color='gray' className='icon'/>
                    </motion.div>
                    </div>
                    </div>
                </div>
             </div>
        </div>
    )
}


export default AboutMe;