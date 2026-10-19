import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./NavHamburguer.css";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function NavHamburguer() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const close = () => setIsOpen(false);

  // Resalta el link según la sección visible en pantalla
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Bloquear scroll, cerrar con Escape y mantener el foco dentro del menú
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = panelRef.current.querySelectorAll("a, button");
    focusables[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="mnav">
      <button
        ref={buttonRef}
        type="button"
        className={`mnav__toggle ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mnav-panel"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="mnav__bar" />
        <span className="mnav__bar" />
        <span className="mnav__bar" />
      </button>

      {createPortal(
        <>
        <div
          className={`mnav__overlay ${isOpen ? "is-open" : ""}`}
          onClick={close}
          aria-hidden="true"
        />

        <nav
          id="mnav-panel"
          ref={panelRef}
          className={`mnav__panel ${isOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="mnav__list">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`mnav__link ${active === id ? "is-active" : ""}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            download
            className="mnav__cta"
            onClick={close}
          >
            Descargar CV
          </a>
        </nav>
        </>,
        document.body
      )}
    </div>
  );
}
