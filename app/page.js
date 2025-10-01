"use client";
import { useEffect, useRef, useState } from "react";
import projects from "./data/features.json";
import experience from "./data/experience.json";
import research from "./data/research.json";
import skills from "./data/skills.json";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <div className="bg-animation"></div>

      <nav>
        <div className="nav-container">
          <div className="logo">MK</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="home"
        ref={heroRef}
        className={`hero ${fadeIn ? "fade-in-active" : ""}`}
      >
        <div className="container">
          <h1>
            Mohsin <span>Khondoker</span>
          </h1>
          <h2>Full Stack / Backend Developer</h2>
          <p>
            With 6+ years of professional experience building high-performance
            systems for leading organizations. Specializing in backend
            development and scalable microservices architecture using modern
            technologies.
          </p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate Full Stack Developer with extensive experience in
              building scalable web applications and microservices. I've worked
              with leading organizations such as Upay, UCB, and BAT, delivering
              robust solutions that serve millions of users. My expertise spans
              across backend development, database optimization, and cloud
              infrastructure, with a strong focus on performance and
              scalability.
            </p>
            <br />
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-grid">
              {experience.map((exp, index) => (
                <div key={index} className="experience-card floating">
                  <div className="experience-header">
                    <div>
                      <div className="job-title">{exp.jobTitle}</div>
                      <div className="company">{exp.company}</div>
                    </div>
                    <div className="duration">
                      {exp.duration} [{exp.totalCount}]
                    </div>
                  </div>
                  <div className="job-description">
                    {exp.description ? (
                      <p>{exp.description}</p>
                    ) : (
                      <ul>
                        {exp.descriptionList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="tech-stack">
                    {exp.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h3>{skillCategory.category}</h3>
                  <div className="skill-list">
                    {skillCategory.items.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">{project.icon}</div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Research and Publications</h2>
            <div className="projects-grid">
              {research.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">{project.icon}</div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    {/* <p className="project-description">{project.description}</p> */}
                    <div className="project-links">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:mr.mohsinkhondoker@gmail.com">
                    mohsinkhondoker.pro@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+8801739972425">+880173997****</a>
                </p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>
                  Uttara
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>
                  <a href="https://www.linkedin.com/in/imtiaz-khandoker/">
                    linkedin.com/in/mohsinkhondoker
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <h3>Github</h3>
                <p>
                  <a href="https://github.com/1mt142">
                    https://github.com/1mt142
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <h3>LeetCode</h3>
                <p>
                  <a href="https://leetcode.com/1mt142/">LeetCode Profile</a>
                </p>
              </div>

              {/* <div className="contact-item">
                <div className="contact-icon">💻</div>
                <h3>Kaggle</h3>
                <p>
                  <a href="https://www.kaggle.com/1mt142">Kaggle Profile</a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className={`content-section ${fadeIn ? "fade-in-active" : ""}`}>
            <h2 className="section-title">Achievements</h2>
            <ul className="achievements-list">
              <li>
                Employee of the Quarter – Outstanding Contribution to the BAT
                Machine ERP Project
              </li>
              <li>ICT Carnival – Best Project Award</li>
              <li>IoT App – Best Project Award</li>
              <li>Upay – Runner Up in Sports at Inter UCB Sports</li>
              <li>
                Varsity – Appreciation Award for Outstanding Contribution at
                Programming Club Activities
              </li>
              <li>
                Appreciation Award for Outstanding Contribution at Project-K, in
                recognition of efforts to raise awareness among students in
                remote areas about technology and inspire careers in the tech
                industry.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
