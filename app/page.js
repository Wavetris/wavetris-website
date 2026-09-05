'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    n: '01',
    title: 'Electronic Product Design',
    text: 'Architecture, component selection, schematic design, prototyping and engineering support from concept to manufacturable hardware.',
    tags: ['Architecture', 'Schematic', 'Prototype'],
  },
  {
    n: '02',
    title: 'PCB Design & Engineering',
    text: 'Board design focused on electrical performance, manufacturability, reliability and practical production constraints.',
    tags: ['HDI', 'High-speed', 'DFM'],
  },
  {
    n: '03',
    title: 'Embedded Systems',
    text: 'MCU-based product development, interfaces, drivers, board bring-up and firmware tightly integrated with the hardware.',
    tags: ['MCU', 'Interfaces', 'Bring-up'],
  },
  {
    n: '04',
    title: 'FPGA & Digital Design',
    text: 'RTL development, digital interfaces, custom logic, sensor acquisition and FPGA-based acceleration for specialized systems.',
    tags: ['RTL', 'FPGA', 'Digital'],
  },
  {
    n: '05',
    title: 'Power Electronics',
    text: 'Power architecture, DC/DC conversion, protection, power-path design and engineering for efficient, robust electronic systems.',
    tags: ['DC/DC', 'Protection', 'Power path'],
  },
  {
    n: '06',
    title: 'Validation & Test Automation',
    text: 'Engineering validation, automated test setups, fixtures, data acquisition and repeatable workflows for product verification.',
    tags: ['Validation', 'Automation', 'Fixtures'],
  },
];

const capabilities = [
  'System architecture & design reviews',
  'Schematic capture & component engineering',
  'High-speed and mixed-signal PCB design',
  'Signal & power integrity engineering',
  'EMI/EMC-aware design practices',
  'Firmware and board bring-up',
  'FPGA / RTL development',
  'Power architecture and conversion',
  'Prototype debugging and validation',
  'Automated test system development',
  'Design for manufacturing support',
  'Engineering documentation',
];

const industries = [
  ['Industrial', 'Reliable electronics for machines, controls, instrumentation and automation.'],
  ['Aerospace & UAV', 'Embedded, sensing, control and communication electronics for demanding platforms.'],
  ['Energy & Power', 'Power conversion, monitoring, protection and intelligent energy systems.'],
  ['Mobility', 'Embedded controllers, interfaces and validation systems for connected products.'],
  ['Instrumentation', 'Acquisition, measurement and signal-processing hardware engineered for accuracy.'],
  ['Product Companies', 'An external hardware engineering team for new products, redesigns and technical problem solving.'],
];

