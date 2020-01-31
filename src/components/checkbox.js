import { useState } from "react";
import cn from "classnames";
import { Check } from "react-feather";

// TODO remove inner state

export default ({ children }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <label>
      <input checked={checked} onChange={handleChange} type="checkbox" />
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
          margin: 2px;
          border: 3px solid var(--lighter-gray);
          background: var(--black);
          color: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }

        .check.checked {
          background: var(--white);
          border-color: var(--white);
          color: var(--black);
        }

        label:hover .check:not(.checked) {
          background: var(--gray);
          color: var(--gray);
        }

        .text {
          margin-left: var(--gap-half);
        }
      `}</style>
    </label>
  );
};
