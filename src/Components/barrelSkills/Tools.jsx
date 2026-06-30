export default function Tools() {
  return (
    <div
      style={{
        marginTop: "20px",
        border: "1px solid #ccc",
        padding: "10px 40px",
        borderRadius: "8px",
        height: "auto",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "calc(12px + 1vmin)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 15px #d3aa23ff";
        e.currentTarget.style.transition = "all 0.3s ease";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transition = "all 0.3s ease";
      }}
    >
      <h2>Herramientas</h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          width: "200px",
        }}
      >
        {Tool.map((tech) => (
          <li
            key={tech.nombre}
            style={{
              marginBottom: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "drop-shadow(0 0 15px #d3aa23ff)";
              e.currentTarget.style.transition = "all 0.3s ease";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transition = "all 0.3s ease";
            }}
          >
            <img
              src={tech.imgUrl}
              alt={tech.nombre}
              style={{ width: "100px" }}
            />
            <span>{tech.nombre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

let Tool = [
  {
    nombre: "Git",
    imgUrl: "/git.png",
  },
  {
    nombre: "GitHub",
    imgUrl: "/github.png",
  },
  {
    nombre: "VS Code",
    imgUrl: "/vscode.png",
  },
  {
    nombre: "Docker",
    imgUrl: "/docker.png",
  },
  {
    nombre: "Postman",
    imgUrl:
      "https://img.icons8.com/?size=100&id=IoYmHUxgvrFB&format=png&color=000000",
  },
  {
    nombre: "Claude",
    imgUrl: "/claude.webp",
  },
];
