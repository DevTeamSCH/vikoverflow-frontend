export default ({ children }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        font-size: 0.75rem;
        padding: calc(1 / 2 * var(--gap-half)) var(--gap-half);
        background: var(--gray);
        user-select: none;
        cursor: pointer;
        transition: all var(--transition);
      }

      span:hover {
        background: var(--lighter-gray);
      }
    `}</style>
  </span>
);
