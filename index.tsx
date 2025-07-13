import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Data ---
const projects = [
    {
        icon: '🧠',
        title: 'Solace',
        description: 'A GPT-powered personal AI companion with memory and real-world knowledge.',
        stack: 'Python, HTML, JavaScript, GPT API',
        url: 'https://solace-giw5uyb6y-maheshs-projects-81a5a75f.vercel.app/'
    },
    {
        icon: '💬',
        title: 'Rumor.Net',
        description: 'A chat platform for college students to connect and communicate anonymously with other students.',
        stack: 'React, Node.js, Socket.io, MongoDB',
        url: 'https://github.com/mahesh-v185/Rumor.Net.git'
    },
    {
        icon: '🌏',
        title: 'Hikari',
        description: 'Japanese tourist guide app built to simplify travel for foreigners in Japan using AI + native content.',
        stack: 'React Native, Google Maps API, AI Integration',
        url: 'https://hikari-five.vercel.app/'
    },
    {
        icon: '🏫',
        title: 'Campus Kizuna',
        description: 'Social platform for students and faculty with role-based access, semester tagging, and real-time reels.',
        stack: 'Kotlin, Firebase, Android Studio',
        url: 'https://campus-izuna.vercel.app/'
    },
    {
        icon: '📝',
        title: 'Life Script',
        description: 'AI-powered platform that transforms prompts into comprehensive eBooks and content.',
        stack: 'React, Node.js, Firebase, AI APIs',
        url: 'https://lifescript-two.vercel.app/'
    },
    {
        icon: '🚀',
        title: 'Booster',
        description: 'Voice-powered AI chatbot system with conversation history and natural language processing capabilities.',
        stack: 'Python, OpenAI API, Speech Recognition',
        url: 'https://github.com/mahesh-v185/Booster---voice-chat-bot.git'
    }
];

const skills = {
    languages: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['React Native', 'Firebase', 'Node.js'],
    tools: ['GitHub', 'Android Studio', 'VS Code'],
    others: ['UI/UX', 'Version Control', 'Responsive Design'],
    softSkills: ['Initiative', 'Adaptability', 'Self-learning', 'Vision']
};

const certifications = [
    {
        title: 'AI Development Virtual Experience',
        provider: 'Forage',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2t4QruSmKkrN8jr7G/7q8DN5enMzSHqLwev_2t4QruSmKkrN8jr7G_BtRS8jq8NLYuEmGzY_1751224123652_completion_certificate.pdf'
    },
    {
        title: 'Frontend Developer Virtual Internship',
        provider: 'Forage',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fMCqmt8qR4G85Puue/rKCBL7y5yKgzDGZmR_fMCqmt8qR4G85Puue_BtRS8jq8NLYuEmGzY_1751222427555_completion_certificate.pdf'
    },
    {
        title: 'Android Development Job Simulation',
        provider: 'Forage',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_BtRS8jq8NLYuEmGzY_1751251417456_completion_certificate.pdf'
    }
];


// --- Components ---

const Header = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = ['about', 'projects', 'skills', 'experience', 'contact'];

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#home" className="logo" onClick={closeMenu}>Mahesh V</a>
                <nav className={isMenuOpen ? 'mobile-open' : ''}>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link}>
                                <a 
                                    href={`#${link}`}
                                    className={activeSection === link ? 'active' : ''}
                                    onClick={closeMenu}
                                >
                                    {link === 'experience' ? 'Certifications' : link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            </div>
        </header>
    );
};

const Hero = () => (
    <section id="home" className="hero">
        <div className="container">
            <h1 className="hero-title">Future-Ready Technologist. Unstoppable Learner.</h1>
            <p className="hero-subtitle">Turning ideas into intelligent systems. One line of code at a time.</p>
            <a href="#projects" className="cta-button">▸ Explore My Work</a>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="scroll-reveal">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <h3>Mahesh V</h3>
                <p className="about-tagline">Aspiring Computer Scientist | Problem Solver | Product Builder</p>
                <p>I’m a developer who believes that code can change people’s lives. While others learn to build projects, I build projects to learn.</p>
                <p>From turning health discipline into a gamified app, to developing a full AI eBook generator, I’ve spent the past two years creating tools that reflect who I am — driven, thoughtful, and always evolving.</p>
                <p>Even during my academic transition, I never paused my growth. I used that time to dive deep into full-stack development, mobile apps, AI, and real-world product design. I'm also learning Japanese, not as a requirement, but because I deeply respect its culture of precision, humility, and innovation — values I live by.</p>
                <p><strong>I don’t chase grades. I chase impact.</strong></p>
            </div>
        </div>
    </section>
);

const Projects = () => (
     <section id="projects" className="scroll-reveal">
        <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.title}>
                        <div className="project-icon" role="img" aria-label={`${project.title} icon`}>{project.icon}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="project-stack"><strong>Stack:</strong> {project.stack}</p>
                        {project.url && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta-button-outline" style={{marginTop: '1rem'}}>
                                View Project <i className="fas fa-external-link-alt"></i>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Skills = () => (
    <section id="skills" className="scroll-reveal">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div className="skill-category" key={category}>
                        <h4>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                        <div className="skills-list">
                            {skillList.map(skill => <span className="skill-badge" key={skill}>{skill}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Experience = () => (
    <section id="experience" className="scroll-reveal">
        <div className="container">
            <h2 className="section-title">Certifications & Experience</h2>
            <div className="experience-grid">
                {certifications.map(cert => (
                    <div className="experience-card" key={cert.title}>
                        <div className="experience-icon"><i className="fas fa-award"></i></div>
                        <h3>{cert.title}</h3>
                        <p className="experience-provider">{cert.provider}</p>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cta-button-outline">
                            View Certificate <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                ))}
            </div>
             <div className="other-experience">
                <p><strong>Additional Qualifications</strong></p>
                <p>JLPT N5 – Ongoing</p>
            </div>
        </div>
    </section>
);

const Quote = () => (
    <section className="quote-section scroll-reveal">
        <div className="container">
            <blockquote>
                “If knowledge is fuel, curiosity is my engine. I'm not here to follow — I'm here to create the path others follow.”
            </blockquote>
        </div>
    </section>
);

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormState({ name: '', email: '', message: '' });
    };
    
    return (
        <section id="contact" className="scroll-reveal">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <p className="contact-cta">Let’s Build Something Powerful Together.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formState.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formState.email} onChange={handleInputChange} required />
                    <textarea name="message" placeholder="Your Message" value={formState.message} onChange={handleInputChange} required></textarea>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
                 <div className="social-links">
                    <a href="mailto:mahesh9880302264.v@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    <a href="https://github.com/mahesh-v185" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mr-mahesh-4209b4284" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </section>
    );
};

const PageFooter = () => (
     <footer>
        <div className="container">
            <p>Designed to speak for me — before I speak.</p>
            <p>&copy; {new Date().getFullYear()} Mahesh V. All rights reserved.</p>
        </div>
    </footer>
);


// --- Main App Component ---

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        const handleScroll = () => {
            // Scroll reveal logic
            const windowHeight = window.innerHeight;
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('is-visible');
                }
            });

            // Active nav link logic
            let current = '';
            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current || 'home');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <>
            <Header activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Quote />
                <Contact />
            </main>
            <PageFooter />
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);