export default ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        overflow-x: scroll;
      }
      div > :global(*:not(:first-child)) {
        margin-left: var(--gap-half);
      }
    `}</style>
  </div>
);
