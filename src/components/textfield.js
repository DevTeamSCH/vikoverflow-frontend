export default props => (
  <>
    <input {...props} type="text" />
    <style jsx>
      {`
        input {
          background: var(--accents-3);
          color: var(--fg);
          border: 2px solid var(--accents-3);
          padding: var(--gap);
          transition: all var(--transition);
          -webkit-appearance: none;
          border-radius: 0;
        }

        input:focus {
          outline: 0;
          border-color: var(--fg);
        }
      `}
    </style>
  </>
);
