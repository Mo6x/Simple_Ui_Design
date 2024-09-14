import React, { useState } from "react";
import Transaction from "../Table/Table";
import Investments from "../nvestments/nvestments";
import {
  FaChevronRight,
  FaChevronDown,
  FaHome,
  FaUsers,
  FaBuilding,
  FaChartLine,
  FaCog,
  FaRegClipboard,
} from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import styles from "./SideBar.module.css";


const Sidebar: React.FC = () => {
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);
  const [activeView, setActiveView] = useState<string>("overview");

  return (
    <div className={styles.mainsidebarcontiner}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={Logo} alt="Company Logo" />
        </div>

        <nav className={styles.nav}>
          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("overview")}
          >
            <FaHome className={styles.icon} />
            <span className={styles.innertest}>Overview</span>
          </div>

          <div 
            className={styles.navItem}  onClick={() => setIsPropertyOpen(!isPropertyOpen)}
          >
            <FaBuilding className={styles.icon} />
            <span>Property</span>
            {isPropertyOpen ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {isPropertyOpen && (
            <div className={styles.submenu}>
              <div 
                className={styles.submenuItem} 
                onClick={() => setActiveView("addProperty")}
              >
                Add Property
              </div>
              <div 
                className={styles.submenuItem} 
                onClick={() => setActiveView("properties")}
              >
                Properties
              </div>
            </div>
          )}

          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("customers")}
          >
            <FaUsers className={styles.icon} />
            <span>Customers</span>
          </div>
          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("payments")}
          >
            <FaChartLine className={styles.icon} />
            <span>Payments</span>
          </div>

          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("investments")}
          >
            <FaChartLine className={styles.icon} />
            <span>Investments</span>
          </div>

          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("review")}
          >
            <FaRegClipboard className={styles.icon} />
            <span>Review</span>
            <span className={styles.notification}>10</span>
          </div>

          <div 
            className={styles.navItems} 
            onClick={() => setActiveView("settings")}
          >
            <FaCog className={styles.icon} />
            <span>Settings</span>
          </div>
        </nav>

        <div className={styles.profile}>
          <img src="/path-to-profile/profile.jpg" alt="Profile" />
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Owolu Opeyemi</span>
            <span className={styles.profileEmail}>admin@peaktower.com</span>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        {activeView === "overview" && <div>Overview Content</div>}
        {activeView === "addProperty" && <div>Add Property Form</div>}
        {activeView === "properties" && <div>Properties List</div>}
        {activeView === "customers" && <div>Customer Management</div>}
        {activeView === "payments" && <Transaction />}
        {activeView === "investments" && <Investments />}
        {activeView === "review" && <div>Review Section</div>}
        {activeView === "settings" && <div>Settings Page</div>}
      </main>
    </div>
  );
};

export default Sidebar;

