import Button from "../button";
import Tag from "./tag";
import Comment from "./comment";
import { ArrowDown, ArrowUp } from "react-feather";

export default ({ title, text, tags, author, date }) => (
  <div className="container">
    <div className="voting-container">
      <Button iconOnly small tertiary>
        <ArrowUp size={21} />
      </Button>
      <span className="karma">15</span>
      <Button iconOnly small tertiary>
        <ArrowDown size={21} />
      </Button>
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
    <div className="comments-container">
      <h4>{comments.length} komment</h4>
      {comments.map(c => (
        <Comment {...c} />
      ))}
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
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .comments-container {
        grid-area: comments;
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
        grid-template-areas: "voting title" "voting text" "voting info" ". comments";
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
