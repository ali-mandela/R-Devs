import { useRef, useState } from 'react';
import style from '../styles/join.module.css';
import banner from '../assets/jpage.svg';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const JoinusPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    position: '',
    jobType: '',
    message: ''
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
        'template_hnyxt1l',  
        form.current,
        {
          publicKey: 'UqelMsTGqvdtWLT8T',
        }     
      )
      .then(
        (result) => {
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
        },
        (error) => {
          console.error('Failed to send email:', error);
          toast.error('An error occurred, please try again.');
        }
      );
  };

  return (
    <div className={style.joinContainer}>
      <div className={style.contactContainer}>
        <h2>Join us</h2>

        <div className={style.contactContent}>
          <div>
            <img src={banner} alt='contact banner'/>
          </div>
          <div>
            <form ref={form}  onSubmit={sendEmail}>
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
                <label>Contact</label>
                <input 
                  type="tel" 
                  name="contact" 
                  value={formData.contact} 
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
                <label>Position</label>
                <select 
                  name="position" 
                  value={formData.position} 
                  onChange={handleChange} 
                  required 
                >
                  <option disabled value="">Select Position</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option> 
                </select>
              </div>
              <div>
                <label>Job Type</label>
                <input 
                  type="text" 
                  name="jobType" 
                  placeholder='Full-time, intern, contract'
                  value={formData.jobType} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div>
                <label>Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default JoinusPage;
