import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Layout,
  Smartphone,
  Zap,
  ArrowRight,
  ExternalLink,
  Heart,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  Mail,
  MapPin,
  Send,
  Eye,
  ShieldCheck,
  Terminal,
  Palette,
  Sparkle
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function App() {
  // Theme State
  const [theme, setTheme] = useState('dark');

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active Section Tracker
  const [activeNav, setActiveNav] = useState('home');

  // Interactive Playground State
  const [playgroundStyle, setPlaygroundStyle] = useState('glass');
  const [playgroundGlow, setPlaygroundGlow] = useState(true);
  const [playgroundText, setPlaygroundText] = useState('Interactive Component');
  const [playgroundColor, setPlaygroundColor] = useState('#06b6d4');

  // Project Category Filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Project Modal State
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Likes Counter State
  const [projectLikes, setProjectLikes] = useState({
    1: 42,
    2: 89,
    3: 65,
    4: 112,
    5: 37,
    6: 74
  });
  const [userLiked, setUserLiked] = useState({});

  // Testimonial Index
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Frontend Development',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toggle Dark/Light Mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle Project Likes
  const toggleLike = (id) => {
    setUserLiked(prev => {
      const isAlreadyLiked = prev[id];
      const newLikedState = !isAlreadyLiked;

      setProjectLikes(likes => ({
        ...likes,
        [id]: likes[id] + (newLikedState ? 1 : -1)
      }));

      return { ...prev, [id]: newLikedState };
    });
  };

  // Contact Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', service: 'Frontend Development', message: '' });
    }, 4000);
  };

  // Projects Data
  const projects = [
    {
      id: 1,
      title: 'Aura Analytics Dashboard',
      category: 'Dashboards',
      tags: ['React 19', 'Chart.js', 'CSS Grid', 'Dark Mode'],
      desc: 'High-performance real-time data visualization platform with glassmorphic widgets and custom analytics graphs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `const DashboardWidget = ({ metric }) => (\n  <div className="glass-card">\n    <h3>{metric.title}</h3>\n    <p className="highlight">{metric.value}</p>\n  </div>\n);`
    },
    {
      id: 2,
      title: 'Nebula E-Commerce Storefront',
      category: 'Web Apps',
      tags: ['React', 'Framer Motion', 'State Management'],
      desc: 'Seamless shopping experience featuring instant filtering, cart animations, and ultra-responsive layout.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `export const CartDrawer = ({ items }) => {\n  return (\n    <aside className="drawer">\n      <h2>Your Bag ({items.length})</h2>\n    </aside>\n  );\n};`
    },
    {
      id: 3,
      title: 'Design System & UI Components',
      category: 'UI Systems',
      tags: ['CSS Architecture', 'Vanilla CSS', 'Accessibility'],
      desc: 'Modular design system featuring over 40+ accessible, customizable UI tokens and micro-interactions.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `:root {\n  --accent-cyan: #06b6d4;\n  --radius-lg: 20px;\n  --shadow-glow: 0 0 25px rgba(99, 102, 241, 0.3);\n}`
    },
    {
      id: 4,
      title: 'AI Prompt Studio Interface',
      category: 'Web Apps',
      tags: ['React', 'Async API', 'Theme Switcher'],
      desc: 'Interactive AI web workspace with live code generation, synthwave theme toggle, and markdown parsing.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `async function generateUIPrompt(query) {\n  const res = await fetch('/api/generate', { body: JSON.stringify({ query }) });\n  return res.json();\n}`
    },
    {
      id: 5,
      title: 'Crypto Portfolio Tracker',
      category: 'Dashboards',
      tags: ['WebSockets', 'Responsive CSS', 'React'],
      desc: 'Live market ticker and interactive portfolio dashboard with smooth color transition indicators.',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `const useCryptoSocket = (symbol) => {\n  // Real-time market feed subscription\n};`
    },
    {
      id: 6,
      title: 'Creative Agency Portfolio',
      category: 'UI Systems',
      tags: ['Modern Typography', 'CSS Grid', 'Parallax'],
      desc: 'Award-winning digital agency portfolio website with smooth scroll effects and dynamic typography.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      codeSnippet: `html {\n  scroll-behavior: smooth;\n  font-family: 'Space Grotesk', sans-serif;\n}`
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Tech Stack Data
  const techStack = [
    { name: 'React 19', icon: <Code2 />, level: 95, color: '#06b6d4' },
    { name: 'JavaScript (ES6+)', icon: <Cpu />, level: 98, color: '#f7df1e' },
    { name: 'CSS3 / Modern CSS', icon: <Palette />, level: 96, color: '#a855f7' },
    { name: 'HTML5 Semantic', icon: <Layout />, level: 99, color: '#e34f26' },
    { name: 'Vite & Tooling', icon: <Zap />, level: 92, color: '#646cff' },
    { name: 'Responsive Mobile', icon: <Smartphone />, level: 98, color: '#10b981' },
    { name: 'UI / UX Design', icon: <Layers />, level: 90, color: '#ec4899' },
    { name: 'Performance & SEO', icon: <Sparkles />, level: 94, color: '#6366f1' }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "The frontend page created is beyond stunning! The smooth micro-animations, color harmony, and glassmorphic aesthetics wowed our entire team.",
      author: "Alex Morgan",
      role: "Product Lead @ TechFlow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Remarkable code quality and lightning-fast page loading speeds. The interactive components feel responsive, fluid, and premium.",
      author: "David Chen",
      role: "CTO @ Nexus Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Delivered a clean, modern frontend layout with zero bloat. The user experience and responsive layout across mobile and desktop are flawless.",
      author: "Sophia Martinez",
      role: "Creative Director @ Studio IX",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <>
      {/* Background Animated Glow Blobs */}
      <div className="bg-glow-container">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Header & Navigation */}
      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Sparkles size={22} />
            </div>
            <span>Aura<span className="gradient-text">UI</span></span>
          </a>

          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#playground" onClick={() => setIsMobileMenuOpen(false)}>Playground</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="btn-icon" onClick={toggleTheme} title="Toggle Dark/Light Mode">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="#contact" className="btn btn-primary">
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>

            <button
              className="btn-icon mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="container hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              <span>Open for New Frontend Projects</span>
            </div>

            <h1 className="hero-title">
              Crafting <span className="gradient-text">Next-Gen</span> Frontend Web Experiences
            </h1>

            <p className="hero-description">
              A state-of-the-art frontend page designed with sleek aesthetics, vibrant gradients, fluid micro-interactions, and 100% responsive architecture.
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">
                <Eye size={18} />
                <span>Explore Work</span>
              </a>

              <a href="#playground" className="btn btn-secondary">
                <Sparkle size={18} />
                <span>Try Live Playground</span>
              </a>
            </div>
          </div>

          {/* Interactive Code Preview Window */}
          <div className="code-window position-relative">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-title">App.jsx — React 19</span>
            </div>
            <div className="code-body">
              <div><span className="kw">import</span> React <span className="kw">from</span> <span className="str">'react'</span>;</div>
              <div><span className="kw">import</span> &#123; Sparkles &#125; <span className="kw">from</span> <span className="str">'lucide-react'</span>;</div>
              <br />
              <div><span className="cm">// Next-Gen Interactive Component</span></div>
              <div><span className="kw">export default function</span> <span className="fn">ModernFrontend</span>() &#123;</div>
              <div>&nbsp;&nbsp;<span className="kw">return</span> (</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="attr">div</span> <span className="attr">className</span>=<span className="str">"glass-card glowing"</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="attr">h2</span>&gt;Stunning UI Experience&lt;/<span className="attr">h2</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="attr">p</span>&gt;Fast, Accessible &amp; Responsive&lt;/<span className="attr">p</span>&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="attr">div</span>&gt;</div>
              <div>&nbsp;&nbsp;);</div>
              <div>&#125;</div>
            </div>

            {/* Floating Live Stat Pill */}
            <div className="hero-stat-pill">
              <div className="stat-icon">
                <Zap size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>99.9% Performance</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Ultra Fast 60FPS Animations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Services Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="section-tag">Core Features</div>
              <h2 className="section-title">Built for Speed, Beauty & Usability</h2>
              <p className="section-subtitle">
                Everything you need to showcase a top-tier frontend web interface.
              </p>
            </div>

            <div className="grid-3">
              <div className="glass-panel feature-card">
                <div className="feature-icon">
                  <Layout />
                </div>
                <h3 className="feature-title">Modern Design System</h3>
                <p className="feature-desc">
                  Curated typography, HSL color tokens, dark mode elevation layers, and custom glassmorphic cards.
                </p>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon">
                  <Zap />
                </div>
                <h3 className="feature-title">Ultra High Speed</h3>
                <p className="feature-desc">
                  Zero render lag, optimized DOM trees, lightweight bundle sizing, and rapid Vite instant hot reloads.
                </p>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon">
                  <Smartphone />
                </div>
                <h3 className="feature-title">100% Mobile Responsive</h3>
                <p className="feature-desc">
                  Fluid layouts that look drop-dead gorgeous on smartphones, tablets, laptops, and 4K desktop displays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive UI Playground Widget Section */}
        <section id="playground" className="playground-section">
          <div className="container">
            <div className="glass-panel playground-box">
              <div className="playground-controls">
                <div className="section-tag">Interactive Demo</div>
                <h2 className="section-title" style={{ fontSize: '2rem' }}>Component Configurator</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Test real-time frontend state changes! Customize styles and see immediate visual feedback.
                </p>

                <div className="control-group">
                  <span className="control-label">Card Style Preset:</span>
                  <div className="option-chips">
                    <button
                      className={`chip ${playgroundStyle === 'glass' ? 'active' : ''}`}
                      onClick={() => setPlaygroundStyle('glass')}
                    >
                      Glassmorphism
                    </button>
                    <button
                      className={`chip ${playgroundStyle === 'neon' ? 'active' : ''}`}
                      onClick={() => setPlaygroundStyle('neon')}
                    >
                      Neon Glow
                    </button>
                    <button
                      className={`chip ${playgroundStyle === 'gradient' ? 'active' : ''}`}
                      onClick={() => setPlaygroundStyle('gradient')}
                    >
                      Subtle Gradient
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <span className="control-label">Card Headline Text:</span>
                  <input
                    type="text"
                    className="form-input"
                    value={playgroundText}
                    onChange={(e) => setPlaygroundText(e.target.value)}
                  />
                </div>

                <div className="control-group">
                  <span className="control-label">Accent Highlight Color:</span>
                  <div className="option-chips">
                    {['#06b6d4', '#6366f1', '#a855f7', '#10b981', '#f59e0b'].map(c => (
                      <button
                        key={c}
                        className="chip"
                        style={{
                          background: c,
                          color: '#fff',
                          outline: playgroundColor === c ? '3px solid #fff' : 'none'
                        }}
                        onClick={() => setPlaygroundColor(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="preview-container">
                <div className={`preview-display preview-style-${playgroundStyle}`}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: playgroundColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      marginBottom: '1rem',
                      boxShadow: `0 0 20px ${playgroundColor}80`
                    }}
                  >
                    <Sparkles size={26} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    {playgroundText || 'Dynamic Component'}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Current preset: <strong style={{ color: playgroundColor }}>{playgroundStyle.toUpperCase()}</strong>
                  </p>

                  <button
                    className="btn btn-primary"
                    style={{ background: playgroundColor, boxShadow: `0 4px 15px ${playgroundColor}60` }}
                  >
                    Interactive Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="section-tag">Portfolio</div>
              <h2 className="section-title">Featured Project Showcase</h2>
              <p className="section-subtitle">
                Explore recent frontend web applications, interactive dashboards, and design systems.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="filter-bar">
              {['All', 'Web Apps', 'Dashboards', 'UI Systems'].map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid-3">
              {filteredProjects.map(proj => (
                <div key={proj.id} className="glass-panel project-card">
                  <div className="project-img-wrapper">
                    <img src={proj.image} alt={proj.title} />
                    <div className="project-overlay">
                      <button
                        className="btn btn-primary"
                        onClick={() => setActiveModalProject(proj)}
                      >
                        <Code2 size={16} />
                        <span>View Source Code</span>
                      </button>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-tags">
                      {proj.tags.map((t, idx) => (
                        <span key={idx} className="tag">{t}</span>
                      ))}
                    </div>

                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>

                    <div className="project-footer">
                      <button
                        className={`like-btn ${userLiked[proj.id] ? 'liked' : ''}`}
                        onClick={() => toggleLike(proj.id)}
                      >
                        <Heart size={18} fill={userLiked[proj.id] ? '#ef4444' : 'none'} />
                        <span>{projectLikes[proj.id]} Likes</span>
                      </button>

                      <a href="#contact" className="btn-icon" style={{ width: 34, height: 34 }} title="Open Project">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack & Skills Matrix */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="section-tag">Capabilities</div>
              <h2 className="section-title">Technical Expertise</h2>
              <p className="section-subtitle">
                Mastery over cutting-edge frontend tools, frameworks, and modern web standards.
              </p>
            </div>

            <div className="skills-grid">
              {techStack.map((tech, idx) => (
                <div key={idx} className="glass-panel skill-card">
                  <div className="skill-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <div className="skill-name">{tech.name}</div>
                  <div className="skill-level-bar">
                    <div
                      className="skill-level-fill"
                      style={{ width: `${tech.level}%`, background: tech.color }}
                    ></div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {tech.level}% Proficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="testimonials-section">
          <div className="container">
            <div className="glass-panel testimonial-card">
              <div className="quote-icon">
                <Sparkles size={36} />
              </div>
              <p className="testimonial-text">
                "{testimonials[testimonialIdx].quote}"
              </p>

              <div className="testimonial-author">
                <img
                  src={testimonials[testimonialIdx].avatar}
                  alt={testimonials[testimonialIdx].author}
                  className="author-avatar"
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="author-name">{testimonials[testimonialIdx].author}</div>
                  <div className="author-role">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>

              {/* Slider Dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.8rem' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    style={{
                      width: i === testimonialIdx ? 24 : 10,
                      height: 10,
                      borderRadius: 10,
                      background: i === testimonialIdx ? 'var(--accent-cyan)' : 'var(--border-color)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div>
                  <div className="section-tag">Let's Connect</div>
                  <h2 className="section-title">Ready to Start a Project?</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                    Have a vision for a frontend page or custom web application? Let's turn your ideas into reality.
                  </p>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Email Us</div>
                    <div style={{ fontWeight: 700 }}>contact@auraui.dev</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Location</div>
                    <div style={{ fontWeight: 700 }}>Worldwide / Remote</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Guarantee</div>
                    <div style={{ fontWeight: 700 }}>100% Quality & Clean Code</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="glass-panel contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Project Type</label>
                  <select
                    className="form-select"
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Frontend Development</option>
                    <option>UI / UX Redesign</option>
                    <option>React App Development</option>
                    <option>Performance Optimization</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell me about your project requirement..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>

                {formSubmitted && (
                  <div className="toast-msg">
                    <Check size={20} />
                    <span>Message sent successfully! We'll reply within 24 hours.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Code Modal */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="glass-panel modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveModalProject(null)}>
              <X size={24} />
            </button>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              {activeModalProject.title} — Code Preview
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Sample component implementation structure:
            </p>
            <pre style={{
              background: '#0d1117',
              padding: '1.2rem',
              borderRadius: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: '#e6edf3',
              overflowX: 'auto'
            }}>
              <code>{activeModalProject.codeSnippet}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Sparkles size={20} />
            </div>
            <span>Aura<span className="gradient-text">UI</span></span>
          </a>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} AuraUI. Crafted with precision for high-performance frontend applications.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-icon">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-icon">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-icon">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
