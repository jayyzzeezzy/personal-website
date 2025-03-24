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
                                        <a href={project.live} target="_blank">
                                            <button className="live">Live</button>
                                        </a>
                                        <a href={project.repo} target="_blank">
                                            <button className="repo">Repo</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <p className="name">{project.name}</p>
                                <p className="description">{project.description}</p>
                                <div className="tech">
                                    {project.tech.map((item) => {
                                        return (
                                            <p className="tech-item">#{item}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Project;