import React, { useState } from "react";
import { TransactionModel } from "../TransactionModels/TransactionModels";
import {  transactions, Transaction } from "../UserDates/TableData";
import styles from "./Table.module.css";


const TransactionTable: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.investmentHeader}>
      <div className={styles.ivestmetlist}>
        <h1 className={styles.investmetH1}>Dashboard</h1>
        <span className={styles.investmentspan}>{">"}</span>
        <span className={styles.investmentspan}>Investments</span>
      </div>
      <h1 className={styles.mainInvestmet}>Investment</h1>
      <section className={styles.transactions}>
        <div className={styles.transaction_child}>
          <h2 className={styles.title}>Transaction History</h2>
          <div className={styles.actions}>
            <button className={styles["add-payment"]}>+ Add Payment</button>
            <button className={styles.export}>Export</button>
          </div>
        </div>

        <div className={styles.transaction_detail}>
          <div className={styles.tansaction_main}>
            <div className={styles.transaction_header}>
              <div className={styles.tabs}>
                <button className={styles.active}>All payments</button>
                <button>Success</button>
                <button>Failed</button>
              </div>

              <div className={styles.buttons}>
                <select name="date-range">
                  <option value="date-range">Date range</option>
                </select>
                <select name="status">
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Search by amount, payment method..."
              className={styles.search}
            />
          </div>
        </div>

        <table className={styles["transaction-table"]}>
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
              <tr key={index} onClick={() => handleRowClick(transaction)}>
                <td>{transaction.date}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.customer}</td>
                <td>{transaction.amount.toFixed(2)}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[transaction.status.toLowerCase()]
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <i className={styles["view-icon"]}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button className={styles.prev}>Previous</button>
          <span>1</span>
          <button className={styles.next}>Next</button>
        </div>
      </section>

      {isModalOpen && selectedTransaction && (
        <TransactionModel
          transaction={selectedTransaction}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TransactionTable;

