import React from 'react';
import StateIndicator from 'components/all/indicator/state';
import { Row } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from 'libs';

type Props = {
  //
};
const DasboardIndex: React.FC<Props> = (props) => {
  const {
    data: output,
    error,
    isLoading,
  } = useSWR('/api/budgets/state', fetcher);

  const [budget, setBudget] = React.useState({
    personalTotal: 0,
    overheadTotal: 0,
    capitalTotal: 0,
    expenditureTotal: 0,
    fullYearActual_2021: 0,
    approvedBudget_2022: 0,
    performanceBudget_2022: 0,
    approvedBudget_2023: 0,
  });
  React.useEffect(() => {
    if (!error && output) {
      const { data } = output;
      const { _sum } = data;
      setBudget(_sum);
    }
  }, [error, output]);

  return (
    <Row>
      <StateIndicator
        busy={isLoading}
        amount={budget?.personalTotal}
        title="Personal Expenditure"
        indicator="personalTotal"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.overheadTotal}
        title="Overhead Expenditure"
        indicator="overheadTotal"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.capitalTotal}
        title="Capital Expenditure"
        indicator="capitalTotal"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.expenditureTotal}
        title="Total Expenditure"
        indicator="expenditureTotal"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.fullYearActual_2021}
        title="Full Year Actuals (2021)"
        indicator="fullYearActual_2021"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.approvedBudget_2022}
        title="Approved Budget (2022)"
        indicator="approvedBudget_2022"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.performanceBudget_2022}
        title="Performance (2022) Jan-Sep"
        indicator="performanceBudget_2022"
      />
      <StateIndicator
        busy={isLoading}
        amount={budget.approvedBudget_2023}
        title="Approved Budget (2023)"
        indicator="approvedBudget_2023"
      />
    </Row>
  );
};

export default DasboardIndex;
