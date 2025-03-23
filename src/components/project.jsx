import projects from "../assets/projects.json";

function Project() {
    return (
        <div className="project-section">
            <h1>Recent Projects</h1>
            <div className="projects-container">
                {projects.map((project) => {
                    return (
                        <div key={project.id} className="project-card">
                            <div className="wrapper">
                                <img src={project.src} alt="" className="project-picture"/>
                                <div className="middle">
                                    <div className="demo">
                                        <a href="#">
                                            <button>Live</button>
                                        </a>
                                        <a href="#">
                                            <button>Repo</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="name">{project.name}</p>
                                <p className="description"></p>
                                <div className="tech"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Project;