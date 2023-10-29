import React from 'react';

function ContactSection() {
    return (
        <section className="ftco-section">
            <div className="w-100" style={{ marginTop: '150px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-6 order-md-last d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Get in touch</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <form
                                            method="POST"
                                            id="contactForm"
                                            name="contactForm"
                                            className="contactForm"
                                            noValidate="novalidate"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">
                                                            Full Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">
                                                            Subject
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            id="subject"
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label">Message</label>
                                                        <textarea
                                                            name="message"
                                                            className="form-control"
                                                            id="message"
                                                            cols="30"
                                                            rows="4"
                                                            placeholder="Message"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit" value="Send Message" className="btn">
                                                            Send
                                                        </button>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 d-flex align-items-stretch">
                                    <div className="info-wrap bg-success w-100 p-md-5 p-4">
                                        <h3>Let's get in touch</h3>
                                        <p className="mb-4">
                                            We're open for any suggestion or just to have a chat
                                        </p>
                                        <div className="dbox w-100 d-flex align-items-start mb-4">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Located:</span> Nairobi, Kenya
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-start mb-4">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Phone:</span>{' '}
                                                    <a href="tel:+254 712345678">+ 254 7436 87737</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-start mb-4">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Email:</span>{' '}
                                                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Website</span>{' '}
                                                    <a href="#">agritect.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;

