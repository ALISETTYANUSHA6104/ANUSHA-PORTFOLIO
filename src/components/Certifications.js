import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaStar } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const achievements = [
    {
      icon: <FaCertificate />,
      title: 'Long-Term AI & ML Internship',
      organization: 'Vault Sphere AI Technologies Pvt. Ltd.',
      description: 'Completed with hands-on project deployment experience in end-to-end ML pipeline development.',
    },
    {
      icon: <FaCertificate />,
      title: 'Short-Term Data Science Internship',
      organization: 'Reshapp Software Solutions Pvt. Ltd.',
      description: 'Successfully completed data science internship focusing on real-world data analysis and preprocessing.',
    },
    {
      icon: <FaTrophy />,
      title: 'Full Stack Python Course',
      organization: 'Naresh IT Technologies',
      description: 'Comprehensive training in Python programming and full-stack development concepts.',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="achievement-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {achievement.icon}
            </motion.div>
            
            <h3>{achievement.title}</h3>
            <h4>{achievement.organization}</h4>
            <p>{achievement.description}</p>

            <div className="achievement-badge">
              <FaStar />
              <span>Certified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
