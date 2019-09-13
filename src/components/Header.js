import React from 'react';
import dylan from '../assets/dylan-image.jpg';
import linkedin from '../assets/linkedin-logo.svg';
import email from '../assets/envelope.svg';
import resume from '../assets/file.svg';

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
                <div className="mt-4" style={{fontSize: '50px', fontWeight: 'bold', textAlign: 'center', color: '#BDABE5'}}>
                    Hey, I'm Dylan Skelly.
                </div>
                <div style={{fontSize: '40px', textAlign: 'center', color: '#BDABE5'}}>
                    Glad you're here!
                </div>
                <div className="row text-center mt-4">
                    <div className="col">
                        <div className="btn">
                            <a href="">
                                <img src={resume} style={{width: '50px', height: '50px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="btn">
                            <a href="mailto: dylanskelly@knights.ucf.edu">
                                <img src={email} style={{width: '50px', height: '50px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col" onClick="www.linkedin.com/in/dylan-skelly">
                        <div className="btn">
                            <a href="https://www.linkedin.com/in/dylan-skelly">
                                <img src={linkedin} style={{width: '50px', height: '50px'}}/>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Header;