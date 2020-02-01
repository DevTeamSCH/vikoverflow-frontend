import Page from "../components/page";
import Question from "../components/question";

const questions = [
  {
    title: "This is the long title of a very important question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
    tags: ["javascript", "frontend", "react"],
    author: "vassbence",
    date: "2020/01/10",
    comments: [
      {
        text: "Test comment 1",
        owner: "test-user",
        updated_at: "2020-02-01 12:31:00",
        created_at: "2020-01-01 12:34:56"
      },
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
        owner: "test2",
        created_at: "2020-01-01 12:34:56"
      }
    ]
  },
  {
    title: "This is the long title of a very important question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
    tags: ["javascript", "frontend", "react"],
    author: "vassbence",
    date: "2020/01/10",
    comments: [
      { text: "Test comment 1" },
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus."
      }
    ]
  },
  {
    title: "This is the long title of a very important question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
    tags: ["javascript", "frontend", "react"],
    author: "vassbence",
    date: "2020/01/10",
    comments: []
  },
  {
    title: "This is the long title of a very important question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
    tags: ["javascript", "frontend", "react"],
    author: "vassbence",
    date: "2020/01/10",
    comments: []
  },
  {
    title: "This is the long title of a very important question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
    tags: ["javascript", "frontend", "react"],
    author: "vassbence",
    date: "2020/01/10",
    comments: []
  }
];

export default () => (
  <Page pageTitle="Főoldal" footer>
    <div>
      {questions.map(q => (
        <Question className="item" {...q} />
      ))}
    </div>
    <style jsx>{`
      div {
        margin-top: var(--gap-double);
      }

      div > :global(*:not(:first-child)) {
        margin-top: var(--gap);
      }
    `}</style>
  </Page>
);
