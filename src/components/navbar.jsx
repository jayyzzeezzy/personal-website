function Navbar() {
    return (
        <nav>
            <a href="/">
                <button className="homebtn">JZhou</button>
            </a>
            <div className="navbtn">
                <a href="https://drive.google.com/file/d/1OgxCoq5m945q1StFRq1NP5mEGNymfCf1/view?usp=sharing" target="_blank">
                    <button className="resumebtn">Resume</button>
                </a>
                <a href="#" target="_blank">
                    <button className="qrbtn">QR Code</button>
                </a>
            </div>
            
        </nav>
    )
};

export default Navbar;