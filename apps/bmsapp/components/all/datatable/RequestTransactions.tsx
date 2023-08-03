import React from 'react';

interface DtProps {
  data: any;
  // columns: <T>(data: T) => void;
}
export const RequestTransactions = (props: DtProps) => {
  const { data } = props;
  return (
    <div className="w-full bg-white dark:bg-darkblack-600 flex flex-col justify-between rounded-lg p-5  text-black dark:text-white">
      <table
        id="Datatable"
        className={`bg-white dark:bg-darkblack-600 display nowrap w-full compact stripe pt-10 text-black dark:text-white`}
      >
        <thead className="">
          <tr>
            <th>Req.Number</th>
            <th>MDA</th>
            <th>Amount</th>
            <th>Progress</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.mda}</td>
              <td>{item.amount}</td>
              <td>{item.progress}</td>
              <td>{item.start_date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Req.Number</th>
            <th>MDA</th>
            <th>Amount</th>
            <th>Progress</th>
            <th>Request Date</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RequestTransactions;
