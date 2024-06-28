import { FC } from 'react';
import Layout from './Layout';
import { useParams } from 'react-router-dom';

type SettingProps = {};
export const Setting: FC<SettingProps> = ({}) => {
  const params = useParams();
  return (
    <Layout>
      <div>I am a setting page with user Id: {params.id}</div>
    </Layout>
  );
};
