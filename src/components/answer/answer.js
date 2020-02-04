import Vote, { VOTE_STATE as VOTE } from "../question/vote";
import { useState } from "react";
import Link from "next/link";
import Tag from "../question/tag";
import Comment from "../question/comment";
import { Check } from "react-feather";

export default ({
  id,
  text,
  owner,
  vote_count,
  user_vote,
  is_accepted,
  comments
}) => {
  const [userVote, setVote] = useState(VOTE.NONE);
  const handleUpvote = () =>
    setVote(userVote === VOTE.UP ? VOTE.NONE : VOTE.UP);
  const handleDownvote = () =>
    setVote(userVote === VOTE.DOWN ? VOTE.NONE : VOTE.DOWN);

  return (
    <div className="container">
      <div className="voting-container">
        <Vote
          value={userVote}
          count={12}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        {is_accepted ? <Check color="green" /> : ""}
      </div>
      <p className="text">{text}</p>
      <div className="info-container">
        <span className="info">
          <Link href={`/users/${owner}`}>
            <a>{owner}</a>
          </Link>
          {` - 1970-01-01`}
        </span>
      </div>
      {comments?.length > 0 && (
        <div className="comments-container">
          {comments.map(c => (
            <Comment key={c.id} {...c} />
          ))}
        </div>
      )}
      {/* removing bottom grid gap if comment container is empty by not listing it as an area */}
      <style jsx>{`
        .container {
          grid-template-areas: "voting text" "voting info" ${comments?.length >
            0
              ? `". comments"`
              : ""};
          grid-template-columns: auto 1fr;
        }
      `}</style>

      <style jsx>{`
        a {
          cursor: pointer;
          text-decoration: none;
          color: var(--fg);
        }

        a:hover {
          text-decoration: underline;
        }

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

        .voting-container > :global(div) {
          height: auto;
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
        }

        .info-container {
          grid-area: info;
        }

        .info {
          font-size: var(--font-size-small);
        }
      `}</style>
    </div>
  );
};
