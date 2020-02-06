import toggleDarkMode from "../../lib/toggle-dark-mode";

export default () => (
  <button onClick={toggleDarkMode}>
    <style jsx>{`
      button {
        --size: 1.25rem;
        padding: 0;
        height: var(--size);
        width: var(--size);
        border: 2px solid var(--fg);
        border-radius: 100%;
        background: transparent;
        cursor: pointer;
      }
      button:hover,
      button:focus {
        outline: none;
      }
    `}</style>
  </button>
);
