function Hero() {
    return (
        <div>
            <div className="profile-container">
                <img src="/pfp.png" alt="profile picture" className="profile-picture"/>
            </div>
            <div className="intro">
                <h1>Hi, I'm James.</h1>
                <div className="intro-line">
                <h3>
                    I am a self-started software engineer with a passion for
                </h3>
                <h3>making scalable, efficient, and elegant solutions.</h3>
                </div>
                <p>
                    <span className="emoji">&#128640;</span> Coding the Future, One Line at a Time. 
                </p>
            </div>
        </div>
    )
};

export default Hero;