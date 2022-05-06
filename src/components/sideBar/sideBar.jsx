import React from 'react'
import "./sideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Societe de service</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">construction</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">commerce</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Télecomunication</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Agronomie</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">sante</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Sos</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
