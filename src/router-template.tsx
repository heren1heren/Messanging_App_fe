import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  /**
   * App redirects to sign in page
   * if authorization is completed -> app redirects to homePage routes
   */
  return <Layout> I am app page</Layout>;
};

export const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default App;
