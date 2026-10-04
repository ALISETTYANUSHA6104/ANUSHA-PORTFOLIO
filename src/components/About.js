import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCode, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaBrain />, number: '3+', label: 'Work Experience & Internships' },
    { icon: <FaCode />, number: '5+', label: 'Projects' },
    { icon: <FaAward />, number: '3+', label: 'Certifications' },
    { icon: <FaGraduationCap />, number: '70.5%', label: 'B.Tech CGPA' },
  ];

  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Career Objective</h3>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Results-driven AI/ML professional with hands-on work experience and internships in Python, 
            Machine Learning, Deep Learning, and Generative AI. Proven expertise in data annotation, 
            video QC, ML model training, and end-to-end ML pipeline development.
          </motion.p>
          <p>
            Strong foundation in Data Science, NLP, and Fraud Detection. Seeking an AI/ML Engineer 
            role to deliver innovative, data-driven solutions.
          </p>

          <div className="education-highlight">
            <h4>🎓 Education</h4>
            <div className="education-item">
              <h5>B.Tech — Artificial Intelligence & Machine Learning</h5>
              <p>KITS College | 2022–2026 | 70.5%</p>
              <p className="coursework">
                <strong>Coursework:</strong> Machine Learning, Deep Learning, Data Science, NLP, Python Programming
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
