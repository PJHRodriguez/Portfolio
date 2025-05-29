import { Briefcase, Code, Computer, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Desarrolador web</h3>
            <p className="text-muted-foreground">
              Soy un desarrollador web autodidacta con pasión por crear
              aplicaciones web accesibles, responsivas y de alto rendimiento
              utilizando tecnologías modernas.
            </p>

            <p className="text-muted-foreground">
              Me interesa profundamente el desarrollo web móvil, buscando
              siempre optimizar la experiencia del usuario en dispositivos
              móviles. Además, tengo un creciente interés en el ámbito de las
              tecnologías de la información, con el objetivo de ampliar mis
              habilidades y contribuir a soluciones innovadoras en el sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover shadow-xs shadow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo web</h4>
                  <p className="text-muted-foreground">
                    Creación de sitios web y aplicaciones web modernas,
                    accesibles y optimizadas para dispositivos móviles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover shadow-xs shadow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                    Diseño de interfaces de usuario intuitivas y experiencias de
                    usuario atractivas y funcionales.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover shadow-xs shadow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Computer className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Tecnologías de la Información
                  </h4>
                  <p className="text-muted-foreground">
                    Exploración y aplicación de soluciones tecnológicas para
                    optimizar sistemas y procesos informáticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
