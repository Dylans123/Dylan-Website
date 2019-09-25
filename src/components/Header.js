import React from 'react';
import dylan from '../assets/dylan-image.jpg';
import linkedin from '../assets/linkedin-logo.svg';
import email from '../assets/envelope.svg';
import resume from '../assets/file.svg';
import github from '../assets/github-logo.svg';
import pdf from '../assets/resume.pdf';

class Header extends React.Component {
    render() {
        return (
            <div style={{ 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center'
                }}>
                <div>
                    <img src={dylan} className="mainImg" />
                </div>
                <div className="mt-4" style={{fontSize: '60px', width: '95%', fontWeight: 'bold', textAlign: 'center', color: '#BDABE5'}}>
                    Hey, I'm Dylan Skelly.
                </div>
                <div style={{fontSize: '50px', width: '95%', fontWeight: 'bold', textAlign: 'center', color: '#BDABE5'}}>
                    Glad you're here!
                </div>
                <div className="row text-center my-4">
                    <div className="col-sm-12 col-md">
                        <div className="btn">
                            <a href={pdf} target="_blank" download="Dylan Skelly Resume.pdf">
                                <img className="btn-img" title="resume" alt-text="resume" src={resume}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md">
                        <div className="btn">
                            <a href="mailto: dylanskelly@knights.ucf.edu">
                                <img className="btn-img" title="email" alt-text="email" src={email}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md">
                        <div className="btn">
                            <a href="https://github.com/Dylans123">
                                <img className="btn-img" title="github" alt-text="github" src={github}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md" onClick="www.linkedin.com/in/dylan-skelly">
                        <div className="btn">
                            <a href="https://www.linkedin.com/in/dylan-skelly">
                                <img className="btn-img" title="linkedin" alt-text="linkedin" src={linkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;