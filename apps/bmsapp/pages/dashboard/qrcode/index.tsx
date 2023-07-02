import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import Image from 'next/image';

/* eslint-disable-next-line */
export type qrCodeProps = {};
export const QrCode: NextPage<qrCodeProps> = (props) => {
  const { data, error } = useSWR('/api/users/otp-setup', fetcher);
  if (error) return <div>failed to load</div>;
  return (
    <Container className="tw-flex tw-justify-center tw-w-screen tw-h-screen">
      <Row>
        {!data ? (
          <div>loading...</div>
        ) : (
          <Col className="tw-bg-red-500" xs={12} md={6} lg={6}>
            <Image
              src={data.data?.qrimage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h2>{data.data?.qrcode}</h2>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default QrCode;
