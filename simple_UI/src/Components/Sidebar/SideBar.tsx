import React, { useState } from "react";
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


  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Company Logo" />
      </div>

      <nav className={styles.nav}>
        <div className={styles.navItems}>
          <FaHome className={styles.icon} />
          <span className={styles.innertest}>Overview</span>
        </div>

        <div className={styles.navItem}  onClick={() => setIsPropertyOpen(!isPropertyOpen)}
        >
          <FaBuilding className={styles.icon} />
          <span>Property</span>
          {isPropertyOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {isPropertyOpen && (
          <div className={styles.submenu}>
            <div className={styles.submenuItem}>Add Property</div>
            <div className={styles.submenuItem}>Properties</div>
          </div>
        )}

        <div className={styles.navItems}>
          <FaUsers className={styles.icon} />
          <span>Customers</span>
        </div>

        <div className={styles.navItems}>
          <FaChartLine className={styles.icon} />
          <span>Investments</span>
        </div>

        <div className={styles.navItems}>
          <FaRegClipboard className={styles.icon} />
          <span>Review</span>
          <span className={styles.notification}>10</span>
        </div>

     
        <div className={styles.navItemss}>
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
  );
};

export default Sidebar;
