export default ({ children, peldaProp, ...rest }) => (
  <button {...rest}>
    {children}
    <style jsx>{`
      button {
        background: ${peldaProp ? "red" : "var(--theme-secondary)"};
        color: white;
        line-height: 1;
        border: 0;
        border-radius: 4px;
        padding: 10px 20px;
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition);
      }

      button:hover {
        background: ${peldaProp ? "darkred" : "var(--theme-primary)"};
      }

      button:focus {
        outline: 0;
      }
    `}</style>
  </button>
);
