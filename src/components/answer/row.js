export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div + div {
        margin-top: var(--gap);
      }
    `}</style>
  </div>
);
