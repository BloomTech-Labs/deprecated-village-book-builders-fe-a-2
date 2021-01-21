import React from 'react';

function StudentDashboard() {
  return (
    <div className="student-dashboard-container">
      <div className="student-dash-top">
        Welcome to the student dashboard
        <p>Click on a link below to view the resource</p>
      </div>
      <div className="student-dash-middle">
        <div classsName="student-dash-resource-links">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer ">
            Clickk here to lear anything
          </a>
          <image
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.worldvectorlogo.com%2Flogos%2Fgoogle-icon.svg&imgrefurl=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Fgoogle-icon&tbnid=-D6o32LYKRkaIM&vet=12ahUKEwigy_CVnqzuAhVMbK0KHT9rAWoQMygFegUIARDfAQ..i&docid=rix0g8C-Zd1-zM&w=2443&h=2500&q=google%20icon&ved=2ahUKEwigy_CVnqzuAhVMbK0KHT9rAWoQMygFegUIARDfAQ"
            className="google-logo"
          />

          <a href="https://www.notion.so/">Click here to visit Notion</a>

          <a href="https://www.khanacademy.org/">Click Here!</a>

          <a href="https://www.example.com">Click Here!</a>
          <a href="https://www.example.com">Click Here!</a>
          <a href="https://www.example.com">Click Here!</a>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
