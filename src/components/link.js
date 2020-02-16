import Link from "next/link";
import cx from "clsx";

// TODO throw error / propTypes if no href

export default ({ external, href, children, className, underline = true }) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(className, { underline })}
      >
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            text-decoration: none;
            color: var(--fg);
          }

          a.underline:hover {
            text-decoration: underline;
          }
        `}</style>
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={cx(className, { underline })}>
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            text-decoration: none;
            color: var(--fg);
          }

          a.underline:hover {
            text-decoration: underline;
          }
        `}</style>
      </a>
    </Link>
  );
};
