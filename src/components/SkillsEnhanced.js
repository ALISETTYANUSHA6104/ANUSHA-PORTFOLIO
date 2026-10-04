import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaCode, FaBrain, FaDatabase, FaChartBar, FaLightbulb } from 'react-icons/fa';
import './SkillsEnhanced.css';

const SkillsEnhanced = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 85 },
      ],
      color: '#ffffff',
    },
    {
      title: 'AI & ML',
      icon: <FaBrain />,
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Generative AI', level: 80 },
        { name: 'NLP', level: 82 },
        { name: 'Fraud Detection', level: 85 },
      ],
      color: '#ffffff',
    },
    {
      title: 'Frameworks',
      icon: <FaPython />,
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 82 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 88 },
      ],
      color: '#ffffff',
    },
    {
      title: 'Data Science',
      icon: <FaChartBar />,
      skills: [
        { name: 'Data Analysis', level: 90 },
        { name: 'Data Preprocessing', level: 92 },
        { name: 'Feature Engineering', level: 85 },
        { name: 'EDA', level: 88 },
        { name: 'Statistical Methods', level: 80 },
      ],
      color: '#ffffff',
    },
    {
      title: 'Tools & Tech',
      icon: <FaDatabase />,
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Model Training', level: 88 },
      ],
      color: '#ffffff',
    },
    {
      title: 'Soft Skills',
      icon: <FaLightbulb />,
      skills: [
        { name: 'Problem-Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Adaptability', level: 92 },
      ],
      color: '#ffffff',
    },
  ];

  return (
    <section id="skills" className="skills-enhanced">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid-enhanced">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category-enhanced"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              boxShadow: '0 25px 60px rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="category-header-enhanced">
              <motion.div
                className="category-icon-enhanced"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-list-enhanced">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-item-enhanced"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (index * 0.1) + (i * 0.05) + 0.3,
                        duration: 1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        className="skill-glow"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsEnhanced;
