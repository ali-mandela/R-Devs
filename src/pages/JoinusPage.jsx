import {useEffect, useRef, useState} from 'react';
import banner from '../assets/jpage.svg';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import LayoutContainer from '../layouts/LayoutContainer';

const JoinusPage = () => {
    window.document.title = "Career page | R-dev"

    const [formData,
        setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        position: '',
        jobType: '',
        message: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h5uw0uo', 'template_hnyxt1l', form.current, {publicKey: 'UqelMsTGqvdtWLT8T'})
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                toast.success('Your mail has been sent successfully. We will get back to you soon.');
                setFormData({
                    name: '',
                    contact: '',
                    email: '',
                    position: '',
                    jobType: '',
                    message: ''
                });
            }, (error) => {
                console.error('Failed to send email:', error);
                toast.error('An error occurred, please try again.');
            });
    };

    return (
        <LayoutContainer>
            <div className='w-full'>
                <div className='bg-slate-300'>
                    <h1 className='text-center'>career</h1>
                    <p className="text-center"> Looking to launch your tech career? R-Devs can be your
                        springboard! We offer a dynamic environment where you can develop your skills in
                        crafting custom websites and apps. Whether you're a seasoned developer or just
                        starting out, we provide the tools and support to propel your success in the
                        ever-evolving tech landscape.</p>

                    <div>
                    <h2>Contact us</h2>
                        <form className='' ref={form} onSubmit={sendEmail}>
                           <div className='form grid grid-cols-3 gap-10'>
                           <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required/>
                            </div>
                            <div>
                                <label>Contact</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required/>
                            </div>
                            <div>
                                <label>Role</label>
                                <select
                                    name="Role"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required>
                                    <option disabled value="">Role Available</option>
                                    <option value="Content Writer">Content Writer</option>
                                    <option value="Web Developer">Web Developer</option>
                                    <option value="Mobile Developer">Mobile Developer</option>
                                </select>
                            </div> 
                            
                           </div><div className=''>
                                <label>Cover Letter</label>
                                <br/>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
}

export default JoinusPage;
