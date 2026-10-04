import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      role: 'AI Trainee Data Engineer',
      company: 'DreamVu',
      duration: '3 Months',
      location: 'Remote',
      description: [
        'Performed manual hand labeling and annotation of video data for a Google project, identifying hand presence and labeling relevant video frames according to project guidelines.',
        'Trained and optimized machine learning models on annotated datasets, improving model accuracy and performance for hand detection tasks.',
        'Conducted quality control (QC) checks to verify annotation accuracy, consistency, and compliance with established labeling standards.',
        'Reviewed annotated videos, identified labeling errors, and approved or rejected videos based on quality requirements, ensuring high-quality training data for ML models.',
        'Collaborated with the data engineering team to preprocess and structure large-scale video datasets for machine learning pipelines.',
      ],
      tech: ['Python', 'Machine Learning', 'Data Annotation', 'Video QC', 'Data Preprocessing'],
    },
  ];

  const internships = [
    {
      role: 'AI & ML Intern (Long-Term)',
      company: 'Vault Sphere AI Technologies Pvt. Ltd.',
      duration: 'Long-Term Internship',
      location: 'Remote',
      description: [
        'Designed and managed end-to-end ML pipelines covering data ingestion, feature engineering, model training, hyperparameter tuning, evaluation, and deployment.',
        'Collaborated cross-functionally to build and deploy scalable AI/ML solutions, monitoring model performance in production environments.',
      ],
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'ML Pipeline'],
    },
    {
      role: 'Data Science Intern (Short-Term)',
      company: 'Reshapp Software Solutions Pvt. Ltd.',
      duration: 'Short-Term Internship',
      location: 'Remote',
      description: [
        'Performed data analysis and preprocessing on real-world datasets using Python and Pandas; applied EDA and statistical methods to extract actionable insights.',
        'Cleaned, transformed, and engineered features from raw datasets to build model-ready data pipelines, improving downstream model accuracy.',
      ],
      tech: ['Python', 'Pandas', 'Statistical Analysis', 'EDA'],
    },
  ];

  return (
    <section id="experience" className="experience">
      {/* Professional Work Experience Section */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Work Experience
      </motion.h2>

      <div className="work-experience-container">
        {workExperience.map((exp, index) => (
          <motion.div
            key={index}
            className="work-experience-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: '0 25px 60px rgba(255,255,255,0.2)' }}
          >
            <div className="work-header">
              <div className="work-icon">
                <FaBriefcase />
              </div>
              <div className="work-title-section">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
            </div>

            <div className="work-meta">
              <span>
                <FaCalendar /> {exp.duration}
              </span>
              <span>
                <FaMapMarkerAlt /> {exp.location}
              </span>
            </div>

            <div className="work-description">
              {exp.description.map((point, i) => (
                <motion.div
                  key={i}
                  className="work-point"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="work-bullet">▸</span>
                  <p>{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="work-tech-stack">
              {exp.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="work-tech-tag"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Internship Experience Section */}
      <motion.h2
        className="section-title section-title-secondary"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '80px' }}
      >
        Internship Experience
      </motion.h2>

      <div className="timeline">
        {internships.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="experience-card"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(255,255,255,0.15)' }}
            >
              <div className="exp-header">
                <FaBriefcase className="exp-icon" />
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
              </div>

              <div className="exp-meta">
                <span>
                  <FaCalendar /> {exp.duration}
                </span>
                <span>
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>

              <ul className="exp-description">
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="tech-stack">
                {exp.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
