import style from '../auth.module.scss';
import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { FaUserAlt } from 'react-icons/fa';

/* eslint-disable-next-line */
export type resetProps = {};
export const Reset: NextPage<resetProps> = (props) => {
  return (
    <div className={style.auth}>
      <Image
        src="/logo.png"
        alt="logo"
        className="tw-my-3"
        width={120}
        height={120}
      />
      <Card className="card tw-w-[400px] tw-rounded">
        <Form>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12} className="p-5">
              <div className="text-center my-4 tw-items-center tw-justify-center">
                <FaUserAlt
                  className="text-primary tw-relative tw-mx-auto"
                  size={50}
                  fontSize={50}
                />
              </div>
              <h3 className="text-center mb-3">Request Submitted</h3>
              <p className="text-center">
                Your request has been submitted successfully. Please contact the
                Government Designated Administrator for activation.
              </p>
              <div className="text-center tw-mt-5"></div>
              <Link
                href="/auth/login"
                className="btn btn-primary tw-w-full btn-block"
                type="submit"
              >
                Continue to Login
              </Link>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Reset;
