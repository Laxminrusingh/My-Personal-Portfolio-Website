import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Contact from './Contact';

const Experience = () => {
    const experienceData = [
        {
            type: 'internship',
            title: 'Web Application Development Intern',
            organization: 'IT Centre/ECoR/RBS, East Coast Railway, Bhubaneswar',
            duration: 'May 26, 2025 – July 4, 2025',
            location: 'Bhubaneswar',
            achievements: [
                'Completed Summer Internship at IT Centre, Government of India (Ministry of Railways)',
                'Specialized in Web Application Development using React.js, Node.js, Express.js and MongoDB',
                'Developed full-stack applications and built reusable UI components',
                'Worked with senior IT engineers to deliver scalable internal tools',
                'Performance and conduct during training was good'
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            type: 'internship',
            title: 'Data Science & Artificial Intelligence Intern',
            organization: 'YBI Foundation',
            duration: '4 Weeks · Completed on Jun 01, 2024',
            location: 'Online',
            achievements: [
                'Completed an intensive online internship focused on Data Science and Artificial Intelligence.',
                'Worked on end-to-end data pipelines including data cleaning, feature engineering, and model building.',
                'Implemented supervised ML algorithms for predictive analytics and evaluated model performance.',
                'Gained hands-on exposure to real-world datasets and documented insights in structured reports.'
            ],
            technologies: [
                'Python',
                'Pandas',
                'NumPy',
                'Scikit-learn',
                'Data Visualization',
                'Machine Learning',
                'SQL'
            ]
        },
        {
            type: 'course',
            title: 'Full Stack Web Development - Course',
            organization: 'Apna College (Delta Program)',
            duration: '2024 - 2025',
            location: 'Online',
            description: 'Completed a comprehensive program covering both frontend and backend technologies, including real-world projects and deployment.',
            achievements: [
                'Built multiple responsive web applications using HTML, CSS, and JavaScript',
                'Developed dynamic frontends with React.js and optimized state management.',
               
                'Implemented database operations with MongoDB and performed CRUD functionalities.',
                'Deployed full-stack projects to live servers for public access.'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git & GitHub']
        },
        {
            type: 'course',
            title: 'The Ultimate Job Ready Data Science Course',
            organization: 'CodeWithHarry',
            duration: 'Completed on October 8, 2025',
            location: 'Online',
            description: 'Intensive, project-focused course to build job-ready skills in data science and analytics.',
            achievements: [
                'Completed a structured curriculum covering statistics, data analysis, and applied machine learning.',
                'Worked with real-world datasets to perform exploratory data analysis and visualization.',
                'Implemented end-to-end ML workflows from preprocessing to model evaluation.',
                'Strengthened problem-solving skills for data-driven decision making.'
            ],
            technologies: [
                'Python',
                'Pandas',
                'NumPy',
                'Matplotlib',
                'Seaborn',
                'Scikit-learn',
                'Data Science'
            ]
        }
    ];

    return (
        <>
        <section id="experience" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Experience
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }} />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '15px',
                                border: '1px solid var(--glass-border)',
                                maxWidth: '900px',
                                margin: '0 auto',
                                width: '100%',
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'flex-start'
                            }}
                        >
                            <div style={{
                                background: exp.type === 'internship' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                padding: '1rem',
                                borderRadius: '10px',
                                color: exp.type === 'internship' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                                fontSize: '1.5rem'
                            }}>
                                {exp.type === 'internship' ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{exp.title}</h3>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{exp.duration}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
                                    <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                                        {exp.organization}
                                    </h4>
                                    {exp.location && (
                                        <span style={{
                                            padding: '4px 12px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '15px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            {exp.location}
                                        </span>
                                    )}
                                </div>
                                {exp.description && (
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                        {exp.description}
                                    </p>
                                )}
                                {exp.achievements && exp.achievements.length > 0 && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.8rem', fontSize: '1rem' }}>
                                            Key Achievements:
                                        </h4>
                                        <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} style={{ 
                                                    marginBottom: '0.5rem',
                                                    paddingLeft: '1.5rem',
                                                    position: 'relative'
                                                }}>
                                                    <span style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        color: '#22c55e',
                                                        fontSize: '1rem'
                                                    }}>✓</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div>
                                        <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.8rem', fontSize: '1rem' }}>
                                            Technologies Used:
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {exp.technologies.map((tech, idx) => (
                                                <span key={idx} style={{
                                                    padding: '6px 14px',
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: 'var(--accent-secondary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    fontWeight: '500'
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        <Contact />
    </>
    );
};

export default Experience;
