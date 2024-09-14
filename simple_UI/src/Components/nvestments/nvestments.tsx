import React from "react";
import styles from "./nvestments.module.css";


const Investments: React.FC = () => {
  return (
   <div className={styles.investmentHeader}>
     <div className={styles.ivestmetlist}>
     <h1 className={styles.investmetH1}>Dashboad</h1>
     <span className={styles.investmentspan}> {">"} </span>
     <span className={styles.investmentspan}>Investments</span>
     </div> 
     <h1 className={styles.mainInvestmet}>Investment</h1>
    <div className={styles.investmentsContainer}>
      <div className={styles.metricsContainer}>
        <div className={styles.metricCard}>
          <p>Total Property Purchase</p>
          <h3>₦300,000,000.00</h3>
          <p className={styles.metricChange}>
            <span className={styles.up}>+ 20%</span>
          </p>
        </div>
        <div className={styles.metricCard}>
          <p>Total Co-Ownership</p>
          <h3>₦60,000,000.00</h3>
          <p className={styles.metricChange}>
            <span className={styles.down}>- 20%</span>
          </p>
        </div>
        <div className={styles.metricCard}>
          <p>Total Cash Investment</p>
          <h3>₦60,000,000.00</h3>
          <p className={styles.metricChange}>
            <span className={styles.down}>- 20%</span>
          </p>
        </div>
      </div>

      <div className={styles.tabContainer}>
        <button className={styles.activeTab}>Property Purchase</button>
        <button>Co-Ownership</button>
        <button>Cash Investments</button>
      </div>

      <div className={styles.investmentHistory}>
        <div className={styles.tableHeader}>
          <input type="date" className={styles.dateFilter} />
          <select className={styles.typeFilter}>
            <option>Type</option>
            <option>Property Purchase</option>
            <option>Co-Ownership</option>
            <option>Cash Investments</option>
          </select>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by property, customer..."
          />
          <button className={styles.exportButton}>Export</button>
        </div>

      
        <table className={styles.investmentTable}>
          <thead>
            <tr>
              <th>Date Created</th>
              <th>Property Invested</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Investment Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>May 1, 2023, 9:00 AM</td>
              <td>Bradford Apartment</td>
              <td>Owolu Opeyemi</td>
              <td>₦28,000,000.00</td>
              <td>Property Purchase</td>
              <td>
                <button className={styles.actionButton}>View</button>
              </td>
            </tr>
            <tr>
              <td>May 1, 2023, 9:00 AM</td>
              <td>Fortune Apartment</td>
              <td>Azeez Kiki</td>
              <td>₦28,000,000.00</td>
              <td>Property Purchase</td>
              <td>
                <button className={styles.actionButton}>View</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button className={styles.prevButton}>Previous</button>
          <span>1</span>
          <button className={styles.nextButton}>Next</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Investments