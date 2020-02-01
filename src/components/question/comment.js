import Button from "../button";
import { ArrowDown, ArrowUp } from "react-feather";

export default ({
  id,
  text,
  created_at,
  updated_at,
  owner,
  vote_count,
  user_vote
}) => (
  <div className="container">
    <div className="comment-text">{text}</div>
    <div className="comment-meta">
      <div className="voting-container">
        <Button iconOnly small tertiary>
          <ArrowUp size={15} />
        </Button>
        <span className="karma">15</span>
        <Button iconOnly small tertiary>
          <ArrowDown size={15} />
        </Button>
      </div>
      <div className="meta-text">
        <span className="owner">- {owner}</span>
        <span className="date"> - {created_at}</span>
        {updated_at && (
          <span className="date"> (Szerkesztve: {updated_at})</span>
        )}
      </div>
    </div>
    <style jsx>{`
      .date {
        color: var(--accents-2);
      }

      .container {
        font-size: 14px;
        margin-top: var(--gap);
        padding-top: var(--gap);
      }

      .container + .container {
        border-top: 1px var(--accents-3) solid;
      }

      .comment-text {
        padding-bottom: var(--gap);
      }

      .comment-meta {
        display: flex;
        align-items: center;
      }

      .meta-text {
        flex-grow: 1;
      }

      .voting-container {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);
