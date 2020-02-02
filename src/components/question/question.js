import Button from "../button";
import Tag from "./tag";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "react-feather";

export default ({ id, title, text, tags, author, date }) => (
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
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .karma {
        user-select: none;
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

      .info {
        font-size: 0.875rem;
      }
    `}</style>
  </div>
);
