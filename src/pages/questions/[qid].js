import Page from "../../components/page";
import Question from "../../components/question";
import Answer, { AnswerRow } from "../../components/answer";
import fetchWrapper from "../../lib/fetch-wrapper";

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

QuestionPage.getInitialProps = async ({ query, req, res }) => {
  const { qid } = query;

  let question = await fetchWrapper(`/api/v1/questions/${qid}`, req, res);
  return {question: question};
};

export default QuestionPage;
