import { useEffect, useRef, useState } from "react";
import "./ContactSidebar.css";

// Cambiá estos datos por los tuyos
const CONTACTS = [
  {
    label: "GitHub",
    href: "https://github.com/RedelRodrigo",
    external: true,
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.9c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/RedelRodrigo",
    external: true,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.12V21h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54V21h-4V9.75Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:Rodryredel@gmail.com?subject=Contacto desde Portfolio&body=Hola, me gustaría ponerme en contacto contigo...",
    external: false,
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.6 2 7.4 5.4L19.4 7H4.6ZM4 8.9V17h16V8.9l-8 5.8-8-5.8Z" />
    ),
  },
];

export default function ContactSidebar() {
  const [hidden, setHidden] = useState(false);
  const [animated, setAnimated] = useState(false); // evita animar en la carga inicial
  const hiddenRef = useRef(false);

  useEffect(() => {
    const update = (next) => {
      if (next === hiddenRef.current) return;
      hiddenRef.current = next;
      setAnimated(true);
      setHidden(next);
    };

    const target = document.getElementById("contacto");

    // Si no existe #contacto, se oculta al llegar casi al final de la página
    if (!target) {
      console.warn('ContactSidebar: no hay ningún elemento con id="contacto"');
      const onScroll = () =>
        update(
          window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 300,
        );
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Se oculta cuando la sección "Contacto" de abajo está visible
    const observer = new IntersectionObserver(
      ([entry]) => update(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const stateClass = hidden ? "csb--out" : animated ? "csb--in" : "";

  return (
    <aside className={`csb ${stateClass}`} aria-label="Contacto rápido">
      <ul className="csb__list">
        {CONTACTS.map(({ label, href, external, icon }) => (
          <li key={label}>
            <a
              href={href}
              className="csb__link"
              aria-label={label}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
              >
                {icon}
              </svg>
              <span className="csb__tip">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
