import Page from "../components/page";
import Question, { QuestionRow } from "../components/question";
import fetchWrapper from "../lib/fetch-wrapper";
import api from "../lib/api";

const Index = ({ questions }) => (
  <Page pageTitle="Főoldal" footer>
    <div className="questions">
      {questions.map(q => (
        <QuestionRow key={q.id}>
          <Question {...q} />
        </QuestionRow>
      ))}
    </div>
    <style jsx>{`
      .questions {
        margin-top: var(--gap-double);
      }
    `}</style>
  </Page>
);

Index.getInitialProps = async ctx => {
  const questions = await api.get("/api/v1/questions");
  return { questions: questions ?? [] };
};

export default Index;
