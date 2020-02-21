import { useState } from "react";
import cx from "clsx";
import Tag from "../tag";
import Comment from "./comment";
import Vote, { VOTE_STATE as VOTE } from "./vote";
import Link from "../link";

// TODO if(...) {return()} instead of && flags

export default ({
  id,
  title,
  text,
  tags = [],
  owner,
  date,
  comments = [],
  showComments = false
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
        isListItem: !text
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
      <Link className="title" href={`/questions/${id}`}>
        {title}
      </Link>
      {text && <p className="text">{text}</p>}
      <div className="info-container">
        <div className="tags">
          {tags.map(t => (
            <Tag key={t.id} name={t} />
          ))}
        </div>
        <span className="info">
          {owner ? (
            <Link href={`/users/${owner.id}`}>{owner.full_name}</Link>
          ) : (
            <span>Anonymous</span>
          )}
          {` - ${date}`}
        </span>
      </div>
      {showComments && (
        <div className="comments-container">
          {comments.map(c => (
            <Comment key={c.id} {...c} />
          ))}
        </div>
      )}
      <style jsx>{`
        .container :global(.title),
        .text {
          margin: 0;
        }

        .container :global(.title) {
          grid-area: title;
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
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
          grid-template-areas: "voting title" "voting text" "voting info";
          grid-template-columns: 41px 1fr;
        }

        .container.hasComment {
          grid-template-areas: "voting title" "voting text" "voting info" ". comments";
        }

        .container.isListItem {
          grid-template-areas: "voting title" "voting info";
        }

        .info-container {
          grid-area: info;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .info {
          font-size: var(--font-size-small);
        }
      `}</style>
    </div>
  );
};
