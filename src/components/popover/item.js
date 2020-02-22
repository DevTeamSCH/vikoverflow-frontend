export default ({ children, onClick }) => (
  <div onClick={onClick}>
    {children}
    <style jsx>{`
      div {
        padding: var(--gap-half) var(--gap);
        cursor: pointer;
        transition: all var(--transition);
      }

      div:hover,
      div:focus-within {
        background: var(--accents-3);
      }

      div > * {
        display: flex;
        margin: calc(-1 * var(--gap-half)) calc(-1 * var(--gap));
      }
    `}</style>
  </div>
);
