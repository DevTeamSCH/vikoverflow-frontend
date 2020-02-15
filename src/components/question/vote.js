import Button from "../button";
import cn from "classnames";
import { ArrowDown, ArrowUp } from "react-feather";

export const VOTE_STATE = {
  UP: "up",
  NONE: "none",
  DOWN: "down"
};

export default ({ horizontal, value, onUpvote, onDownvote, count }) => {
  // TODO show state in some way
  const isUpvoted = value === VOTE_STATE.UP;
  const isDownvoted = value === VOTE_STATE.DOWN;

  return (
    <div className={cn({ horizontal })}>
      <Button
        icon={<ArrowUp />}
        tertiary
        small={!horizontal}
        smallIcon={horizontal}
        compact={horizontal}
        onClick={onUpvote}
      />
      <span className="count">{count}</span>
      <Button
        icon={<ArrowDown />}
        tertiary
        small={!horizontal}
        smallIcon={horizontal}
        compact={horizontal}
        onClick={onDownvote}
      />

      <style jsx>{`
        div {
          color: var(--fg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        div.horizontal {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        div.horizontal > :global(*:not(:first-child)) {
          margin-left: var(--gap-half);
        }

        .count {
          display: flex;
          align-items: center;
          /* Matches vote buttons */
          min-height: 41px;
        }
      `}</style>
    </div>
  );
};
