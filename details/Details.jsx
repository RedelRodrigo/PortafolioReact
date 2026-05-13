import "./details.css";

export function Details({
  top,
  left,
  size,
  color = "#5cb8ff",
  hasRings = false,
  rotationSpeed = "16s",
}) {
  return (
    <div
      className="details"
      style={{
        top: top,
        left: left,
        width: size,
        height: size,
        pointerEvents: "none",
        "--planet-color": color,
        "--spin-speed": rotationSpeed,
      }}
    >
      <div className="details-space" aria-hidden="true"></div>
      <div className="details-planet-wrapper">
        {hasRings && <div className="details-ring" aria-hidden="true"></div>}
        <div className="details-planet" aria-hidden="true">
          <div className="details-shade"></div>
          <div className="details-highlight"></div>
        </div>
      </div>
    </div>
  );
}
