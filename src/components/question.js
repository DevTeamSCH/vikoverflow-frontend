import Button from "../components/button";
import { ArrowDown, ArrowUp } from "react-feather";

export default () => (
  <div className="container">
    <span className="voting-container">
      <Button iconOnly small tertiary>
        <ArrowUp size={21} />
      </Button>
      <span className="karma">15</span>
      <Button iconOnly small tertiary>
        <ArrowDown size={21} />
      </Button>
    </span>
    <h2 className="title">
      This is the long title of a very important question
    </h2>
    <p className="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu
      dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae
      augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in
      eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent
      rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero
      gravida, euismod vulputate turpis. Quisque molestie, mauris sed
      scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac
      risus.
    </p>
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

      .container {
        border: 2px solid var(--gray);
        padding: 2rem 1rem;
        display: grid;
        grid-template-areas: "voting title" "voting text";
        grid-gap: 1rem;
      }
    `}</style>
  </div>
);
