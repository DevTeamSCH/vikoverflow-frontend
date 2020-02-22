export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        width: 200px;
        border: 2px solid var(--accents-2);
      }
    `}</style>
  </div>
);
