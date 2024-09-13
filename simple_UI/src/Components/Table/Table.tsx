import React from "react";
import "";

interface Transaction {
  date: string;
  transactionId: string;
  customer: string;
  amount: number;
  status: string;
}

const transactions: Transaction[] = [
  {
    date: 'May 1, 2023, 9:00 AM',
    transactionId: '7GJ17321HASD...1313',
    customer: 'Owolu Opeyemi',
    amount: 800.0,
    status: 'Success',
  },
  // Add more transactions...
];

const TransactionTable: React.FC = () => {
  return (
    <section className="transactions">
      <div className="transaction-header">
        {/* Filters */}
        <div className="filters">
          <select name="date-range">
            <option value="date-range">Date range</option>
          </select>
          <select name="status">
            <option value="status">Status</option>
          </select>
        </div>
        {/* Action Buttons */}
        <div className="actions">
          <button className="add-payment">+ Add Payment</button>
          <button className="export">Export</button>
        </div>
      </div>

      {/* Transaction Table */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date Created</th>
            <th>Transaction ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.customer}</td>
              <td>{transaction.amount.toFixed(2)}</td>
              <td>
                <span className={`status ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </td>
              <td><i className="view-icon"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionTable;
