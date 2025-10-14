import React, { useState } from 'react';
import './Portfolio.css'; // Assume the CSS is defined as needed, or use inline styles as fallback

const socialLinks = [
  { icon: 'fab fa-github', url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername', label: 'Twitter' },
];

const skills = [
  { name: 'JavaScript', level: 90, icon: 'fab fa-js-square' },
  { name: 'React', level: 85, icon: 'fab fa-react' },
  { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
  { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
  { name: 'Python', level: 80, icon: 'fab fa-python' },
  { name: 'Teamwork', level: 85, icon: 'fas fa-users' },
  { name: 'Communication', level: 80, icon: 'fas fa-comments' },
];

const certificates = [
  { title: 'Frontend Developer Nanodegree', org: 'Udacity', date: '2023' },
  { title: 'JavaScript Algorithms and Data Structures', org: 'freeCodeCamp', date: '2022' },
  { title: 'Responsive Web Design', org: 'Coursera', date: '2021' },
];

const projects = [
  {
    name: 'Personal Blog Platform',
    description: 'A modern blog platform built with MERN stack, supporting Markdown, authentication, and responsive layouts.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    demo: 'https://yourblogdemo.com',
    github: 'https://github.com/yourusername/blog-platform',
    image: 'https://via.placeholder.com/400x200?text=Blog+Platform',
  },
  {
    name: 'Portfolio Website',
    description: 'A responsive portfolio site showcasing projects and contact information, built with React and styled-components.',
    technologies: ['React', 'Styled-Components'],
    demo: 'https://yourportfolio.com',
    github: 'https://github.com/yourusername/portfolio',
    image: 'https://via.placeholder.com/400x200?text=Portfolio+Site',
  },
  {
    name: 'Task Tracker App',
    description: 'A sleek productivity app built with vanilla JS and local storage, enabling users to track and organize tasks.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://yourtasktracker.com',
    github: 'https://github.com/yourusername/task-tracker',
    image: 'https://via.placeholder.com/400x200?text=Task+Tracker',
  },
];

const testimonials = [
  {
    quote:
      "An amazing developer! Their attention to detail and passion for learning are top-notch. Highly recommended.",
    author: "Jane Doe, Senior Engineer",
  },
  {
    quote:
      "Brilliant collaborator and always delivers high-quality work on time.",
    author: "John Smith, Project Manager",
  },
];

function ProgressBar({ level }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${level}%` }}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}

function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Normally submit to a backend or email service
    setFormStatus('Thank you! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero" id="home" tabIndex={-1}>
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2>Frontend Developer</h2>
          <p>Building beautiful, accessible web experiences.</p>
          <div className="hero-socials">
            {socialLinks.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation (could be sticky on top) */}
      <nav className="main-nav" aria-label="Main Navigation">
        <ul>
          <li><a href="#about" tabIndex={0}>About</a></li>
          <li><a href="#skills" tabIndex={0}>Skills</a></li>
          <li><a href="#certificates" tabIndex={0}>Certificates</a></li>
          <li><a href="#projects" tabIndex={0}>Projects</a></li>
          <li><a href="#testimonials" tabIndex={0}>Testimonials</a></li>
          <li><a href="#contact" tabIndex={0}>Contact</a></li>
        </ul>
      </nav>

      {/* About Me */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img
            src="https://via.placeholder.com/180x180?text=Your+Photo"
            alt="Your portrait"
            className="about-photo"
          />
          <div>
            <p>
              Hello! I'm a passionate frontend developer who loves creating accessible, clean, and dynamic user interfaces. <br />
              With a keen eye for design and a drive for continuous learning, I'm eager to build products that make a difference. <br />
              <strong>Interests:</strong> UI/UX, open source, learning new tech, and collaborating with diverse teams. <br />
              <strong>Career Goal:</strong> To become a leading expert in accessible and performant web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx} aria-label={skill.name}>
              <i className={skill.icon + ' skill-icon'} title={skill.name} aria-hidden="true"></i>
              <span className="skill-name">{skill.name}</span>
              <ProgressBar level={skill.level} />
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="certificates" id="certificates">
        <h2>Certificates</h2>
        <ul className="cert-list">
          {certificates.map((cert, idx) => (
            <li key={idx} className="cert-item">
              <span className="cert-title">{cert.title}</span>{' '}
              <span className="cert-org">({cert.org} &bull; {cert.date})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-gallery">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img src={project.image} alt={`${project.name} screenshot`} className="project-img" />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-chip" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo of ${project.name}`}>Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repo of ${project.name}`}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="testimonial">
              <p>"{t.quote}"</p>
              <footer>&mdash; {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact Me */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleFormSubmit} autoComplete="off">
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleFormChange}
              autoComplete="email"
              required
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleFormChange}
              required
              rows={4}
            />
          </label>
          <button type="submit" className="contact-btn">Send</button>
        </form>
        {formStatus && <p role="status" className="form-status">{formStatus}</p>}
        <div className="contact-socials">
          {socialLinks.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <span>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <a href="#home" tabIndex={0}>Home</a>
          <a href="#about" tabIndex={0}>About</a>
          <a href="#projects" tabIndex={0}>Projects</a>
          <a href="#contact" tabIndex={0}>Contact</a>
        </div>
        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
