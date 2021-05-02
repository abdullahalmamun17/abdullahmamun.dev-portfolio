import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler bg-primary ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white me-5" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white me-5" href="#about">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;