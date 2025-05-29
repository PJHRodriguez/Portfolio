import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4l font-bold mb-4 text-center">
          Contacta<span className="text-primary">me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estoy interesado en formar parte de un equipo profesional dentro de
          una empresa que valore el desarrollo web de calidad. Si buscas a
          alguien comprometido, con ganas de aprender y aportar, no dudes en
          contactarme.
        </p>
        <div className="">
          <div className="space-y-8">
            <h3 className="text-2xl fonrt-semibold mb-6">
              Informacion de contacto
            </h3>

            <div className="space-y-6 justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between gap-8 space-x-4">
                <div className="flex space-x-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a
                      href="tel:+523316703952"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +52 33 16 70 39 52
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Jalisco,Mexico.
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/pablo-hernandez-a42121347/"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      pablo12344445@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
