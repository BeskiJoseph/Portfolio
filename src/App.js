import React, { useState } from "react";

const profile = {
  name: "Constantine Beski J",
  email: "beskijosphjr@gmail.com",
  phone: "+91 93442-64796",
  location: "Tamil Nadu, India",
  github: "https://github.com/BeskiJoseph",
  linkedin: "https://www.linkedin.com/in/constantine-beski-j-a6b04b2b3",
};

const skillGroups = [
  { title: "Frontend", note: "Interfaces & user experience", items: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", note: "Services & application logic", items: ["Node.js", "Express.js", "NestJS", "Fastify", "REST APIs", "Socket.IO", "JWT"] },
  { title: "Data & storage", note: "Persistence, search & caching", items: ["PostgreSQL", "MongoDB", "Firebase", "Firestore", "Redis", "Prisma", "Mongoose", "Typesense"] },
  { title: "Cloud & tools", note: "Delivery & developer workflow", items: ["Docker", "Nginx", "PM2", "AWS S3", "Cloudflare R2", "Git", "GitHub", "Postman"] },
  { title: "Mobile & AI integration", note: "Connected product experiences", items: ["Flutter", "Gemini API integration"] },
];

const projects = [
  {
    number: "01",
    name: "Magical Mails",
    type: "Gift-card commerce platform",
    description: "A full-stack digital gift-card platform with storefront, administration and backend workflows. Built around product, design, customer and order management.",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "Fastify", "PostgreSQL", "Prisma", "AWS S3", "Razorpay", "Docker"],
    details: ["Storefront and admin application components", "PostgreSQL data workflows with Prisma", "Payment and object-storage integrations", "Docker, Nginx and PM2 deployment setup"],
    link: "https://github.com/BeskiJoseph",
  },
  {
    number: "02",
    name: "LocalMe",
    type: "Social & community platform",
    description: "A mobile-first social platform focused on local and global content discovery, user-generated media and feed experiences.",
    stack: ["Flutter", "Node.js", "Express", "PostgreSQL", "Firebase", "Redis", "Socket.IO", "Typesense", "Cloudflare R2"],
    details: ["Local and global feed functionality", "Media upload and storage workflows", "Redis-backed feed tracking", "Session-level duplicate content prevention"],
    link: "https://github.com/BeskiJoseph",
  },
  {
    number: "03",
    name: "Inventory & Billing Management",
    type: "Business operations application",
    description: "An inventory and billing application designed to manage products, stock movement, sales records and invoice workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    details: ["Product and inventory management", "GST calculation and invoice generation", "Automatic stock updates during billing", "Admin and Staff roles with protected routes"],
    link: "https://github.com/BeskiJoseph",
  },
  {
    number: "04",
    name: "College Complaint Management",
    type: "Full-stack web application",
    description: "A web application for digitising complaint submission, tracking and resolution workflows within a college environment.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    details: ["Complaint submission and status tracking", "Centralised complaint administration", "Backend APIs for complaint workflows", "Role-based management features"],
    link: "https://github.com/BeskiJoseph",
  },
];

const capabilities = [
  ["Application development", "Building complete web applications across frontend, backend and data layers."],
  ["API engineering", "Designing REST endpoints, integrating external services and connecting client applications."],
  ["Data modelling", "Working with relational and document databases, ORM workflows and caching patterns."],
  ["Delivery & infrastructure", "Using Docker, Nginx, PM2 and cloud object storage in application deployment workflows."],
];

