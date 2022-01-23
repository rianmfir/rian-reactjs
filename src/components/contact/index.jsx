import React from "react";
import '../index.css'

const Contact = () => {
    return (
        <section class="bg-Primary text-white py-5" id="contact">
            <div className="container">
                <div className="row">
                    <div>
                        <h3 className="text-center">Contact Me</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <label for="message" claclassNamess="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="6" placeholder="Your Message ..."></textarea>
                                </div>
                                <button type="submit" className="btn-contact">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact