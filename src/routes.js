import {ForbiddenPage, HomePage, NewQuestionPage, QuestionDetailPage, QuestionsPage} from "./pages";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: '/login',
    component: LoginPage,
    logoutRequired: true,
    noLayout: true
  },
  {
    path: "/",
    component: HomePage,
    loginRequired: true
  },
  {
    path: "/q/browse",
    component: QuestionsPage,
    loginRequired: true
  },
  {
    path: "/q/new",
    component: NewQuestionPage,
    loginRequired: true
  },
  {
    path: "/q/:id",
    component: QuestionDetailPage,
    loginRequired: true
  },
  {
    path: "/forbidden",
    component: ForbiddenPage,
    noLayout: true
  },
];
export default routes;