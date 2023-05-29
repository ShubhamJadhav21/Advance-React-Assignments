
import React from 'react';
import { Link,Route } from 'react-router-dom';

const StudentNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/StudentNav">Student Examination Portal</Link>
        </li>
        <li>
          <Link to="/Student">Student</Link>
        </li>
      </ul>
      
      
    </div>
  );
};

export default StudentNav;
