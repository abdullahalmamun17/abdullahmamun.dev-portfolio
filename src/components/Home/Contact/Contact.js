import emailjs from 'emailjs-com';
import React from 'react';
import { ImLocation2, ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';



const Contact = () => {
    const sendMessage = (e) => {
        e.preventDefault()


        emailjs.sendForm('service_p6dtcys', 'template_xxuz5ds', e.target, 'user_zQqzh6dG4p5mn7qtrWg4C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="bg-light py-5" id="contact">
            <div className="container">
                <h1 className="mb-5 text-center">Contact</h1>
                <div className="row d-flex justify-content-around mx-2">
                    <div className="col-md-7 bg-white p-4 about-box-shadow mb-4">
                        <h2 style={{ color: 'tomato' }}>Drop us a line</h2>
                        <h6 className="mb-3">We are here to answer any question you may have</h6>
                        <form onSubmit={sendMessage}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" required class="form-control" id="name" name="name" placeholder="Enter your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" required class="form-control" id="email" name="email" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" required id="message" name="message" rows="3"></textarea>
                            </div>
                            <button className="btn btn-success">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div className="col-md-4 about-box-shadow p-5 bg-white mb-4">
                        <div className="text-center mb-5">
                            <ImLocation2 className="mb-3" style={{ fontSize: '50px' }} />
                            <h6>Mohammadpur, Dhaka 1207</h6>
                        </div>
                        <div className="text-center mb-5">
                            <MdEmail className="mb-3" style={{ fontSize: '50px' }} />
                            <h6>khondakarmamunfci@gmail.com</h6>
                        </div>
                        <div className="text-center">
                            <ImPhone className="mb-3" style={{ fontSize: '50px' }} />
                            <h6>01816-823190</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;