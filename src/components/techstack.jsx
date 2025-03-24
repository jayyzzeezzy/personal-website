import frontend from "../assets/frontend.json";
import backend from "../assets/backend.json";
import others from "../assets/others.json";


function TechStack() {
    return (
        <div className="tech-stack">
            <h1>Tech Stack</h1>
            <div className="stack-container">
                <div className="column">
                    <p className="frontend">Frontend</p>
                    <div className="stack">
                        <ul>
                            {frontend.map((tech) => {
                                return (
                                    <li className="stack-item" key={tech.id}>
                                        <img src={tech.src} alt="" className="stack-icon"/>
                                        <p>{tech.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <p className="backend">Backend</p>
                    <div className="stack">
                        <ul>
                            {backend.map((tech) => {
                                return (
                                    <li className="stack-item" key={tech.id}>
                                        <img src={tech.src} alt="" className="stack-icon"/>
                                        <p>{tech.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <p className="others">Others</p>
                    <div className="stack">
                        <ul>
                            {others.map((tech) => {
                                return (
                                    <li className="stack-item" key={tech.id}>
                                        <img src={tech.src} alt="" className="stack-icon"/>
                                        <p>{tech.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack;