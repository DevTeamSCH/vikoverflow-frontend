import { cloneElement } from "react";
import cx from "clsx";

// TODO disabled state

export default ({
  children,
  onClick,
  small,
  compact,
  secondary,
  tertiary,
  icon,
  smallIcon
}) => (
  <button
    onClick={onClick}
    className={cx({
      small,
      compact,
      secondary,
      tertiary,
      iconOnly: icon && !children
    })}
  >
    {icon && cloneElement(icon, { size: smallIcon ? 15 : 21 })}
    {children}
    <style jsx>{`
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--bg);
        background: var(--fg);
        padding: calc(0.75 * var(--gap)) var(--gap);
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
        background: var(--accents-1);
        border-color: var(--accents-1);
      }

      button > :global(svg) {
        margin-right: var(--gap-half);
      }

      button.small {
        padding: calc(0.625 * var(--gap)) calc(0.875 * var(--gap));
        font-size: var(--font-size-small);
      }

      button.secondary {
        background: var(--accents-3);
        color: var(--fg);
      }

      button.secondary:hover {
        background: var(--accents-2);
      }

      button.tertiary {
        background: transparent;
        color: var(--fg);
      }

      button.tertiary:hover {
        background: var(--accents-3);
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

      button.compact {
        padding: calc(0.625 * var(--gap-half));
      }
    `}</style>
  </button>
);
