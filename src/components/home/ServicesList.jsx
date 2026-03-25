// components/ServicesList.jsx

const services = [
  {
    number: "01.",
    title: "Vakanzen nachhaltig",
    titleHighlight: "und gezielt besetzen",
    description:
      "In der heutigen Arbeitswelt stehen Unternehmen vor komplexen Herausforderungen. Märkte verändern sich schneller, technologische Innovationen verschieben Geschäftsmodelle und die Ansprüche von Fach- und Führungskräften entwickeln sich ständig weiter. Wer Schlüsselpositionen mit den richtigen Talenten besetzen will, muss mehr tun als klassische Stellenausschreibungen aufzugeben oder auf Empfehlungen zu hoffen.",
    image: "/images/service-1.jpg",
  },
  {
    number: "02.",
    title: "Individuelle Strategie",
    titleHighlight: "für jedes Mandat",
    description:
      "Jedes Mandat beginnt mit einer präzisen Analyse. Wir arbeiten eng mit Ihnen zusammen, um die Anforderungen der Position zu verstehen, die Unternehmenskultur zu erfassen und die Schlüsselkompetenzen zu definieren. Dabei geht es nicht nur um fachliche Qualifikationen. Soft Skills, Führungsstil, Motivation und langfristige Entwicklungsperspektiven sind entscheidend für den nachhaltigen Erfolg einer Besetzung.",
    image: "/images/service-2.jpg",
  },
  {
    number: "03.",
    title: "Flexibilität",
    titleHighlight: null,
    description:
      "Ein weiterer zentraler Vorteil unserer Arbeit ist die Flexibilität. Wir passen unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an. Ob punktuelle Unterstützung bei einer kritischen Vakanz, langfristige Begleitung über mehrere Positionen oder strategische Beratung für den gesamten Talentbereich: coreberg bietet Lösungen, die genau auf Ihre Situation zugeschnitten sind.",
    image: "/images/service-3.jpg",
  },
];

export default function ServicesList() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-20">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-sm text-gray-400 font-light">{service.number}</p>
            <h2 className="text-2xl font-semibold leading-snug text-gray-900">
              {service.title}{" "}
              {service.titleHighlight && (
                <span className="text-blue-400 font-light">
                  {service.titleHighlight}
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-120 object-cover rounded-sm shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
