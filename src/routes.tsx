import { HomePage } from './components/HomePage';
import { Setting } from './components/SettingPage';
import { SignIn } from './components/SignInPage';
import { SignUp } from './components/SignUpPage';
import App, { ErrorPage } from './router-template';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: 'signIn', // new element
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'signUp', // new element
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'settings/:id', // new element
    element: <Setting />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'homePage/:id', // new element
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];
export default routes;
