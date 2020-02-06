import Vote from "./vote";
import Link from "next/link";
import cn from "classnames";

// TODO refactor to css grid
// TODO refactor link (a) component

// TODO refactor, should not set border top for himself as its ugly to pass down isParentAccepted

export default ({
  id,
  text,
  created_at,
  updated_at,
  owner,
  vote_count,
  user_vote,
  isParentAccepted
}) => (
  <div className={cn("container", { acceptedParent: isParentAccepted })}>
    <div className="comment-text">{text}</div>
    <div className="comment-meta">
      <div className="voting-container">
        <Vote horizontal count={32} />
      </div>
      <div className="meta-text">
        <Link href={`/users/${owner}`}>
          <a>{owner}</a>
        </Link>
        {" - "}
        {updated_at ? (
          <>
            {updated_at} <em>(szerkesztve)</em>
          </>
        ) : (
          created_at
        )}
      </div>
    </div>
    <style jsx>{`
      a {
        cursor: pointer;
        text-decoration: none;
        color: var(--fg);
      }

      a:hover {
        text-decoration: underline;
      }

      .container {
        font-size: var(--font-size-small);
        border-top: 2px solid var(--accents-3);
        margin-top: var(--gap);
        padding-top: var(--gap);
      }

      .container.acceptedParent {
        border-color: var(--green);
      }

      .comment-text {
        padding-bottom: var(--gap);
      }

      .comment-meta {
        display: flex;
        align-items: center;
      }

      .meta-text {
        margin-left: auto;
      }

      .voting-container {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);
