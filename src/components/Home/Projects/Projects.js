import React from 'react';
import paperbackStoreImg from '../../../images/book-shop.png';
import restaurant from '../../../images/food-restaurant.png';
import pickNDropImg from '../../../images/pickndrop.jpg';
import repairMasterImg from '../../../images/repair-master.png';
import Project from '../Project/Project';

const Projects = () => {
    const projectsData = [
        {
            title: 'Repair Master',
            description: 'This is a electronic devices repairing services website. Different dashboard for admin and user. Admin can control user order dynamically. Admin can add, modify and remove any service. User must have login for getting any service. User can review and see review in home page.',
            technologies: 'MERN Stack, Stripe Payment Gateway, Firebase Authentication',
            live: 'https://repair-master-201e6.web.app/',
            code: 'https://github.com/abdullahalmamun17/repair-master',
            img: repairMasterImg
        },
        {
            title: 'Paperback Store',
            description: `Paperback Store is a book e-commerce website.
            Login user can order placed and see all order list.
            Have an admin dashboard. Admin can Add, Modify & Delete product.
            Website have a search option.`,
            technologies: 'MERN Stack, Firebase Authentication',
            live: 'https://book-shop-a75e5.web.app/',
            code: 'https://github.com/abdullahalmamun17/paperback-store',
            img: paperbackStoreImg
        },
        {
            title: 'Pick n Drop',
            description: `This is a Ride Sharing Service. Must have login for getting any ride sharing service.
            Multiple Vehicles are available.
            Find Destination in Maps
            Have a google maps for confirm your picking & destination place.`,
            technologies: 'React, Firebase Authentication, Firebase Hosting.',
            live: 'https://pickndrop-5beb1.web.app/',
            code: 'https://github.com/abdullahalmamun17/pick-n-drop',
            img: pickNDropImg
        },
        {
            title: 'Food Cafe',
            description: 'This is a food restaurant website. User can search any item. User can order seleted food.',
            technologies: 'HTML, CSS, Javascript',
            live: 'https://abdullahalmamun17.github.io/food-restaurant/',
            code: 'https://github.com/abdullahalmamun17/food-restaurant',
            img: restaurant
        },
    ]
    return (
        <section className="bg-light py-2">
            <div className="container">
                <h1 className="my-5 text-center">My Projects</h1>
                <div className="row">
                    {
                        projectsData.map(project => <Project project={project}></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;