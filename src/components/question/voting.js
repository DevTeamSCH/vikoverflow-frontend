import Button from "../button";
import cn from "classnames";
import { ArrowDown, ArrowUp } from "react-feather";

export default ({ vote_count, user_vote, vote_changed, small, horizontal }) => {
  let vertical = !horizontal;
  let arrowSize = small ? 15 : 21;

  return (
    <div className={cn({ horizontal, vertical })}>
      <Button
        iconOnly
        small
        tertiary
        onClick={() => vote_changed(user_vote === "up" ? "none" : "up")}
      >
        <ArrowUp
          size={arrowSize}
          color={user_vote === "up" ? "orange" : "black"}
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
          color={user_vote === "down" ? "blue" : "black"}
        />
      </Button>

      <style jsx>{`
        div.horizontal {
          display: flex;
          align-items: center;
        }

        div.vertical {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
