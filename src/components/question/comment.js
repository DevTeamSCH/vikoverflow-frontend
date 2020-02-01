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
    <div className="voting-container">
      <Button iconOnly small tertiary>
        <ArrowUp size={15} />
      </Button>
      <span className="karma">15</span>
      <Button iconOnly small tertiary>
        <ArrowDown size={15} />
      </Button>
    </div>
    <div className="comment-text">{text}</div>
    <div className="meta-text">
      <span className="owner">- {owner}</span>
      <span className="date"> - {created_at}</span>
      {updated_at && <span className="date"> (Szerkesztve: {updated_at})</span>}
    </div>
    <style jsx>{`
    .date {
      color: var(--accents-2)
    }
    
    .container {
      font-size: 14px;
      display: grid;
      grid-template-areas: "voting text" "voting meta";
      grid-template-columns: auto 1fr;
      justify-items: start;
      margin-top: var(--gap);
      padding-top: var(--gap);
    }
    
    .container + .container {
      border-top: 1px var(--accents-3) solid;
    }
    
    .comment-text {
      grid-area: text
      padding-bottom: var(--gap);
      align-self: start;
    }
    
    .meta-text {
      grid-area: meta;
      align-self: end;
    }
      
    .voting-container {
      grid-area: voting;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    `}</style>
  </div>
);
