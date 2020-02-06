import Page from "../../components/page";
import Question from "../../components/question";
import Answer, { AnswerRow } from "../../components/answer";

// TODO pageTitle should be the title of the question (?) but definitely not plain

// TODO owner?

const QuestionPage = ({ question, answers }) => {
  return (
    <Page>
      <div className="container">
        <Question showComments {...question} />
        {answers?.length ? (
          <>
            <h2>{answers.length} válasz</h2>
            <div className="answers">
              {answers.map(a => (
                <AnswerRow key={a.id}>
                  <Answer {...a} />
                </AnswerRow>
              ))}
            </div>
          </>
        ) : (
          <h1>Még nem érkezett válasz</h1>
        )}
        <style jsx>{`
          .container {
            margin-top: var(--gap-double);
          }
        `}</style>
      </div>
    </Page>
  );
};

QuestionPage.getInitialProps = async ({ query }) => {
  // ID will be in:
  // const { qid } = query;

  return {
    question: {
      id: 1,
      title: "This is the long title of a very important question",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
      tags: [
        { id: "javascript", name: "javascript" },
        { id: "frontend", name: "frontend" },
        { id: "ekezetesbetu", name: "ékezetesbetu" }
      ],
      owner: "vassbence",
      date: "2020/01/10",
      comments: [
        {
          id: 1,
          text: "Test comment 1",
          owner: "test-user",
          updated_at: "2020-02-01 12:31:00",
          created_at: "2020-01-01 12:34:56"
        },
        {
          id: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
          owner: "test2",
          created_at: "2020-01-01 12:34:56"
        }
      ],
    },
    answers: [
      {
        id: 1,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
        owner: "asdasd",
        is_accepted: true,
        comments: [
          {
            id: 1,
            text: "Test comment 1",
            owner: "test-user",
            updated_at: "2020-02-01 12:31:00",
            created_at: "2020-01-01 12:34:56"
          },
          {
            id: 2,
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eu dui vel dignissim. Donec ex nulla, convallis ut posuere in, tempor vitae augue. Sed non urna in est tempus ultrices ac vitae orci. Pellentesque in eleifend enim. Morbi bibendum vehicula est sit amet tempor. Praesent rutrum vel eros sed sagittis. Maecenas diam metus, dictum vel libero gravida, euismod vulputate turpis. Quisque molestie, mauris sed scelerisque ornare, mi justo sagittis sapien, ac vehicula magna nibh ac risus.",
            owner: "test2",
            created_at: "2020-01-01 12:34:56"
          }
        ]
      },
      {
        id: 2,
        text: "Short answer",
        owner: "asdasd",
        is_accepted: false
      }
    ]
  };
};

export default QuestionPage;