function Icon({ children }) {
  return <span className="icon-mark" aria-hidden="true">{children}</span>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">CB</span><span>beski<span className="brand-dot">.</span>dev</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href="mailto:beskijosphjr@gmail.com?subject=Resume%20Request">Request résumé <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO JUNIOR DEVELOPER OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Constantine<br /><span>Beski J.</span></h1>
            <h2>Junior Full-Stack <em>Software Engineer</em></h2>
            <p className="hero-description">I build thoughtful digital products — from responsive interfaces and robust APIs to database-backed applications and deployment workflows.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
              <a className="button button-quiet" href="#contact">Let's connect</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${profile.email}`}>Email ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Full-stack development illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>developer.ts</small></div>
              <div className="code-body">
                <p><i>01</i><b>const</b> developer = {"{"}</p>
                <p><i>02</i>&nbsp; name: <strong>"Constantine"</strong>,</p>
                <p><i>03</i>&nbsp; focus: <strong>"Full Stack"</strong>,</p>
                <p><i>04</i>&nbsp; build: [</p>
                <p><i>05</i>&nbsp;&nbsp; <strong>"Web Apps"</strong>,</p>
                <p><i>06</i>&nbsp;&nbsp; <strong>"APIs"</strong>,</p>
                <p><i>07</i>&nbsp;&nbsp; <strong>"Digital Products"</strong></p>
                <p><i>08</i>&nbsp; ]</p>
                <p><i>09</i>{"}"};</p>
              </div>
              <div className="code-footer"><span className="footer-dot" /> Building, learning, improving.</div>
            </div>
            <div className="float-chip chip-react">⚛ React</div>
            <div className="float-chip chip-node">⬡ Node.js</div>
            <div className="float-chip chip-db">▤ PostgreSQL</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="section-wrap intro-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title="Engineering with curiosity." text="A practical, product-focused approach to full-stack development." />
          <div className="about-grid">
            <div className="about-main">
              <p className="lead-copy">I'm an MCA graduate and junior developer interested in building useful software from the first interface to the underlying data model.</p>
              <p>My experience combines a three-month software development internship with hands-on projects across commerce, social applications, inventory workflows and AI-assisted features. I enjoy understanding how the pieces fit together: component design, API contracts, authentication, persistence and deployment.</p>
              <p>I value clean implementation, continuous learning and being able to explain the technical decisions behind the products I build.</p>
            </div>
            <div className="about-facts">
              <div><span>EDUCATION</span><strong>MCA · 2026</strong><small>RVS College of Arts and Science</small></div>
              <div><span>EXPERIENCE</span><strong>3-month internship</strong><small>Software Development · Aiking Solutions</small></div>
              <div><span>FOCUS</span><strong>Full-stack engineering</strong><small>Web · Backend · Mobile</small></div>
              <div><span>LOCATION</span><strong>{profile.location}</strong><small>Open to suitable opportunities</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with." text="A growing toolkit across application development, data and delivery." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => <article className="skill-card" key={group.title}>
              <div className="skill-card-top"><span>0{index + 1}</span><Icon>{["⌘", "⌁", "▤", "⌘", "✳"][index]}</Icon></div>
              <h3>{group.title}</h3><p>{group.note}</p>
              <div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
          <div className="capability-strip">
            {capabilities.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{description}</p></div>)}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects built with purpose." text="A selection of applications and engineering workflows I've worked on." />
          <div className="projects-list">
            {projects.map((project) => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3><p className="project-description">{project.description}</p>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="tag-list project-tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open GitHub profile for ${project.name}`}>↗</a>
            </article>)}
          </div>
          <p className="project-note">Project descriptions reflect development work and implementation areas; links currently point to my GitHub profile while individual repository URLs are being organised.</p>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <SectionHeading eyebrow="04 / EXPERIENCE" title="Where I've contributed." text="Professional experience and academic foundation." />
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-date">JAN 2025 — MAR 2025 <span>· 3 MONTHS</span></div>
              <div className="timeline-body"><h3>Software Development Intern</h3><h4>Aiking Solutions</h4>
                <p>Contributed to frontend application development and API integration for resume-focused products.</p>
                <ul><li>Developed a Resume Builder and Resume Analyzer using React.js and REST APIs.</li><li>Integrated the Gemini AI API to support resume analysis and automated feedback.</li><li>Connected frontend components with backend services and application workflows.</li></ul>
              </div>
            </div>
          </div>
          <div className="education-row">
            <article><span>EDUCATION / 01</span><h3>Master of Computer Applications</h3><p>RVS College of Arts and Science · Coimbatore</p><strong>2026 · 7.8 CGPA</strong></article>
            <article><span>EDUCATION / 02</span><h3>Bachelor of Computer Applications</h3><p>St. John's College of Arts and Science · Kanyakumari</p><strong>2021–2024 · 6.4 CGPA</strong></article>
          </div>
        </section>

        <section className="section-wrap learning-section">
          <SectionHeading eyebrow="05 / HOW I THINK" title="Beyond the framework." text="Areas I explore to become a more complete software engineer." />
          <div className="learning-grid">
            {["System design fundamentals", "Database modelling", "Authentication & access control", "Caching & feed optimisation", "Cloud storage & deployment", "AI API integration"].map((item, i) => <div key={item}><span>↗ 0{i + 1}</span>{item}</div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="eyebrow">06 / GET IN TOUCH</span>
            <h2>Have a product to build<br /><em>or a problem to solve?</em></h2>
            <p>I'm open to junior software engineering opportunities and conversations about building useful digital products.</p>
            <a className="button button-primary" href={`mailto:${profile.email}?subject=Let's%20connect`}>Start a conversation <span>↗</span></a>
            <div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">CB</span><span>beski<span className="brand-dot">.</span>dev</span></a><span>Designed & built by Constantine Beski J · 2026</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;