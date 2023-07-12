import React from 'react';
import Layout from 'components/layout';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { Row, Col, Card } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { ApiStatus } from 'types/api-status';
import { toFiat } from 'libs/monify';
import Link from 'next/link';
import MdaIndicator from 'components/all/indicator/mda';

export const MdaAnalitics = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
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
            <Col xl={12} lg={12} md={12} sm={12} className="tw-mb-10 w-full">
              <h1 className="tw-text-4xl">{mda.name}</h1>
            </Col>

            <MdaIndicator
              mda={mda}
              title="Personal Expenditure"
              indicator="personalTotal"
            />

            <MdaIndicator
              mda={mda}
              title="Overhead Expenditure"
              indicator="overheadTotal"
            />

            <MdaIndicator
              mda={mda}
              title="Capital Expenditure"
              indicator="capitalTotal"
            />

            <MdaIndicator
              mda={mda}
              title="Total Expenditure"
              indicator="expenditureTotal"
            />

            {/* / Budgets/ */}

            <MdaIndicator
              mda={mda}
              title="Full Year Actuals (2021)"
              indicator="fullYearActual_2021"
            />

            <MdaIndicator
              mda={mda}
              title="Approved Budget (2022)"
              indicator="approvedBudget_2022"
            />

            <MdaIndicator
              mda={mda}
              title="Performance (2022) Jan-Sep"
              indicator="performanceBudget_2022"
            />

            <MdaIndicator
              mda={mda}
              title="Approved Budget (2023)"
              indicator="approvedBudget_2023"
            />
          </>
        )}
      </Row>
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const api_url = process.env.API_URL;
  const { _mda_ } = context.query;
  const response = await fetch(`${api_url}/mdas/${_mda_}`);
  const { status, data } = await response.json();
  return {
    props: {
      mda: status === ApiStatus.MDA_FOUND ? data : null,
    },
  };
};

export default MdaAnalitics;
