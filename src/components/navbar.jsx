import myInfo from '../db/myinfo';

function Navbar() {
    return (
        <nav>
            <a href="https://jameszhou.netlify.app/">
                <button className="homebtn">JZhou</button>
            </a>
            <div className="navbtn">
                <a href={myInfo.resume} target="_blank">
                    <button className="resumebtn">Resume</button>
                </a>
                <a href={myInfo.qrCode} target="_blank">
                    <button className="qrbtn">QR Code</button>
                </a>
            </div>
            
        </nav>
    )
};

export default Navbar;