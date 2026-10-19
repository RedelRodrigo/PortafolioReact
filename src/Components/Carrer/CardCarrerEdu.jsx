export default function CardCarrerEdu({ title, institution, year }) {
  return (
    <div
      className="CardCarrerEdu"
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
      <h2>{title}</h2>
      <p style={{ color: "#000000c0" }}>{institution}</p>
      <p
        style={{
          fontWeight: "bold",
          backgroundColor: "rgba(71, 71, 69, 0.38)",
          display: "inline-block",
          padding: "2px 6px",
          borderRadius: "4px",
          marginTop: "10px",
          color: "#1f1f1fff",
        }}
      >
        {year}
      </p>
    </div>
  );
}
