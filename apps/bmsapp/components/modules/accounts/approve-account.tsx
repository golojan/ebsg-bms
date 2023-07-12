import style from './accounts.module.scss';
import React, { useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import useSWR from 'swr';
import { fetcher } from 'libs';

type Props = {
  user: UserInfo;
  toggleModal: () => void;
};
const ModuleApproveAccount: React.FC<Props> = (props: Props) => {
  const { user, toggleModal } = props;
  const { data: result, error } = useSWR('/api/mdas', fetcher);

  const [userData, setUserData] = React.useState<{
    accid: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password?: string;
    mdaId: number;
  }>({
    accid: Number(user.id),
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    mdaId: Number(null),
  });

  useEffect(() => {
    setUserData({
      accid: Number(user.id),
      firstName: String(user.firstName),
      lastName: String(user.lastName),
      email: String(user.email),
      mobile: String(user.mobile ? user.mobile : ''),
      password: '',
      mdaId: Number(user.mdaId),
    });
  }, [user]);

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = await fetch(`/api/users/${user.id}/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const { status } = await data.json();
    if (status === ApiStatus.USER_UPDATED) {
      swal(
        'Approval Successful',
        `The user ${user.firstName} has been activated on the system.`,
        'success'
      );
      toggleModal();
    } else {
      swal(
        'User Registration Failed',
        'Activation of the user has failed, try again or contact System Admin',
        'error'
      );
    }
  };

  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>
            User:{' '}
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="email" className="tw-mt-2">
            <Form.Label>Email Login</Form.Label>
            <h3>{user.email}</h3>
          </Form.Group>
          <hr />
          <Row>
            <Col>
              <Form.Group controlId="firstName" className="tw-mt-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  value={userData.firstName}
                  onChange={(e) => {
                    setUserData({ ...userData, firstName: e.target.value });
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName" className="tw-mt-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="off"
                  value={userData.lastName}
                  onChange={(e) => {
                    setUserData({ ...userData, lastName: e.target.value });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="mobile" className="tw-mt-2">
            <Form.Label>Mobile/Telephone</Form.Label>
            <Form.Control
              type="text"
              required
              autoComplete="off"
              value={userData.mobile}
              onChange={(e) => {
                setUserData({ ...userData, mobile: e.target.value });
              }}
            />
          </Form.Group>
          {/* Select Department */}
          <Form.Group controlId="department" className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select
              aria-label="Select Department"
              value={userData.mdaId}
              defaultValue={userData.mdaId}
              onChange={(e) =>
                setUserData({ ...userData, mdaId: Number(e.target.value) })
              }
            >
              <option value="">Select MDA</option>
              {result &&
                result.data &&
                !error &&
                result.data.map((mda: any, index: number) => (
                  <option key={index} value={mda.id}>
                    {mda.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="mobile" className="tw-mt-2">
            <Alert variant="warning">
              <p>
                Create Password for the user. Password will be encrypted. Advice
                the user to change password on first login.
              </p>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                required
                autoComplete="off"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
            </Alert>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Approve Account
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleApproveAccount;
