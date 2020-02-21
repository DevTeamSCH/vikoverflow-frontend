export default ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      div :global(*:not(:first-child)) {
        margin-left: var(--gap-half);
      }
    `}</style>
  </div>
);
