import style from './mdas.module.scss';
import React, { useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
import { toFiat } from 'libs/monify';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import MdaType from '@prisma/client';

type Props = {
  mda: MdaInfo;
  toggleModal: () => void;
};
const ModuleEditMda: React.FC<Props> = (props: Props) => {
  const { mda, toggleModal } = props;

  const [mdaData, setMdaData] = React.useState<{
    name: string;
    personalTotal: number;
    overheadTotal: number;
    capitalTotal: number;
    recurrentTotal?: number;
    expenditureTotal?: number;
  }>({
    name: mda.name ? mda.name : '',
    personalTotal: mda.personalTotal ? mda.personalTotal : 0,
    overheadTotal: mda.overheadTotal ? mda.overheadTotal : 0,
    capitalTotal: mda.capitalTotal ? mda.capitalTotal : 0,
    recurrentTotal: mda.recurrentTotal ? mda.recurrentTotal : 0,
    expenditureTotal: mda.expenditureTotal ? mda.expenditureTotal : 0,
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
    if (
      mdaData.personalTotal === 0 ||
      mdaData.overheadTotal === 0 ||
      mdaData.capitalTotal === 0
    ) {
      swal(
        'Empty Values',
        'Please enter a valid amount for at least one of the fields',
        'error'
      );
      return;
    }
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
      swal(
        'Update Successful',
        `The MDA ${mda.name} has been updated in the system.`,
        'success'
      );
      toggleModal();
    } else {
      swal('MDA Update Failed', '', 'error');
    }
  };

  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update MDA: <strong>{mda.mdaCode}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="mdaName" className="tw-mt-2">
            <Form.Label>Name of MDA</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter MDA Name"
              defaultValue={mdaData.name}
              onChange={(e) => {
                setMdaData({
                  ...mdaData,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="mdaType" className="tw-mt-2">
            <Form.Label>Type of MDA</Form.Label>
            <Form.Check name="mdaType" value={MdaType.MINISTRY}>
              Ministry
            </Form.Check>
            <Form.Check name="mdaType" value={MdaType.DEPARTMENT}>
              Department
            </Form.Check>
            <Form.Check name="mdaType" value={MdaType.AGENCY}>
              Agency
            </Form.Check>
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
            Update MDA
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleEditMda;
