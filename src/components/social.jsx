import gmail from "../assets/images/socials/gmail.svg";
import github from "../assets/images/socials/github.svg";
import linkedin from "../assets/images/socials/linkedin.svg";
import instagram from "../assets/images/socials/instagram.svg" ;
import tiktok from "../assets/images/socials/tiktok.svg";
import reddit from "../assets/images/socials/reddit.svg";

function Socials() {
    return (
        <footer className="socials">
            <h1 className="socials-heading">Socials</h1>
            <div className="social-media">
                <a href="mailto:jam9es@gmail.com" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={gmail} alt="gmail icon" />
                    </span>
                </a>
                <a href="https://github.com/jayyzzeezzy" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={github} alt="github icon" />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/jzfromkp/" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={linkedin} alt="linkedin icon" />
                    </span>
                </a>
                <a href="https://instagram.com/jzfromkp" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={instagram} alt="instagram icon" />
                    </span>
                </a>
                <a href="https://tiktok.com/@jayyzzeezy" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={tiktok} alt="tiktok icon" />
                    </span>
                </a>
                <a href="https://www.reddit.com/u/jayyzzeezy/s/XDItpO79en" target="_blank" className="social-link">
                    <span className="icon">
                        <img src={reddit} alt="reddit icon" />
                    </span>
                </a>
            </div>
            <div className="copyright">
                <p>Handcrafted by me <span>©</span> {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Socials;