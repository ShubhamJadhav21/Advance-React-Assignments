
import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../../../Pages/Admin/Admin';

const AdminNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/AdminNav">Admin Portal</Link>
        </li>
        <li>
          <Link to="/Admin">Admin Page</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default AdminNav;
