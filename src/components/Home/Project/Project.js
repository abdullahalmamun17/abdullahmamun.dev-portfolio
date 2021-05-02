import React, { useState } from 'react';

const Project = ({ project }) => {
    const [hover, setHover] = useState(false)
    const cardTextStyle = {
        textAlign: 'justify',
        transition: 'all 5s',
        display: hover ? 'block' : 'none'
    }

    return (
        <div className='col-md-6 mb-4' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <div class="card p-2 project-card">
                <img src={project.img} class="card-img-top rounded img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title" style={{ color: 'tomato' }}>{project.title}</h5>
                    <p className="card-text" style={cardTextStyle}><h6>Project overview </h6>{project.description}</p>
                    <h6 style={cardTextStyle}>Technologies Used: {project.technologies}</h6>
                    <div className="d-flex justify-content-end">
                        <a href={project.code} class="btn btn-success me-3">Code</a>
                        <a href={project.live} class="btn btn-secondary">Preview</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;