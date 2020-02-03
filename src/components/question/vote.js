import Button from "../button";
import cn from "classnames";
import { ArrowDown, ArrowUp } from "react-feather";

export const VOTE_STATE = {
  UP: "up",
  NONE: "none",
  DOWN: "down"
};

export default ({ horizontal, value, onUpvote, onDownvote, count }) => {
  const arrowSize = horizontal ? 15 : 21;
  const isUpvoted = value === VOTE_STATE.UP;
  const isDownvoted = value === VOTE_STATE.DOWN;

  return (
    <div className={cn({ horizontal })}>
      <Button
        iconOnly
        tertiary
        small={!horizontal}
        compact={horizontal}
        onClick={onUpvote}
      >
        <ArrowUp
          size={arrowSize}
          color={isUpvoted ? "var(--green)" : "var(--fg)"}
        />
      </Button>
      <span>{count}</span>
      <Button
        iconOnly
        tertiary
        small={!horizontal}
        compact={horizontal}
        onClick={onDownvote}
      >
        <ArrowDown
          size={arrowSize}
          color={isDownvoted ? "var(--red)" : "var(--fg)"}
        />
      </Button>

      <style jsx>{`
        div {
          color: var(--fg);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        div.horizontal {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        div.horizontal > :global(*:not(:first-child)) {
          margin-left: var(--gap-half);
        }
      `}</style>
    </div>
  );
};
