import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'alisettyanusha6104@gmail.com',
      link: 'mailto:alisettyanusha6104@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 7842404102',
      link: 'tel:+917842404102',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/alisetty-anusha',
      link: 'https://linkedin.com/in/alisetty-anusha',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/ALISETTYANUSHA',
      link: 'https://github.com/ALISETTYANUSHA',
    },
  ];

  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Connect!</h3>
          <p>
            I'm currently seeking opportunities in AI/ML Engineering and Software Development. 
            Feel free to reach out if you'd like to discuss potential collaborations, 
            job opportunities, or just want to connect!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2026 Alisetty Anusha. All rights reserved.</p>
        <p>Built with React & Framer Motion</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
