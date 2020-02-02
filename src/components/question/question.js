import { useState } from "react";
import Link from "next/link";
import Tag from "./tag";
import Comment from "./comment";
import Vote, { VOTE_STATE as VOTE } from "./vote";

// TODO refactor link (a) component

export default ({ id, title, text, tags, author, date, comments }) => {
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
      </div>
      <Link href={`/questions/${id}`}>
        <a className="title">{title}</a>
      </Link>
      <p className="text">{text}</p>
      <div className="info-container">
        <div className="tags">
          {tags.map(t => (
            <Tag key={t.id} {...t} />
          ))}
        </div>
        <span className="info">
          <Link href={`/users/${author}`}>
            <a>{author}</a>
          </Link>
          {` - ${date}`}
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
          grid-template-areas: "voting title" "voting text" "voting info" ${comments?.length >
            0
              ? `". comments"`
              : ""};
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

        .title,
        .text {
          margin: 0;
        }

        .title {
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
        }

        .info-container {
          grid-area: info;
          display: flex;
          flex-direction: row;
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
