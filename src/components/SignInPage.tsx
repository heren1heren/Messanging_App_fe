import { FC, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';

type SignInProps = {};
export const SignIn: FC<SignInProps> = ({}) => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:3000/');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Layout>
      <div>sign in page</div>
    </Layout>
  );
};
