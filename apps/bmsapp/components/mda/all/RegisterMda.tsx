import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, FormLabel } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';
import { toFiat } from 'libs/monify';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import UIBox from 'components/all/ui/UIBox';
import { useEffect } from 'react';
import { toWords } from 'libs';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  mda: MdaInfo;
  toggleModal: () => void;
};
const RegisterMda: React.FC<Props> = (props: Props) => {
  const { mda, toggleModal } = props;
  const [mdaData, setMdaData] = React.useState<TMdaData>({
    year: 2023,
    MdaType: '',
  });
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user']) as UserInfo;

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
  }, [mdaData.personalTotal, mdaData.overheadTotal, mdaData.capitalTotal]);

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
    const data = await fetch(`/api/mdas/${mda.id}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        MdaType: mdaData.MdaType,
        mdaCode: mda.mdaCode,
        year: mdaData.year,
        personalTotal: mdaData.personalTotal,
        overheadTotal: mdaData.overheadTotal,
        capitalTotal: mdaData.capitalTotal,
        recurrentTotal: mdaData.recurrentTotal,
        expenditureTotal: mdaData.expenditureTotal,
        approvedBudget: mdaData.approvedBudget,
      }),
    });
    const { status } = await data.json();
    if (status === ApiStatus.MDA_REGISTERED) {
      swal(
        'Registration Successful',
        `The MDA ${mda.name} has been registered into the system. Data will now be available on the dashboard.`,
        'success'
      );
      queryClient.invalidateQueries(['mdas']);
      // clear form and close modal
      setMdaData({});
      toggleModal();
    } else {
      swal(
        'MDA Registration Failed',
        'There was a problem creating your budget',
        'error'
      );
    }
  };

  return (
    <UIBox>
      <form onSubmit={handleForm} className="grid grid-cols-2 gap-4">
        <div className="col-span-2 text-2xl">
          <h2 className="font-extrabold text-black dark:text-white my-2 ">
            {mda.name}
          </h2>
          <hr />
        </div>
        <aside>
          <FormControl className="mt-2" fullWidth>
            <FormLabel
              htmlFor="MdaType"
              className="text-md text-black dark:text-white mb-2"
            >
              Select MDA Type
            </FormLabel>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-base font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500 px-3 py-2"
              id="budgetYear"
              value={mdaData.MdaType?.toString()}
              required
              aria-required={true}
              onChange={(e) =>
                setMdaData({
                  ...mdaData,
                  MdaType: e.target.value,
                })
              }
            >
              <option value={''}>Select Type (MDA)</option>
              <option value={'MINISTRY'}>MINISTRY</option>
              <option value={'DEPARTMENT'}>DEPARTMENT</option>
              <option value={'AGENCY'}>AGENCY</option>
            </select>
          </FormControl>

          <FormControl className="mt-2" fullWidth>
            <FormLabel
              htmlFor="budgetYear"
              className="text-md text-black dark:text-white mb-2"
            >
              Select Budget Year
            </FormLabel>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500 px-3 py-2"
              id="budgetYear"
              value={mdaData.year?.toString()}
              required
              aria-required={true}
              onChange={(e) =>
                setMdaData({
                  ...mdaData,
                  year: e.target.value as any,
                })
              }
            >
              <option value={2023}>2023</option>
            </select>
          </FormControl>
          <FormControl className="mt-3" fullWidth>
            <FormLabel
              htmlFor="approvedBudget"
              className="text-md text-black dark:text-white mt-3 mb-2"
            >
              Approved Budget (2023)
            </FormLabel>
            <CurrencyInput
              id="approvedBudget"
              name="approvedBudget"
              autoComplete="off"
              autoCorrect="off"
              className="w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500"
              placeholder="Enter a number"
              defaultValue={mdaData.approvedBudget}
              value={mdaData.approvedBudget}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  approvedBudget: value as any,
                });
              }}
            />
          </FormControl>
          <FormControl
            className="mt-2 bg-bgray-600 dark:bg-darkblack-500"
            fullWidth
          >
            <div className="text-md font-bold font-serif text-bgray-900 dark:text-white p-3 mb-2 mt-3">
              <p className="text-green-500">
                {toWords(mdaData.approvedBudget ?? 0)}
              </p>
            </div>
          </FormControl>
        </aside>
        <aside>
          <h1 className="text-2xl my-3">Expenditure Data </h1>
          <FormControl className="mt-2" fullWidth>
            <FormLabel
              htmlFor="personalTotal"
              className="text-md text-black dark:text-white mb-2"
            >
              Personal Expenses
            </FormLabel>
            <CurrencyInput
              id="personalTotal"
              name="personalTotal"
              autoComplete="off"
              autoCorrect="off"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500"
              placeholder="Enter a number"
              defaultValue={mdaData.personalTotal}
              value={mdaData.personalTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  personalTotal: value as any,
                });
              }}
            />
          </FormControl>

          <FormControl className="mt-2" fullWidth>
            <FormLabel
              htmlFor="overheadTotal"
              className="text-md text-black dark:text-white mb-2"
            >
              Overhead Expenses
            </FormLabel>
            <CurrencyInput
              id="overheadTotal"
              name="overheadTotal"
              autoComplete="off"
              autoCorrect="off"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500"
              placeholder="Enter a number"
              defaultValue={mdaData.overheadTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  overheadTotal: value as any,
                });
              }}
            />
          </FormControl>
          <FormControl className="mt-2" fullWidth>
            <FormLabel
              htmlFor="capitalTotal"
              className="text-md text-black dark:text-white mb-2"
            >
              Capital Expenses
            </FormLabel>
            <CurrencyInput
              id="capitalTotal"
              name="capitalTotal"
              autoComplete="off"
              autoCorrect="off"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500"
              placeholder="Enter a number"
              defaultValue={mdaData.capitalTotal}
              decimalsLimit={2}
              onValueChange={(value) => {
                setMdaData({
                  ...mdaData,
                  capitalTotal: value as any,
                });
              }}
            />
          </FormControl>
          <div className="dark:bg-darkblack-500 my-2 p-4">
            <FormControl className="mt-2" fullWidth>
              <FormLabel className="text-md text-black dark:text-white">
                Recurrent Expenditure
              </FormLabel>
              <h2 className="text-xl font-extrabold mt-2">
                {toFiat(
                  Number(mdaData.recurrentTotal ? mdaData.recurrentTotal : 0)
                )}
              </h2>
            </FormControl>
            <FormControl className="mt-2">
              <FormLabel className="text-md text-black dark:text-white ">
                Total Expenditure
              </FormLabel>
              <h2 className="text-xl font-extrabold">
                {toFiat(
                  Number(
                    mdaData.expenditureTotal ? mdaData.expenditureTotal : 0
                  )
                )}
              </h2>
            </FormControl>
          </div>
        </aside>
        <div className="col-span-2 text-2xl">
          <hr />
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="mt-4 bg-green-600 hover:bg-green-900"
          >
            Register MDA
          </Button>
        </div>
      </form>
    </UIBox>
  );
};

export default RegisterMda;
