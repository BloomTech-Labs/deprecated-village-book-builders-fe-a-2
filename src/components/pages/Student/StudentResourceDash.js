import React from 'react';

function StudentDashboard() {
  return (
    <>
      <div className="student-dash-top">
        <p>Welcome to the student dashboard</p>
        <p>Click on a link below to view the resource</p>
      </div>

      <div className="student-dash-middle">
        <div classsName="resource-link">
          <a href="https://www.google.com">
            Click here to learn almost anything.
            <img src="public/images/glogo.png" alt="google-logo" />
          </a>
        </div>
        <div classsName="resource link">
          <a href="https://www.notion.com">
            Click here to visit notion.
            <img
              src="public/images/notion-1693557-1442598.jpg.png"
              alt="noition-logo"
            />
          </a>
        </div>

        <div className="resource-link">
          <a href="https://www.khanacademy.org/">
            {' '}
            Click here to visit Khan Academy.
            <img src="public/images/khanlogo.jpg.jpg" alt="khan-logo" />
          </a>
        </div>

        <div className="resource-link">
          <a href="https://www.k5learning.com/">
            Visit k-5learning.
            <img src="k5learning logo here" alt="k5-logo" />
          </a>
        </div>

        <div>
          <a href="https://www.ixl.com/">
            Click Here t ovisit IXL.com"
            <img src="public/images/ixllogo.png" alt="ixl logo" />
          </a>
        </div>

        <div className="resource-link">
          <a href="https://www.math-drills.com/">
            Takle me to Math-drills!
            <img src="public/images/mathlogo.jpg" alt="math drills logo." />
          </a>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
