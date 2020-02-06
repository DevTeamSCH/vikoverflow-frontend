import Link from "next/link";

// TODO throw error / propTypes if no href

export default ({ external, href, children, className }) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            text-decoration: none;
            color: var(--fg);
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={className}>
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            text-decoration: none;
            color: var(--fg);
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </a>
    </Link>
  );
};
