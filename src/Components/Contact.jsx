import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div id="contacto">
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(22px + 1.5vw)",
          textAlign: "center",
          margin: "60px 0",
          paddingTop: "100px",
        }}
      >
        Contacto
      </h1>

      <div
        className="contact-container"
        style={{
          gap: "50px 200px",
          textAlign: "center",
          marginBottom: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "50px 100px",
        }}
      >
        <a
          href="https://github.com/RedelRodrigo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: "column",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "drop-shadow(0 0 8px yellow)";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          <Github />
          GitHub: Redel Rodrigo
        </a>

        <a
          href="https://linkedin.com/in/RedelRodrigo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: "column",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "drop-shadow(0 0 8px yellow)";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          <Linkedin />
          LinkedIn: Redel Rodrigo
        </a>
        <a
          href="mailto:Rodryredel@gmail.com?subject=Contacto desde Portfolio&body=Hola, me gustaría ponerme en contacto contigo..."
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: "column",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "drop-shadow(0 0 8px yellow)";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
            e.currentTarget.style.transition = "all 0.3s ease";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          <Mail />
          Email: Rodryredel@gmail.com
        </a>
      </div>
    </div>
  );
}
