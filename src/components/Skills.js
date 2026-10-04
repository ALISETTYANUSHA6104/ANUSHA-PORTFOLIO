import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaCode, FaBrain, FaDatabase, FaChartBar, FaLightbulb } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
      color: '#ffffff',
    },
    {
      title: 'AI & ML',
      icon: <FaBrain />,
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'Fraud Detection'],
      color: '#ffffff',
    },
    {
      title: 'Frameworks',
      icon: <FaPython />,
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'],
      color: '#ffffff',
    },
    {
      title: 'Data Science',
      icon: <FaChartBar />,
      skills: ['Data Analysis', 'Data Preprocessing', 'Feature Engineering', 'EDA', 'Statistical Methods'],
      color: '#ffffff',
    },
    {
      title: 'Tools & Tech',
      icon: <FaDatabase />,
      skills: ['Jupyter Notebook', 'Matplotlib', 'Model Training', 'Model Evaluation'],
      color: '#ffffff',
    },
    {
      title: 'Soft Skills',
      icon: <FaLightbulb />,
      skills: ['Analytical Thinking', 'Problem-Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
      color: '#ffffff',
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="category-header">
              <motion.div
                className="category-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <span className="skill-bullet">▸</span>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
