import CardCarrerEdu from "./CardCarrerEdu";
export default function Education() {
  return (
    <div className="Education">
      <CardCarrerEdu
        title="Professional Developer"
        institution="Digital House"
        year="2025 - En curso"
      />
        <CardCarrerEdu
          title="Frontend Developer"
          institution="Digital House"
          year="2025 - 2026 (Graduado)"
        />
      <CardCarrerEdu
        title="Iniciacion al desarrollo con IA"
        institution="BigSchool & MoureDev"
        year="2/2026"
      />
      <CardCarrerEdu
        title="Curso de React"
        institution="Talento Tech"
        year="08/2025 - 12/2025 (Graduado)"
      />
      <CardCarrerEdu
        title="Tecnicatura universitaria en Programación"
        institution="Universidad Provincial del Sudoeste"
        year="2024 - 2025 (Graduado)"
      />
    </div>
  );
}
