import toggleDarkMode from "../../lib/toggle-dark-mode";

export default () => {
  return (
    <button onClick={toggleDarkMode}>
      <style jsx>{`
        button {
          --size: 20px;
          height: var(--size);
          width: var(--size);
          border: 2px solid var(--fg);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transition: border-color 0.1s ease-in-out;
        }
        button:hover,
        button:focus {
          outline: none;
        }
      `}</style>
    </button>
  );
};
