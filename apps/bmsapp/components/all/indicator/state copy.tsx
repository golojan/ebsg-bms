import style from './indicator.module.scss';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { toFiat } from 'libs/monify';
import Link from 'next/link';
import { BarLoader } from 'react-spinners';

type IndicatorProps = {
  busy?: boolean;
  amount: number;
  title: string;
  indicator: string;
};

const StateIndicator: React.FC<IndicatorProps> = (props) => {
  const { busy, title, amount, indicator } = props;
  const rebaseMda = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Col xxl={4} xl={6} lg={6} md={12} sm={12} xs={12}>
        <Card className={style.indicator}>
          <Card.Body className="tw-text-center">
            <Card.Title className="tw-text-2xl tw-font-bold mt-4">
              {title}
            </Card.Title>
            <Card.Text className="tw-text-3xl tw-font-bold tw-mt-4 tw-mb-2 tw-text-center tw-justify-center">
              <span>{busy ? <BarLoader /> : toFiat(amount)}</span>
            </Card.Text>
            <Card.Text className="tw-m-0 tw-p-0 tw-text-3xl">. . .</Card.Text>
            <Card.Text>
              <Link
                href={`#${indicator}`}
                onClick={(e) => rebaseMda(e)}
                className={style.indicator__btn}
              >
                rebase this figure
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default StateIndicator;
