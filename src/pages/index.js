import Page from "../components/page";
import { QuestionListItem, QuestionRow } from "../components/question";

const questions = [
  {
    id: 1,
    title: "This is the long title of a very important question",
    tags: [
      { id: "javascript", name: "javascript" },
      { id: "frontend", name: "frontend" },
      { id: "ekezetesbetu", name: "ékezetesbetu" }
    ],
    owner: "vassbence",
    date: "2020/01/10",
    answer_count: 2,
    answered: true,
    vote_count: 12
  },
  {
    id: 2,
    title: "This is the long title of a very important question",
    tags: [
      { id: "javascript", name: "javascript" },
      { id: "frontend", name: "frontend" },
      { id: "ekezetesbetu", name: "ékezetesbetu" }
    ],
    owner: "vassbence",
    date: "2020/01/10",
    answer_count: 12,
    answered: true,
    vote_count: 65
  },
  {
    id: 3,
    title: "This is the long title of a very important question",
    tags: [
      { id: "javascript", name: "javascript" },
      { id: "frontend", name: "frontend" },
      { id: "ekezetesbetu", name: "ékezetesbetu" }
    ],
    owner: "vassbence",
    answer_count: 1,
    answered: false,
    vote_count: 12
  }
];

export default () => (
  <Page pageTitle="Főoldal" footer>
    <div className="questions">
      {questions.map(q => (
        <QuestionRow key={q.id}>
          <QuestionListItem {...q} />
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
