import { Back, Front, Tools, Database } from "./barrelSkills";

export default function Skills() {
  return (
    <div
      className="Skills"
      id="habilidades"
      style={{ width: "80vw", margin: "0 auto" }}
    >
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(36px + 1.5vw)",
          textAlign: "center",
          margin: "60px 0",
          paddingTop: "100px",
        }}
      >
        Habilidades
      </h1>
      <div
        style={{
          gap: "20px",
          textAlign: "center",
          marginBottom: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Front />
        <Back />
        <Database />
        <Tools />
      </div>
    </div>
  );
}
