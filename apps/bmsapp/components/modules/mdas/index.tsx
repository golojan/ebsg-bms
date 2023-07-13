import { fetcher } from 'libs';
import React from 'react';
import useSWR from 'swr';
import ClipLoader from 'react-spinners/ClipLoader';
import MdaCard from './MdaCard';
import { Row, Col } from 'react-bootstrap';

type Props = {
  //
};
const MdaIndex: React.FC<Props> = (props) => {
  const { data: mdas, isLoading } = useSWR(`/api/mdas`, fetcher);
  return (
    <div>
      {isLoading ? (
        <div className="tw-w-full tw-my-20 tw-text-center">
          <h1>
            <ClipLoader size={50} />
          </h1>
        </div>
      ) : (
        <Row>
          {mdas?.data.map((mda: MdaInfo, index: number) => (
            <Col xs={12} sm={6} md={4} lg={4} key={index}>
              <MdaCard key={index} mda={mda} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MdaIndex;
