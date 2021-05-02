import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa';
import resume from '../../../files/updated-resume-abdullah-al-mamun.pdf';
import profileImg from '../../../images/profile-img.JPG';

const About = () => {
    return (
        <section className="container py-5">
            <h1 className="text-center">About Me</h1>
            <p className="text-center w-75 mx-auto mb-5">Hi! I am Abdullah Al Mamun, a web developer focused on crafting great web experiences. Coding have been my passion since the days I started learning Programming. I enjoy creating beautifully designed, intuitive and functional websites.</p>
            <div className="row bg-white mx-2 px-1 py-2 about-box-shadow">
                <div className="col-md-4 text-center my-3">
                    <img src={profileImg} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-md-4 my-3">
                    <h4 className="mb-4" style={{ color: 'tomato' }}>Information</h4>
                    <h6>Name: Md Abdullah Al Mamun</h6>
                    <h6>Phone: 01816-823190</h6>
                    <h6>E-Mail: khondakarmamunfci@gmail.com</h6>
                    <div className="my-4" style={{ fontSize: '30px' }}>
                        <a href="https://www.linkedin.com/in/khondakar-mamun/"><FaLinkedin className="me-2 text-primary" /></a>
                        <a href="https://github.com/abdullahalmamun17"><FaGithubSquare className="me-2 text-dark" /></a>
                        <a href="https://www.facebook.com/abdullah.al.mamun.17/"><FaFacebookSquare className="me-2 text-primary" /></a>
                        <FaTwitterSquare className="me-2 text-primary" />
                        <FaInstagramSquare className="me-2 text-danger" />
                        <FaMedium />
                    </div>
                    <a href={resume} download className="btn btn-success btn-sm">Download Resume</a>
                </div>
                <div className="col-md-4 my-3">
                    <h4 className="mb-4" style={{ color: 'tomato' }}>Programming Skills</h4>
                    <h5 className="border bg-light text-center w-50 mb-3 p-1">HTML5</h5>
                    <h5 className="border bg-light text-center w-50 mb-3 p-1">CSS3</h5>
                    <h5 className="border bg-light text-center w-50 mb-3 p-1">Javascript</h5>
                    <h5 className="border bg-light text-center w-50 mb-3 p-1">React</h5>
                    <h5 className="border bg-light text-center w-50 mb-3 p-1">Node.js</h5>
                </div>
            </div>
        </section>
    );
};

export default About;