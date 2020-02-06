import Vote, { VOTE_STATE as VOTE } from "../question/vote";
import { useState } from "react";
import cn from "classnames";
import Comment from "../question/comment";
import Link from "../link";

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
      className={cn("container", {
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
      </div>
      <p className="text">{text}</p>
      <div className="info-container">
        <div className="info">
          <Link href={`/users/${owner}`}>{owner}</Link>
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
          grid-template-columns: auto 1fr;
        }

        .container.hasComment {
          grid-template-areas: "voting text" "voting info" ". comments";
        }

        .container.isAccepted {
          border-color: var(--green);
          background: var(--green-accent);
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
