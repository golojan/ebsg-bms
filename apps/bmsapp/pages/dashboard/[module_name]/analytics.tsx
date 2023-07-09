import React from 'react';
import Layout from 'components/layout';
import { NextPage, InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { ApiStatus } from 'types/api-status';


export const MdaAnalitics = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { mda } = props;
  return (
    <Layout>
      <Row as={'div'} className="tw-relative">
        {!mda ? (
          <div className="tw-absolute tw-w-[100%] tw-h-[100%]  tw-top-0 tw-left-0 tw-justify-center tw-flex tw-flex-col tw-text-center">
            <ClipLoader size={50} />
          </div>
        ) : (
          <>
            <Col xl={8} lg={8} md={8} sm={12}>
              <h1>{mda.name}</h1>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12}>
              <h1>MDA Analytics</h1>
            </Col>
          </>
        )}
      </Row>
    </Layout>
  );
};

export const getServerSideProps = async(context: GetServerSidePropsContext) =>{
  const api_url = process.env.API_URL;
  const { _mda_ } = context.query;
  const response = await fetch(`${api_url}/mdas/${_mda_}`);
  const {status, data} = await response.json();
  return {
    props: {
      mda: status===ApiStatus.MDA_FOUND ? data : null,
    }, 
  };
}


export default MdaAnalitics;
