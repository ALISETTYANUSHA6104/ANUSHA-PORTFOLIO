import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Fraud Detection in Online Retail Using Generative AI',
      description: 'Built an AI-powered real-time fraud detection system using Machine Learning and Generative AI, achieving high accuracy in identifying suspicious transactions.',
      features: [
        'Applied anomaly detection algorithms and Generative AI techniques to analyze transaction patterns',
        'Reduced false positives in fraud identification significantly',
        'Designed intelligent risk assessment models incorporating ethical AI principles',
        'Ensured fairness, transparency, and data privacy in AI deployment',
      ],
      tech: ['Python', 'Machine Learning', 'Generative AI', 'TensorFlow', 'Anomaly Detection'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -15 }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="tech-badge"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
