export default ({ text, owner }) => (
  <div className="container">
    <span className="text">{text}</span>
    <span className="info">{owner}</span>
    <style jsx>{`
      .text {
        grid-area: text;
      }
      .info {
        grid-area: info;
        font-size: var(--font-size-small);
      }
      .container {
        display: grid;
        border: 2px solid var(--accents-3);
        background: var(--accents-3);
        padding: var(--gap-double) var(--gap);
        grid-template-areas: "text" "info";
      }
    `}</style>
  </div>
);
