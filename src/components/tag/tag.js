import Link from "next/link";
import { X } from "react-feather";

export default ({ id, name, deletable = false, onDelete }) => (
  <div>
    <Link href={`/tags/${id}`}>
      <span className="link">{name}</span>
    </Link>
    {deletable && (
      <span className="cross" onClick={onDelete}>
        <X size={14} />
      </span>
    )}

    <style jsx>{`
      div {
        display: grid;
        color: var(--fg);
        user-select: none;
        font-size: 0.75rem;
        grid-auto-flow: column;
        grid-gap: 2px;
      }

      .link {
        padding: calc(1 / 2 * var(--gap-half)) var(--gap-half);
      }

      .link,
      .cross {
        background: var(--accents-3);
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }

      .link:hover,
      .cross:hover {
        background: var(--accents-2);
      }

      .cross {
        padding: 0 calc(1 / 2 * var(--gap-half));
      }
    `}</style>
  </div>
);
