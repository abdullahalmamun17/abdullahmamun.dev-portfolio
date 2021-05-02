import React from 'react';
import Typewriter from "typewriter-effect";
import resume from '../../../files/updated-resume-abdullah-al-mamun.pdf';
import profileImg from '../../../images/profile-img.JPG';

const HeaderContent = () => {
    return (
        <div className="text-white d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
            <div className="text-center">
                <img src={profileImg} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                <h1>Md. Abdullah Al Mamun</h1>
                <div className="d-flex align-items-center justify-content-center">
                    <h5>I'm Passionate</h5>
                    <h3 className="ms-3" style={{ color: 'tomato' }}>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Frontend Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                </div>
                <a href={resume} className="btn btn-success btn-lg mt-4" download>DOWNLOAD RESUME</a>
            </div>
        </div>
    );
};

export default HeaderContent;