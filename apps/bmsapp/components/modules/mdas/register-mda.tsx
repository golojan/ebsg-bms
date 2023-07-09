import style from './mdas.module.scss';
import React, { useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
import { toFiat } from 'libs/monify';
import { ApiStatus } from 'types/api-status';

type Props = {
  mda: MdaInfo;
  toggleModal: () => void;
};
const ModuleRegisterMda: React.FC<Props> = (props: Props) => {
  const { mda, toggleModal } = props;

  const [mdaData, setMdaData] = React.useState<{
    personalTotal: number;
    overheadTotal: number;
    capitalTotal: number;
    recurrentTotal?: number;
    expenditureTotal?: number;
  }>({
    personalTotal: 0,
    overheadTotal: 0,
    capitalTotal: 0,
    recurrentTotal: 0,
    expenditureTotal: 0,
  });

  useEffect(() => {
    const recurrentTotal: number =
      Number(mdaData.personalTotal) + Number(mdaData.overheadTotal);
    const expenditureTotal =
      Number(recurrentTotal) + Number(mdaData.capitalTotal);
    setMdaData({
      ...mdaData,
      recurrentTotal,
      expenditureTotal,
    });
    //
  }, [mdaData]);

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = await fetch(`/api/mdas/${mda.mdaCode}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalTotal: mdaData.personalTotal,
        overheadTotal: mdaData.overheadTotal,
        capitalTotal: mdaData.capitalTotal,
        recurrentTotal: mdaData.recurrentTotal,
        expenditureTotal: mdaData.expenditureTotal,
      }),
    });
    const { status } = await data.json();
    if (status === ApiStatus.MDA_REGISTERED) {
      toggleModal();
    } else {
      alert('MDA Registration Failed');
    }
  };

  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>
            MDA: <strong>{mda.mdaCode}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="mdaName" className="tw-mt-2">
            <Form.Label>Name of MDA</Form.Label>
            <h3>{mda.name}</h3>
          </Form.Group>
          <hr />
          <Form.Group controlId="personalTotal" className="tw-mt-2">
            <Form.Label>Personal Expenses</Form.Label>
            <CurrencyInput
              id="personalTotal"
              name="personalTotal"
              className="form-control"
              placeholder="Please enter a number"
              defaultValue={mdaData.personalTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  personalTotal: value as any,
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="overheadTotal" className="tw-mt-2">
            <Form.Label>Overhead Expenses</Form.Label>
            <CurrencyInput
              id="overheadTotal"
              name="overheadTotal"
              className="form-control"
              placeholder="Please enter a number"
              defaultValue={mdaData.overheadTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  overheadTotal: value as any,
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="capitalTotal" className="tw-mt-2">
            <Form.Label>Capital Expenses</Form.Label>
            <CurrencyInput
              id="capitalTotal"
              name="capitalTotal"
              className="form-control"
              placeholder="Please enter a number"
              defaultValue={mdaData.capitalTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  capitalTotal: value as any,
                });
              }}
            />
          </Form.Group>
          <hr />
          <Form.Group controlId="recurrentTotal" className="tw-mt-2">
            <Form.Label>Recurrent Expenditure</Form.Label>
            <h2>
              {toFiat(
                Number(mdaData.recurrentTotal ? mdaData.recurrentTotal : 0)
              )}
            </h2>
          </Form.Group>
          <Form.Group controlId="expenditureTotal" className="tw-mt-2">
            <Form.Label>Total Expenditure</Form.Label>
            <h2>
              {toFiat(
                Number(mdaData.expenditureTotal ? mdaData.expenditureTotal : 0)
              )}
            </h2>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleRegisterMda;