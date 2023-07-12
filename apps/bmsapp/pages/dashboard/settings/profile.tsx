import Layout from 'components/layout';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { NextPage } from 'next';

type ProfileProps = {
  //
};
const Profile: NextPage<ProfileProps> = (props) => {
  const {
    data: thisUser,
    error,
    isLoading,
  } = useSWR('/api/users/user', fetcher);
  const [userData, setUserData] = useState({
    firstName: thisUser?.data?.firstName,
    lastName: thisUser?.data?.lastName,
    mobile: thisUser?.data?.mobile,
  });

  useEffect(() => {
    if (thisUser?.status === ApiStatus.USER_FOUND && !error) {
      const { data } = thisUser;
      setUserData({
        ...userData,
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
      });
    }
  }, [thisUser, error]);

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = await fetch(
      `/api/users/${thisUser?.data?.id}/update-profile`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );
    const { status } = await data.json();
    if (status === ApiStatus.USER_UPDATED) {
      swal('Success', 'Profile Updated', 'success');
    }
  };

  return (
    <Layout>
      <Row>
        <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
          <h1>
            My Profile <hr />
          </h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Form onSubmit={handleForm}>
              <Form.Group controlId="firstName" className="tw-my-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  defaultValue={userData?.firstName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      firstName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="lastName" className="tw-my-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  defaultValue={userData?.lastName}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      lastName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="mobile" className="tw-my-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  defaultValue={userData?.mobile}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      mobile: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="mobile" className="tw-my-3">
                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
