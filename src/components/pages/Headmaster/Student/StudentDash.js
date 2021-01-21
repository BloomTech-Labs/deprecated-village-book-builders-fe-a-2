import React from 'react';

function StudentDashboard() {
  return (
    <div className="student-dashboard-container">
      <div className="student-dash-top">
        Welcome to the student dashboard
        <p>Click on a link below to view the resource</p>
      </div>
      <div className="student-dash-middle">
        <div classsName="student-dash-resource-links"></div>
        <a href="https://www.google.com/">Find Almost anything. click here</a>
        <a href="https://www.khanacademy.org/">Click Here!</a>
        <a href="https://www.example.com">Click Here!</a>
        <a href="https://www.example.com">Click Here!</a>
        <a href="https://www.example.com">Click Here!</a>
      </div>
    </div>
  );
}

export default StudentDashboard;
