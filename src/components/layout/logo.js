import Link from "next/link";

export default () => (
  <Link href="/">
    <a className="brand">
      <span>vik</span>
      <span>overflow</span>
      <style jsx>{`
        a {
          font-weight: 700;
          font-size: 24px;
          letter-spacing: -0.03em;
          text-decoration: none;
        }

        span:first-of-type {
          color: var(--theme-primary);
        }

        span:nth-of-type(2) {
          color: var(--theme-secondary);
        }
      `}</style>
    </a>
  </Link>
);
