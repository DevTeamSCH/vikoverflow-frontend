import Button from "../button";
import cn from "classnames";
import { ArrowDown, ArrowUp } from "react-feather";

export default ({ vote_count, user_vote, vote_changed, small, horizontal }) => {
  const arrowSize = small ? 15 : 21;

  return (
    <div className={cn({ horizontal })}>
      <Button
        iconOnly
        small
        tertiary
        onClick={() => vote_changed(user_vote === "up" ? "none" : "up")}
      >
        <ArrowUp
          size={arrowSize}
          color={user_vote === "up" ? "var(--green)" : "var(--fg)"}
        />
      </Button>
      <span>{vote_count}</span>
      <Button
        iconOnly
        small
        tertiary
        onClick={() => vote_changed(user_vote === "down" ? "none" : "down")}
      >
        <ArrowDown
          size={arrowSize}
          color={user_vote === "down" ? "var(--red)" : "var(--fg)"}
        />
      </Button>

      <style jsx>{`
        div {
          color: var(--fg);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 100%;
        }

        div.horizontal {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
