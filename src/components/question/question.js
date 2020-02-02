import Tag from "./tag";
import Voting from "./voting";
import { useState } from "react";

export default ({ title, text, tags, author, date, comments }) => {
  let [userVote, setVote] = useState("none");

  return (
    <div className="container">
      <div className="voting-container">
        <Voting user_vote={userVote} vote_count={12} vote_changed={setVote} />
      </div>
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
      <div className="info-container">
        <div className="tags">
          {tags.map(t => (
            <Tag>{t}</Tag>
          ))}
        </div>
        <span className="author">{`${author} - ${date}`}</span>
      </div>
      <style jsx>{`
        .title,
        .text {
          margin: 0;
        }

        .title {
          grid-area: title;
        }

        .text {
          grid-area: text;
        }

        .voting-container {
          grid-area: voting;
        }

        .info-container {
          grid-area: info;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .container {
          border: 2px solid var(--accents-3);
          padding: var(--gap-double) var(--gap);
          display: grid;
          grid-template-areas: "voting title" "voting text" "voting info";
          grid-gap: 1rem;
        }

        .tags > :global(*:not(:first-child)) {
          margin-left: var(--gap-half);
        }

        .author {
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};
