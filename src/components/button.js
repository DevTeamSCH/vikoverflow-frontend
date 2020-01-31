import cn from "classnames";

export default ({ children, small, secondary, tertiary, iconOnly }) => (
  <button className={cn({ small, secondary, tertiary, iconOnly })}>
    {children}
    <style jsx>{`
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        background: var(--white);
        padding: calc(0.875 * var(--gap)) var(--gap);
        border: 0;
        font-size: inherit;
        font-weight: var(--font-weight-medium);
        cursor: pointer;
        transition: all var(--transition);
        line-height: inherit;
      }

      button:focus {
        outline: 0;
      }

      button:hover {
        background: var(--lightest-gray);
        border-color: var(--lightest-gray);
      }

      button > :global(svg) {
        margin-right: var(--gap-half);
      }

      button.small {
        padding: calc(0.625 * var(--gap)) calc(0.875 * var(--gap));
        font-size: 0.875rem;
      }

      button.secondary {
        background: var(--gray);
        color: var(--white);
      }

      button.secondary:hover {
        background: var(--lighter-gray);
      }

      button.tertiary {
        background: transparent;
        color: var(--white);
      }

      button.tertiary:hover {
        background: var(--gray);
      }

      button.iconOnly {
        padding: calc(0.875 * var(--gap));
      }

      button.small.iconOnly {
        padding: calc(0.625 * var(--gap));
      }

      button.iconOnly > :global(svg) {
        margin-right: 0;
      }
    `}</style>
  </button>
);
