import React from "react";
import Sidebar from "../Sidebar/SideBar";
import Styles from "./MainDashBoard.module.css";


export const MainDashBoard: React.FC = () => {
   return (
     <div className={Styles.maindashboardparents}>
         <Sidebar />
     </div>
   )
 }