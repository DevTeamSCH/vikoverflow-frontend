import { useState } from "react";
import cx from "clsx";
import { Check } from "react-feather";
import Link from "../link";

import Vote, { VOTE_STATE as VOTE } from "../question/vote";
import Comment from "../question/comment";

export default ({
  id,
  text,
  owner,
  vote_count,
  user_vote,
  is_accepted,
  comments = []
}) => {
  const [userVote, setVote] = useState(VOTE.NONE);
  const handleUpvote = () =>
    setVote(userVote === VOTE.UP ? VOTE.NONE : VOTE.UP);
  const handleDownvote = () =>
    setVote(userVote === VOTE.DOWN ? VOTE.NONE : VOTE.DOWN);

  return (
    <div
      className={cx("container", {
        hasComment: comments.length > 0,
        isAccepted: is_accepted
      })}
    >
      <div className="voting-container">
        <Vote
          value={userVote}
          count={12}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        {is_accepted ? <Check style={{ color: "var(--green)" }} /> : ""}
      </div>
      <p className="text">{text}</p>
      <div className="info-container">
        <div className="info">
          {owner ? (
            <Link href={`/users/${owner.id}`}>{owner.full_name}</Link>
          ) : (
            <span>Anonymous</span>
          )}
          {` - 1970-01-01`}
        </div>
      </div>
      {comments?.length > 0 && (
        <div className="comments-container">
          {comments.map(c => (
            <Comment isParentAccepted={is_accepted} key={c.id} {...c} />
          ))}
        </div>
      )}
      <style jsx>{`
        .text {
          margin: 0;
        }

        .text {
          grid-area: text;
        }

        .voting-container {
          grid-area: voting;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .voting-container > :global(svg) {
          margin-top: var(--gap-half);
        }

        .comments-container {
          grid-area: comments;
          margin-top: 2rem;
        }

        .container {
          border: 2px solid var(--accents-3);
          padding: var(--gap-double) var(--gap);
          display: grid;
          grid-gap: 1rem;
          grid-template-areas: "voting text" "voting info";
          grid-template-columns: 41px 1fr;
        }

        .container.hasComment {
          grid-template-areas: "voting text" "voting info" ". comments";
        }

        .container.isAccepted {
          border-color: var(--green);
        }

        .info-container {
          grid-area: info;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .info {
          font-size: var(--font-size-small);
        }
      `}</style>
    </div>
  );
};
