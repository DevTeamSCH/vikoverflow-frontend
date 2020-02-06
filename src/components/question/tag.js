import Link from "next/link";

export default ({ id, name }) => (
  <Link href={`/tags/${id}`}>
    <a>
      {name}
      <style jsx>{`
        a {
          font-size: 0.75rem;
          padding: calc(1 / 2 * var(--gap-half)) var(--gap-half);
          background: var(--accents-3);
          user-select: none;
          cursor: pointer;
          transition: background var(--transition);
          text-decoration: none;
          color: var(--fg);
        }

        a:hover {
          background: var(--accents-2);
        }
      `}</style>
    </a>
  </Link>
);
