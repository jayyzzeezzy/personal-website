function Socials() {
    return (
        <footer className="socials">
            <h1 className="socials-heading">Socials</h1>
            <div className="social-media">
                <a href="mailto:jam9es@gmail.com" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/gmail.svg" alt="gmail icon" />
                    </span>
                </a>
                <a href="https://github.com/jayyzzeezzy" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/github.svg" alt="github icon" />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/jzfromkp/" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/linkedin.svg" alt="linkedin icon" />
                    </span>
                </a>
                <a href="https://instagram.com/jzfromkp" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/instagram.svg" alt="instagram icon" />
                    </span>
                </a>
                <a href="https://tiktok.com/@jayyzzeezy" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/tiktok.svg" alt="tiktok icon" />
                    </span>
                </a>
                <a href="https://www.reddit.com/u/jayyzzeezy/s/XDItpO79en" target="_blank" className="social-link">
                    <span className="icon">
                        <img src="src/assets/images/socials/reddit.svg" alt="reddit icon" />
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