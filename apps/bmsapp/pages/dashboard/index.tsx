import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddBox from 'components/all/add-box';
// import Layout from 'components/layout';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import Image from 'next/image';

/* eslint-disable-next-line */
export type dashboardProps = {};

export const Dashboard: NextPage<dashboardProps> = (props) => {
  const { data, error } = useSWR('/api/users/otp-setup', fetcher);
  if (error) return <div>failed to load</div>;

  return (
    <Row>
      {!data ? (
        <div>loading...</div>
      ) : (
        <Col className="tw-bg-red-500" xs={12} md={6} lg={6}>
          <Image
            src={data.data?.qrcode}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Col>
      )}
    </Row>
  );
};

export default Dashboard;
