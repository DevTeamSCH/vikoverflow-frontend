import { useState } from "react";
import Vote, { VOTE_STATE as VOTE } from "./vote";
import Link from "next/link";
import Tag from "./tag";
import { Check } from "react-feather";

export default ({
  id,
  title,
  owner,
  vote_count,
  user_vote,
  answer_count,
  answered,
  tags
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
          value={user_vote}
          count={vote_count}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      </div>
      <div className="title-container">
        <Link href={`/questions/${id}`}>
          <a className="title">{title}</a>
        </Link>
      </div>
      <div className="tags-container">
        <div className="tags">
          {tags.map(t => (
            <Tag key={t.id} {...t} />
          ))}
        </div>
      </div>
      <div className="meta-container">
        <span className="info">
          {answered ? <Check color="green" /> : ""}
          {answer_count} answers
        </span>
        <span className="info">
          <Link href={`/users/${owner}`}>
            <a>{owner}</a>
          </Link>
          {` - 1970-01-01`}
        </span>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: auto 1fr;
          grid-template-areas: "voting title" "voting tags" "voting meta";
          border: 2px solid var(--accents-3);
          padding: var(--gap-double) var(--gap);
        }

        .voting-container {
          grid-area: voting;
        }

        .title-container {
          grid-area: title;
        }

        .tags-container {
          grid-area: tags;
        }

        .meta-container {
          grid-area: meta;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tags > :global(*:not(:first-child)) {
          margin-left: var(--gap-half);
        }

        .info {
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};
