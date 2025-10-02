import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import AboutUsSection from "./components/ui/about-us-section";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo-light.jpeg"
                alt="Der Obstbaum Pfleger Logo"
                className="h-16 w-auto"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-primary">
                  Der Obstbaum Pfleger
                </h1>
                <p className="text-sm text-secondary">Günter Büttner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-primary hover:text-secondary transition-colors"
              >
                Startseite
              </a>
              <a
                href="#about-section"
                className="text-primary hover:text-secondary transition-colors"
              >
                Über uns
              </a>
              <a
                href="#services"
                className="text-primary hover:text-secondary transition-colors"
              >
                Leistungen
              </a>
              <a
                href="#contact"
                className="text-primary hover:text-secondary transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg transition-colors"
              >
                Termin vereinbaren
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#home"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Startseite
                </a>
                <a
                  href="#about-section"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Über uns
                </a>
                <a
                  href="#services"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leistungen
                </a>
                <a
                  href="#contact"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </a>
                <a
                  href="#contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Termin vereinbaren
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-background via-white to-background overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Professionelle Obstbaumpflege seit über 30 Jahren
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-primary mb-6 leading-tight">
                Gesunde Bäume,
                <br />
                <span className="text-secondary font-medium">
                  reiche Ernten
                </span>
              </h1>
              <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                Ihr Experte für fachgerechten Baumschnitt, Baumpflege und
                Ertragsoptimierung in der Region. Mit Leidenschaft und
                Fachwissen kümmern wir uns um Ihre wertvollen Obstbäume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-medium transition-colors text-center"
                >
                  Kostenlose Beratung
                </a>
                <a
                  href="#about-section"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-medium transition-colors text-center"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop"
                  alt="Obstbaumpflege"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-secondary">30+</div>
                <div className="text-sm text-primary/70">Jahre Erfahrung</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-secondary">500+</div>
                <div className="text-sm text-primary/70">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUsSection />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Unsere Leistungen
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Von der Pflanzung bis zur Ernte – wir bieten alle Leistungen rund
              um Ihre Obstbäume aus einer Hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Winterschnitt",
                description:
                  "Fachgerechter Schnitt in der Vegetationsruhe für optimalen Fruchtansatz und gesundes Wachstum.",
                image:
                  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop",
              },
              {
                title: "Sommerschnitt",
                description:
                  "Korrektur und Auslichtung während der Vegetationsperiode für bessere Fruchtqualität.",
                image:
                  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&auto=format&fit=crop",
              },
              {
                title: "Jungbaumpflege",
                description:
                  "Aufbauschnitt und Erziehung junger Bäume für eine stabile, ertragreiche Krone.",
                image:
                  "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&auto=format&fit=crop",
              },
              {
                title: "Altbaumpflege",
                description:
                  "Verjüngung und Erhaltung alter Obstbäume mit schonenden Methoden.",
                image:
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop",
              },
              {
                title: "Beratung & Planung",
                description:
                  "Individuelle Beratung zu Sortenwahl, Standort und optimaler Pflege Ihrer Bäume.",
                image:
                  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop",
              },
              {
                title: "Notfallservice",
                description:
                  "Schnelle Hilfe bei Sturmschäden oder akutem Schädlingsbefall.",
                image:
                  "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&auto=format&fit=crop",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-white to-background"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Kontakt
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-primary/70">
              Haben Sie Fragen oder möchten einen Termin vereinbaren? Ich freue
              mich auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Günter Büttner
                </h3>
                <p className="text-primary/70 mb-8">
                  Ihr zuverlässiger Partner für professionelle Obstbaumpflege in
                  der Region. Mit über 30 Jahren Erfahrung garantiere ich
                  fachgerechte Arbeit und persönliche Beratung.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Telefon</div>
                    <a
                      href="tel:+49123456789"
                      className="text-secondary hover:underline"
                    >
                      +49 (0) 123 456789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">E-Mail</div>
                    <a
                      href="mailto:info@obstbaum-pfleger.de"
                      className="text-secondary hover:underline"
                    >
                      info@obstbaum-pfleger.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">
                      Einsatzgebiet
                    </div>
                    <p className="text-primary/70">
                      Ihre Region und Umgebung
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl mt-8">
                <h4 className="font-semibold text-primary mb-2">
                  Öffnungszeiten
                </h4>
                <div className="space-y-1 text-primary/70">
                  <p>Montag - Freitag: 7:00 - 18:00 Uhr</p>
                  <p>Samstag: 8:00 - 14:00 Uhr</p>
                  <p>Sonntag: Nach Vereinbarung</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Anfrage senden
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Nachricht senden
                </button>

                <p className="text-xs text-primary/60">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und
                  nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-light.jpeg"
                  alt="Der Obstbaum Pfleger Logo"
                  className="h-12 w-auto brightness-200"
                />
              </div>
              <p className="text-white/70 text-sm">
                Professionelle Obstbaumpflege mit über 30 Jahren Erfahrung. Ihr
                vertrauensvoller Partner für gesunde, ertragreiche Bäume.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#home"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Startseite
                  </a>
                </li>
                <li>
                  <a
                    href="#about-section"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Über uns
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Leistungen
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Günter Büttner</li>
                <li>Tel: +49 (0) 123 456789</li>
                <li>info@obstbaum-pfleger.de</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>
              &copy; 2025 Der Obstbaum Pfleger - Günter Büttner. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
