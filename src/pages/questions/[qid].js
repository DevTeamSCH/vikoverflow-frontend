import Page from "../../components/page";
import Question from "../../components/question";
import Answer, { AnswerRow } from "../../components/answer";
import fetchWrapper from "../../lib/fetch-wrapper";
import api from "../../lib/api";

// TODO pageTitle should be the title of the question (?) but definitely not plain

const QuestionPage = ({ question }) => {
  return (
    <Page>
      <div className="container">
        <Question showComments {...question} />
        {question.answers?.length ? (
          <>
            <h2>{question.answers.length} válasz</h2>
            <div className="answers">
              {question.answers.map(a => (
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
  const { qid } = query;
  const question = await api.get(`/api/v1/questions/${qid}`);
  return { question };
};

export default QuestionPage;
