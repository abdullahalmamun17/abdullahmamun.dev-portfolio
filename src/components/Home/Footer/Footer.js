import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="mt-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#282c34', height: '100px' }}>
            <div className="text-center">
                <div className="my-2" style={{ fontSize: '30px' }}>
                    <a href="https://www.linkedin.com/in/khondakar-mamun/"><FaLinkedin className="me-2 text-primary" /></a>
                    <a href="https://github.com/abdullahalmamun17"><FaGithubSquare className="me-2 text-white" /></a>
                    <a href="https://www.facebook.com/abdullah.al.mamun.17/"><FaFacebookSquare className="me-2 text-primary" /></a>
                    <FaTwitterSquare className="me-2 text-primary" />
                    <FaInstagramSquare className="me-2 text-danger" />
                </div>
                <div className="text-white">
                    <h6>copyright {new Date().getFullYear()} &copy; abdullah al mamun | all rights reserved. </h6>
                </div>
            </div>
        </section>
    );
};

export default Footer;