import React from "react";
import { FaCode, FaDatabase, FaLaptopCode, FaGraduationCap, FaUserFriends, FaChalkboardTeacher, FaCloud } from "react-icons/fa";
import { SiDotnet, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiMysql, SiJavascript, SiBootstrap } from "react-icons/si";
import "./About.css"; // Custom CSS for additional styling

const About = () => {
    return (
        <>
            {/* Summary Section */}
            <div id="summary" className="basic-1 bg-gray ">
                <div className="container">
                    <div className="row">
                        {/* First Column */}
                        <div className="col-lg-4">
                            <div className=" heading text-container first">
                                <h2 className="text-black">Hi there, I'm Manoj,</h2>
                                <p>
                                    As a dedicated Software Developer at Salgem Infoigy Tech Pvt. Ltd., I specialize in designing and developing high-performance web and Windows applications using cutting-edge technologies such as .NET, ASP.NET, React, and Node.js. With a proven track record of delivering impactful solutions, I have successfully built scalable e-learning platforms, robust inventory management systems, and dynamic, responsive websites that prioritize seamless user experiences and optimized system performance.
                                </p>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className="col-lg-4">
                            <div className="text-container second">
                                <div className="time">2024 - PRESENT</div>
                                <h6 className="text-black">Software Developer</h6>
                                <p>Working at Salgem Infoigy Tech Pvt. Ltd., Noida</p>

                                <div className="time">2024 - 2024</div>
                                <h6 className="text-black">Internship</h6>
                                <p>Gained hands-on experience in Asp.Net technology at K Soft Vision, Lucknow</p>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="col-lg-4">
                            <div className="text-container third">
                                <div className="time">2020 - 2024</div>
                                <h6 className="text-black">B.Sc. Information Technology</h6>
                                <p>Graduated from Baba Saheb Bhim Rao Ambedkar University (Central University) Lucknow</p>

                                <div className="time">2018 - 2019</div>
                                <h6 className="text-black">Intermediate</h6>
                                <p>Completed from S V I C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Internship Section */}
            <div id="internship" className="basic-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Internship</h2>
                            <div className="internship-container">
                                <div className="internship-item">
                                    <h4>Salgem Infoigy Tech Pvt Ltd</h4>
                                    <p><strong>Software Developer</strong> | 05/2024 - 01/2025 | Noida</p>
                                    <ul>
                                        <li>
                                            <FaCode className="icon" /><strong>Skill development:</strong> Gaining hands-on experience in e-learning, e-governance, and CRM systems through real-world projects.
                                        </li>
                                        <li>
                                            <FaDatabase className="icon" /> <strong>Technology Exploration:</strong> Actively learning and implementing new technologies, frameworks, and tools to stay updated with industry trends and enhance technical expertise.
                                        </li>
                                        <li>
                                            <FaCloud className="icon" /> <strong>Future Focus:</strong> Expanding knowledge in <strong>cloud computing</strong> to build scalable, innovative, and future-ready software solutions.
                                        </li>
                                    </ul>
                                </div>
                                <div className="internship-item">
                                    <h4>K Soft Vision</h4>
                                    <p><strong>Internship</strong> | 01/2024 - 04/2024 | Lucknow, Uttar Pradesh</p>
                                    <ul>
                                        <li>
                                            Gained hands-on experience in <strong>Asp.Net technology</strong>, working on backend logic, frontend design, and database integration.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="basic-3 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Projects</h2>
                            <div className="project-container">
                                <div className="project-item">
                                    <h4>Inventory Management System</h4>
                                    <p>
                                        <strong>Technologies:</strong> <FaCode /> C#, <SiDotnet /> .NET, <SiMysql /> SQL Server
                                    </p>
                                    <p>
                                        Designed an intuitive user interface for managing inventory, sales, and customer records. Implemented robust database functionalities to ensure data integrity and security.
                                    </p>
                                </div>
                                <div className="project-item">
                                    <h4>CRM (Customer Relationship Management)</h4>
                                    <p>
                                        <strong>Technologies:</strong> <SiHtml5 /> HTML, <SiCss3 /> CSS, <FaCode /> C#, <SiDotnet /> ASP.NET, <SiMysql /> SQL
                                    </p>
                                    <p>
                                        Designed and implemented a user-friendly interface, integrated database functionalities, and ensured seamless communication between departments.
                                    </p>
                                </div>
                                <div className="project-item">
                                    <h4>E-Learning Web Application</h4>
                                    <p>
                                        <strong>Technologies:</strong> <SiReact /> React, <SiNodedotjs /> Node.js, <SiMysql /> MySQL, <SiBootstrap /> Bootstrap
                                    </p>
                                    <p>
                                        Developed a comprehensive e-learning web application for an educational institute, enabling students to browse, purchase, and access courses online. The platform features a user-friendly interface, secure payment integration, and interactive course content, providing a seamless learning experience.
                                    </p>
                                </div>
                                <div className="project-item">
                                    <h4>E-Governance Project</h4>
                                    <p>
                                        <strong>Technologies:</strong> <SiNodedotjs /> Node.js, <SiReact /> React, Google APIs, WhatsApp API
                                    </p>
                                    <p>
                                        Currently working on backend development, focusing on integrating WhatsApp chatbots, Google APIs, and implementing forms validation processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div id="education" className="basic-4 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Education</h2>
                            <div className="education-container">
                                <div className="education-item">
                                    <h4>B.Sc. Information Technology</h4>
                                    <p>
                                        <FaGraduationCap className="icon" /> <strong>Baba Saheb Bhim Rao Ambedkar University</strong> | 05/2020 - 04/2024 | CGPA: 8/10
                                    </p>
                                    <p>
                                        During my undergraduate studies, I gained a strong foundation in programming languages such as <strong>C</strong>, <strong>C++</strong>, and <strong>Java</strong>, along with hands-on experience in <strong>.NET</strong> and <strong>SQL Server</strong>. My time at the university provided me with numerous opportunities to work on real-world projects, participate in coding competitions, and collaborate with peers, which helped me develop both technical and soft skills. These experiences have been instrumental in shaping my career as a software developer.
                                    </p>
                                </div>
                                <div className="education-item">
                                    <h4>Intermediate</h4>
                                    <p>
                                        <strong>S V I C</strong> | 04/2018 - 05/2019
                                    </p>
                                </div>
                                <div className="education-item">
                                    <h4>High School</h4>
                                    <p>
                                        <strong>S V I C</strong> | 04/2016 - 05/2017
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="basic-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Skills</h2>
                            <div className="skills-container">
                                <div className="skill-item">
                                    <FaCode /> C#
                                </div>
                                <div className="skill-item">
                                    <SiDotnet /> .NET
                                </div>
                                <div className="skill-item">
                                    <SiReact /> React
                                </div>
                                <div className="skill-item">
                                    <SiNodedotjs /> Node.js
                                </div>
                                <div className="skill-item">
                                    <SiHtml5 /> HTML
                                </div>
                                <div className="skill-item">
                                    <SiCss3 /> CSS
                                </div>
                                <div className="skill-item">
                                    <SiMysql /> MySQL
                                </div>
                                <div className="skill-item">
                                    <SiJavascript /> JavaScript
                                </div>
                                <div className="skill-item">
                                    <SiBootstrap /> Bootstrap
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Volunteer Experience Section */}
            <div id="volunteer" className="basic-6 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Volunteer Experience</h2>
                            <div className="volunteer-container">
                                <div className="volunteer-item">
                                    <h4>VIBHA, Lucknow</h4>
                                    <p>
                                        <FaUserFriends className="icon" /> Assisted in event coordination and interacted with renowned scientists and professors.
                                    </p>
                                </div>
                                <div className="volunteer-item">
                                    <h4>IISF, Faridabad and Bhopal</h4>
                                    <p>
                                        <FaChalkboardTeacher className="icon" /> Participated in poster presentations and assisted in event coordination at the India International Science Festival.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;