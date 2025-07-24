import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Virginia Gonzalez</div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>Sobre Mí</button></li>
            <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experiencia</button></li>
            <li><button onClick={() => scrollToSection('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portafolio</button></li>
            <li><button onClick={() => scrollToSection('awards')} className={activeSection === 'awards' ? 'active' : ''}>Reconocimientos</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Virginia Gonzalez</h1>
          <p className="hero-subtitle">Chef Ejecutiva</p>
          <p className="hero-description">Creando experiencias culinarias excepcionales con técnicas contemporáneas</p>
          <button className="cta-button" onClick={() => scrollToSection('about')}>
            Descubrir Mi Historia
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Una Pasión por la Excelencia</h2>
              <p className="about-description">
                Con más de 10 años de trayectoria en la cocina de autor, he forjado un estilo propio que fusiona creatividad, sensibilidad estacional y respeto absoluto por el producto. Mi propuesta se nutre de ingredientes frescos, 
                de origen vegetal y marino, destacando recetas veganas y pescetarianas que celebran la pureza del sabor sin sacrificar sofisticación.Formada en Venezuela y con paso por cocinas de referencia en Buenos Aires, cada plato que diseño es una exploración sensorial 
                donde la técnica y la intuición dialogan. Busco que cada preparación, desde un carpaccio de pesca con un ponzu de tomate hasta una cachapa con shitakes y alioli de ajo, cuente una historia auténtica, equilibrada y profundamente personal.
              </p>
              <p className="about-description">
                Formada en Venezuela y con experiencia en algunos de los restaurantes más prestigiosos de Buenos Aires, cada plato que creo cuenta una historia única que conecta tradición e innovación.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Menciones Michelin</span>
                </div>

              </div>
            </div>
            <div className="about-image">
              <img src="/public/assets/socarrat.jpg" alt="socarrat" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experiencia en Restaurantes</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-image">
                <img src="/public/assets/sacro-michelin.jpg" alt="Restaurant Sacro" />
              </div>
              <div className="experience-content">
                <h3>Sacro Resto</h3>
                <p className="experience-role">Chef Ejecutiva</p>
                <p className="experience-location">Buenos Aires • 2 menciones Michelin</p>
                <p className="experience-description">
                  Responsable del rediseño de la carta bajo un enfoque plant-based y pescetariano, 
                  reversionando recetas del mundo con toques de autor, manteniendo los más altos estándares de calidad y presentación.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-image">
                <img src="/public/assets/basa-logo.jpg" alt="basa-logo" />
              </div>
              <div className="experience-content">
                <h3>Basa</h3>
                <p className="experience-role">Jefa de cocina</p>
                <p className="experience-location">Buenos Aires • Mención Michelin</p>
                <p className="experience-description">
                  Lideré el área de entradas y pastelería con enfoque en precisión técnica y creatividad, desarrollando propuestas que equilibran sabor, textura y presentación. Como jefa de cocina, coordiné equipos y procesos, 
                  asegurando excelencia en cada servicio y manteniendo altos estándares de calidad gastronómica.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-image">
                <img src="/public/assets/canal-street-logo.jpg" alt="canal-street-logo" />
              </div>
              <div className="experience-content">
                <h3>Canal Street Bar</h3>
                <p className="experience-role">Cocinera</p>
                <p className="experience-location">Buenos Aires</p>
                <p className="experience-description">
                  Ejecuté una cocina dinámica y eficiente en un entorno de alto ritmo, especializándome en platos de barra con identidad propia.
                  Aporté creatividad y constancia en cada preparación,
                  manteniendo estándares de sabor y presentación, y adaptándome con agilidad a los tiempos y demandas del servicio nocturno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Creaciones</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/public/assets/carpaccio-pesca-curada.jpg" alt="carpaccio-pesca" />
              <div className="portfolio-overlay">
                <h3>Carpaccio Pesca Curada</h3>
                <p>Acompañado de cítricos macerados, aceite verde de hierbas frescas y un toque crocante y picante</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="/public/assets/carpaccio-remolacha.jpg" alt="carpaccio-remolacha" />
              <div className="portfolio-overlay">
                <h3>Carpaccio de Remolacha</h3>
                <p>Con cremoso de lima y eneldo, con vinagreta de naranja y garrapiñada de avellanas</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="/public/assets/cachapa.jpg" alt="img-cachapa" />
              <div className="portfolio-overlay">
                <h3>Cachapa</h3>
                <p>Re versión del clasico venezolano, con alioli de ajo, crema de palta y hongos shitakes</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="/public/assets/langostinos-plancha.jpg" alt="langostino plancha" />
              <div className="portfolio-overlay">
                <h3>Langostinos a la plancha</h3>
                <p>Acompañado con pan pita, un yogurt de ajo y curry rojo con miel de caña</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="/public/assets/taquitos-chipiron.jpg" alt="taquitos de chipiron" />
              <div className="portfolio-overlay">
                <h3>Taquitos de chipiron</h3>
                <p>Clasico de la comida mexicana con ensalada de anana tatemada y alioli de jalapeño</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="/public/assets/curry-verde.jpg" alt="Duck Confit Modern" />
              <div className="portfolio-overlay">
                <h3>Pesca con curry verde</h3>
                <p>Con coliflor asado en miel de mostaza antigua y curry verde de hierbas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="awards">
        <div className="container">
          <h2 className="section-title">Reconocimientos</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <h3>James Beard Award</h3>
              <p>Outstanding Chef 2023</p>
            </div>
            <div className="award-item">
              <div className="award-icon">👨‍🍳</div>
              <h3>World's 50 Best</h3>
              <p>Top 10 Chef 2022</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h3>Michelin Guide</h3>
              <p>3 Estrellas Michelin</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Culinary Masters</h3>
              <p>Chef del Año 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Colaboraciones Culinarias</h3>
              <p>Disponible para consultoría gastronómica, eventos privados y colaboraciones con restaurantes de alta gama.</p>
              <div className="contact-details">
                <p>📧 ygvn@gmail.com</p>
                <p>📱 +54 11 2405 3171</p>
                <p>📍 Buenos Aires, AR</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="">Tipo de Consulta</option>
                <option value="private-event">Evento Privado</option>
                <option value="consultation">Consultoría</option>
                <option value="collaboration">Colaboración</option>
                <option value="media">Medios</option>
              </select>
              <textarea placeholder="Mensaje" rows="5" required></textarea>
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Virginia Gonzalez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;