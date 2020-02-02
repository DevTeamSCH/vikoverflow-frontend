import cn from "classnames";
import { Check } from "react-feather";

// TODO disabled state

export default ({ checked, onChange, children }) => (
  <label>
    <input checked={checked} onChange={onChange} type="checkbox" />
    <span className={cn("check", { checked })}>
      <Check strokeWidth={4} />
    </span>
    <div className="text">{children}</div>
    <style jsx>{`
      label {
        display: flex;
        flex-direction: row;
        align-items: center;
        user-select: none;
        cursor: pointer;
      }

      input {
        display: none;
      }

      .check {
        width: 20px;
        height: 20px;
        margin: 2px 0;
        border: 3px solid var(--accents-2);
        background: var(--bg);
        color: var(--bg);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition);
      }

      .check.checked {
        background: var(--fg);
        border-color: var(--fg);
        color: var(--bg);
      }

      label:hover .check:not(.checked) {
        background: var(--accents-3);
        color: var(--accents-3);
      }

      .text {
        margin-left: var(--gap-half);
      }
    `}</style>
  </label>
);
