import  { useState, useRef } from 'react';
import style from '../styles/join.module.css';
import banner from '../assets/cpage.svg';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
// import { ContactUs } from './ContactUs';

const ContactusPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    projectDescription: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h5uw0uo',   
        'template_bi3kvls',  
        form.current,
        {
          publicKey: 'UqelMsTGqvdtWLT8T',
        }     
      )
      .then(
        (result) => {
          console.log(result);
          toast.success('Your details have been submitted. Our team will contact you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            companyName: '',
            projectType: '',
            projectDescription: ''
          });
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          toast.error('An error occurred, please try again.');
        }
      );
  };

  return (
    <div className={style.contactContainer}>
      <h2>Connect With Us for Your Business</h2>

      <div className={style.contactContent}>
        <div>
          <img src={banner} alt='contact banner'/>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label>Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label>Company Name</label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Project Type</label>
              <input 
                type="text" 
                name="projectType" 
                value={formData.projectType} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Project Description</label>
              <textarea 
                name="projectDescription" 
                value={formData.projectDescription} 
                onChange={handleChange} 
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* <ContactUs /> */}
    </div>
  );
}

export default ContactusPage;
