import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutDebu extends Component {

    constructor() {
        super();
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        };
        this.state = {
            active_screen: "about",
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (!lastVisitedScreen || !this.screens[lastVisitedScreen]) {
            lastVisitedScreen = "about";
        }

        this.changeScreen(lastVisitedScreen);
    }

    changeScreen = (target) => {
        let screen = "about";
        if (typeof target === "string") {
            screen = target;
        } else if (target) {
            screen = target.id || (target.currentTarget && target.currentTarget.id) || (target.target && target.target.id) || "about";
        }
        if (!this.screens[screen]) {
            screen = "about";
        }

        try {
            localStorage.setItem("about-section", screen);
            ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "About Debu" });
        } catch (e) {}

        this.setState({
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onClick={this.changeScreen} onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about debu" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onClick={this.changeScreen} onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="debu's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onClick={this.changeScreen} onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="debu's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onClick={this.changeScreen} onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="debu's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onClick={this.changeScreen} onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="debu's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.screens[this.state.active_screen] || <About />}
                </div>
            </div>
        );
    }
}

export default AboutDebu;

export const displayAboutDebu = () => {
    return <AboutDebu />;
}

export const displayAboutVivek = () => {
    return <AboutDebu />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full overflow-hidden border-2 border-ub-orange shadow-md">
                <img className="w-full h-full object-cover" src="./images/logos/debu_avatar.jpg" alt="Debapriya Das Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Debapriya Das</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Java Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a Student currently pursuing Computer Science. I've completed my B.Tech at <u className="cursor-pointer text-red-400">Bengal Institute of Technology</u>, and now I'm looking for Software Developer opportunities! Hit me up <a className="underline" href="mailto:debapriya.edu.27@gmail.com">debapriya.edu.27@gmail.com</a></li>
                <li className=" mt-3 list-building">Actively engaged in building efficient back-end solutions.</li>
                <li className=" mt-3 list-time">When I am not coding, I like to spend my time playing FIFA and listening to music.</li>
                <li className=" mt-3 list-star">And I also have interest in Artificial Intelligence & Data Science! Love exploring AI & Data Science in the future.</li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Bengal Institute of Technology, Kolkata
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021 – 2025</div>
                    <div className=" text-sm md:text-base">B.Tech in Computer Science & Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.24 / 10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Jharia Sri Ramkrishna Vidyapith
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 – 2021</div>
                    <div className=" text-sm md:text-base">Higher Secondary (Class XII)</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 90%</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Java Full Stack, Spring Boot, React.js & MySQL!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white" alt="Debu Java" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Debu javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="Debu mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="Debu HTML" />
                        <img className="m-1" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=ffffff" alt="Debu CSS" />
                        <img className="m-1" src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Debu git" />
                        <img className="m-1" src="https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white" alt="Debu VS Code" />
                        <img className="m-1" src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=flat&logo=intellij-idea&logoColor=white" alt="Debu IntelliJ" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white" alt="Debu Spring Boot" />
                        <img className="m-1" src="https://img.shields.io/badge/Spring_Security-6DB33F?style=flat&logo=spring-security&logoColor=white" alt="Debu Spring Security" />
                        <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="Debu react" />
                        <img className="m-1" src="https://img.shields.io/badge/JWT-000000?style=flat&logo=json-web-tokens&logoColor=white" alt="Debu JWT" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Debu tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/REST_APIs-02569B?style=flat&logoColor=white" alt="Debu REST APIs" />
                        <img className="m-1" src="https://img.shields.io/badge/Hibernate-59666C?style=flat&logo=hibernate&logoColor=white" alt="Debu Hibernate" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="https://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="Debu linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Apply Drive - Full Stack Job Portal",
            date: "Jun 2026",
            link: "https://github.com/debapriyo007/apply-drive-java-fullstack",
            description: [
                "Developed a full-stack job portal with recruiter and candidate modules using Spring Boot, React.js, and MySQL.",
                "Implemented RESTful APIs, Spring Security, JWT authentication, role-based authorization, and complete CRUD operations.",
                "Built a responsive React.js frontend with protected routes, reusable components, Axios, and state management."
            ],
            domains: ["java", "spring-boot", "react.js", "mysql", "jwt"]
        },
        {
            name: "Prescriptio Vault",
            date: "Oct 2025",
            link: "https://github.com/debapriyo007/prescriptio-vault",
            description: [
                "Built a secure prescription management application with Clerk authentication and protected routes.",
                "Developed reusable React components with React Router and Tailwind CSS for a responsive user interface.",
                "Implemented secure document management and optimized navigation for improved user experience."
            ],
            domains: ["react.js", "tailwindcss", "clerk"]
        },
        {
            name: "GitHub Searcher",
            date: "May 2025",
            link: "https://github.com/debapriyo007/github-searcher",
            description: [
                "Developed a GitHub repository search application using the GitHub REST API.",
                "Implemented repository search with filtering and displayed stars, forks, language, and owner details.",
                "Designed a responsive interface with reusable components, loading states, and error handling."
            ],
            domains: ["react.js", "tailwindcss", "github-api"]
        },
        {
            name: "Sales Savvy",
            date: "2025 – 2026",
            link: "https://github.com/debapriyo007",
            description: [
                "Full-stack sales management application built at KodNest using Spring Boot, React.js, and MySQL.",
                "Developed REST APIs, implemented CRUD operations, and integrated MySQL using JPA/Hibernate."
            ],
            domains: ["java", "spring-boot", "mysql", "react.js"]
        },
        {
            name: "LinkHub - Cloud Bookmark Vault",
            date: "2025",
            link: "https://github.com/debapriyo007/link-hub-v1.0.0",
            description: [
                "Security-focused cloud bookmark vault built to organize, search, and launch personal web links without leaking private categories."
            ],
            domains: ["javascript", "react.js", "tailwindcss"]
        }
    ];

    const tag_colors = {
        "java": "orange-500",
        "spring-boot": "green-500",
        "react.js": "blue-400",
        "mysql": "blue-500",
        "jwt": "yellow-400",
        "tailwindcss": "blue-300",
        "clerk": "purple-400",
        "github-api": "gray-400",
        "javascript": "yellow-300"
    };

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2 font-medium">{project.name}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=debapriyo007&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, i) => {
                                            return <li key={i} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, i) => {
                                                const color = tag_colors[domain] || "gray-300";
                                                return <span key={i} className={`px-1.5 py-0.5 w-max border border-${color} text-${color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/debapriya_das_resume.pdf" title="debapriya das resume" frameBorder="0"></iframe>
    )
}
