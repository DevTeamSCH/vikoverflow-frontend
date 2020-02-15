import Link from "./link";

export default () => (
  <Link href="/" underline={false}>
    <span>vikoverflow</span>
    <style jsx>{`
      span {
        font-weight: var(--font-weight-bold);
        font-size: 1.5rem;
        letter-spacing: -0.03em;
        user-select: none;
        text-decoration: none;
        color: var(--fg);
      }
    `}</style>
  </Link>
);
