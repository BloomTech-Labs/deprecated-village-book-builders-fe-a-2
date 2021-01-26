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

          <a href="https://www.google.com">Click here to learn almost anything.
                    <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-09-128.png" alt="google-logo" />
          </a>
        </div>
        <div classsName="resource-link">

          <a href="https://www.notion.com">Click here to visit notion.
                    <img src="https://cdn.iconscout.com/icon/free/png-128/notion-1693557-1442598.png" alt="noition-logo" />
          </a>
        </div>


        <div className="resource-link">
          <a href="https://www.khanacademy.org/"> Click here to visit Khan Academy.
                    </a>

          <image src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/khanacademy-128.png" alt="khan-logo" />
        </div>






        <div className="resource-link">
          <a href="https://www.k5learning.com/">Visit k-5learning.
                    <image src="k5learning logo here" />

          </a>
        </div>

        <div>
          <a href="https://www.ixl.com/">Click Here t ovisit IXL.com"
                <image
              src="../../public/images/ixllogo.jpg.png" />
          </a>
        </div>



        <div className="resource-link">
          <a href="https://www.math-drills.com/">Takle me to Math-drills!
                <image
              src=" />
          </a>
        </div>
      </div>
    </>




  );
}

export default StudentDashboard;
