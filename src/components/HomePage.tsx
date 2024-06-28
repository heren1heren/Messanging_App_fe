import { FC } from 'react';
import Layout from './Layout';
import { useParams } from 'react-router-dom';

type HomePageProps = {};
export const HomePage: FC<HomePageProps> = ({}) => {
  const params = useParams();
  return (
    <Layout>
      <div>I am a HomePage page with user Id: {params.id}</div>
    </Layout>
  );
};
