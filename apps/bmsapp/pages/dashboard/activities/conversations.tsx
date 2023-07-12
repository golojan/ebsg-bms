import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from 'components/layout';

const Conversations = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <Layout>Enter</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Conversations;