export default ({ placeholder }) => {
  return (
    <>
      <input placeholder={placeholder} />
      <style jsx>{`
        input {
          background: var(--gray);
          color: var(--white);
          border: 2px solid var(--gray);
          padding: calc(0.75 * var(--gap)) var(--gap);
          font-size: inherit;
          transition: all var(--transition);
          flex: 1;
          width: 100%;
          line-height: inherit;

          /* removing safari border */
          -webkit-appearance: none;
          border-radius: 0;
        }

        input:focus {
          outline: 0;
          border-color: var(--white);
        }
      `}</style>
    </>
  );
};
