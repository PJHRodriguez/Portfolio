import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-footer relative border-t border-gray-500 mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-800">
        &copy; {new Date().getFullYear()} Pablo Hernandez Todos los derechos
        reservados.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
