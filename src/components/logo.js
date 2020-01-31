import Link from "next/link";

export default () => (
  <Link href="/">
    <a>
      vikoverflow
      <style jsx>{`
        a {
          font-weight: var(--font-weight-bold);
          font-size: 1.5rem;
          letter-spacing: -0.015em;
          user-select: none;
          text-decoration: none;
          color: var(--white);
        }
      `}</style>
    </a>
  </Link>
);
