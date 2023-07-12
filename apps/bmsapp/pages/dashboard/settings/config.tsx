import Layout from 'components/layout';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Config = () => {
  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <Row>
        <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
          <h1>
            My Apps Settings <hr />
          </h1>

          <Form onSubmit={handleForm}>
            <Form.Group controlId="firstName" className="tw-my-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Application Name" />
            </Form.Group>

            <Form.Group controlId="mobile" className="tw-my-3">
              <Button variant="primary" type="submit">
                Update Settings
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Config;