function WaveMark({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="WAVETRIS">
      <svg className="brand__mark" viewBox="0 0 46 46" role="img" aria-hidden="true">
        <path d="M4 25.5 11.5 18l7.2 11L27 12l7.3 14 7.7-7.2" />
        <path className="mark-faint" d="M4 34h38" />
      </svg>
      <span>WAVETRIS</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a href="#top" className="logo-link" onClick={close}><WaveMark compact /></a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Primary navigation">
          <a href="#services" onClick={close}>Services</a>
          <a href="#capabilities" onClick={close}>Capabilities</a>
          <a href="#industries" onClick={close}>Industries</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close} className="nav__cta">Start a project</a>
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />
        <div className="hero__content wrap">
          <div className="eyebrow"><span className="dot" /> Electronic Product Design & Engineering</div>
          <h1>Engineering ideas into<br /><span>working hardware.</span></h1>
          <p className="hero__lead">
            WAVETRIS helps teams develop reliable electronic products—from architecture and board design to embedded systems, FPGA, power and validation.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Discuss your project <ArrowIcon /></a>
            <a className="btn btn--ghost" href="#services">Explore capabilities</a>
          </div>
          <div className="hero__meta">
            <span>PCB</span><i />
            <span>EMBEDDED</span><i />
            <span>FPGA</span><i />
            <span>POWER</span><i />
            <span>VALIDATION</span>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="scope">
            <div className="scope__label"><span>ENGINEERING SIGNAL</span><span>01</span></div>
            <svg viewBox="0 0 620 280" preserveAspectRatio="none">
              <defs>
                <pattern id="smallGrid" width="31" height="28" patternUnits="userSpaceOnUse">
                  <path d="M31 0H0V28" fill="none" />
                </pattern>
              </defs>
              <rect width="620" height="280" fill="url(#smallGrid)" className="scope-grid" />
              <path className="wave-shadow" d="M0 146 C35 146 36 146 53 146 C69 146 76 86 92 86 C111 86 115 207 136 207 C156 207 159 122 179 122 C198 122 204 156 224 156 C247 156 248 55 270 55 C293 55 297 227 320 227 C342 227 345 111 368 111 C390 111 391 172 416 172 C441 172 439 91 464 91 C489 91 492 191 517 191 C541 191 547 135 566 135 C588 135 589 146 620 146" />
              <path className="wave" d="M0 146 C35 146 36 146 53 146 C69 146 76 86 92 86 C111 86 115 207 136 207 C156 207 159 122 179 122 C198 122 204 156 224 156 C247 156 248 55 270 55 C293 55 297 227 320 227 C342 227 345 111 368 111 C390 111 391 172 416 172 C441 172 439 91 464 91 C489 91 492 191 517 191 C541 191 547 135 566 135 C588 135 589 146 620 146" />
            </svg>
            <div className="scope__footer"><span>DESIGN</span><span>BUILD</span><span>VALIDATE</span></div>
          </div>
        </div>
      </section>

      <section className="statement section">
        <div className="wrap statement__grid">
          <div className="section-kicker">01 / WHAT WE DO</div>
          <div>
            <h2>One engineering partner.<br />From concept to validation.</h2>
            <p>Electronic products fail at the boundaries between disciplines. We approach hardware as a complete system—electrical, digital, power, firmware and validation working together from the beginning.</p>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">02 / SERVICES</div>
            <h2>Engineering where<br />the product needs it.</h2>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.n}>
                <div className="service-card__top"><span>{s.n}</span><span className="service-card__cross">+</span></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="wrap capabilities__layout">
          <div className="capabilities__intro">
            <div className="section-kicker">03 / CAPABILITIES</div>
            <h2>Built around real engineering workflows.</h2>
            <p>We can enter at the architecture stage, solve a focused technical problem, or support the complete electronic development cycle.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((c, i) => (
              <div className="capability-row" key={c}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="wrap">
          <div className="section-head section-head--row">
            <div>
              <div className="section-kicker">04 / HOW WE WORK</div>
              <h2>Clarity before complexity.</h2>
            </div>
            <p>Every engagement starts with requirements, interfaces and engineering risks—not premature implementation.</p>
          </div>
          <div className="process-line">
            {[
              ['01', 'Define', 'Requirements, interfaces, constraints and success criteria.'],
              ['02', 'Architect', 'Partition the system and resolve the highest-risk decisions early.'],
              ['03', 'Engineer', 'Design hardware, logic, firmware and supporting test infrastructure.'],
              ['04', 'Validate', 'Bring-up, measure, debug and verify against the intended use case.'],
            ].map(([n, title, text]) => (
              <div className="process-step" key={n}>
                <span>{n}</span><div className="process-dot" /><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries section" id="industries">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">05 / INDUSTRIES</div>
            <h2>Designed for demanding<br />electronic systems.</h2>
          </div>
          <div className="industry-grid">
            {industries.map(([title, text], i) => (
              <article className="industry-card" key={title}>
                <div className="industry-card__index">0{i + 1}</div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="wrap about__layout">
          <div>
            <div className="section-kicker">06 / WAVETRIS</div>
            <h2>Engineering depth.<br />Product perspective.</h2>
          </div>
          <div className="about__copy">
            <p className="about__lead">WAVETRIS is an electronic product design and engineering company focused on turning technical requirements into robust, testable hardware.</p>
            <p>We work across the boundaries that matter in real products: schematics and layout, firmware and FPGA, power and signal integrity, prototypes and production validation.</p>
            <p>Our goal is straightforward: make engineering decisions that survive beyond the prototype.</p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact__grid" aria-hidden="true" />
        <div className="wrap contact__inner">
          <div className="section-kicker">07 / START A PROJECT</div>
          <h2>Have a hardware problem<br />worth solving?</h2>
          <p>Tell us what you are building, where you are stuck, or what you need engineered.</p>
          <a className="btn btn--light" href="mailto:hello@wavetris.com">hello@wavetris.com <ArrowIcon /></a>
          <div className="contact__note">For project enquiries, include your application, current development stage and expected scope.</div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer__top">
          <WaveMark compact />
          <div className="footer__links">
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="wrap footer__bottom">
          <span>© {new Date().getFullYear()} WAVETRIS. All rights reserved.</span>
          <span>Electronic Product Design & Engineering</span>
        </div>
      </footer>
    </main>
  );
}
