import React, { useState, useEffect } from 'react';
import { Connect } from 'react-redux';
import {
  Link,
  NavLink,
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SudentProfile from '../Student/StudentProfile';
import StudentProfileForm from '../Student/StudentProfileForm';
import { fetchMenteeProfile } from '../../../state/actions/actionTypes';
import { MenuOutlined } from '@ant-design/icons';
import '../../../styles/ResourceDash.css';
import Logout from '../../Logout.js';
import { Button } from 'antd';
import Dashboard from '../../';

function ResourceDashboard() {
  return (
    <d>
      <div className="resource-dash-container">
        <nav className="top-nav">
          <ul>
            <li>Login</li>
            <li>Profile</li>
            <li>home</li>
          </ul>
        </nav>

        <div classname="resorce-links-container">
          <div>
            <div classsName="resource">
              <a href="https://www.notion.com">
                Click here to visit notion.
                <img
                  src="public/images/notion-1693557-1442598.jpg.png"
                  alt="noition-logo"
                />
              </a>
            </div>

            <div className="resource">
              <a href="https://www.khanacademy.org/">
                {' '}
                Click here to visit Khan Academy.
                <img src="public/images/khanlogo.jpg.jpg" alt="khan-logo" />
              </a>
            </div>

            <div className="resource">
              <a href="https://www.k5learning.com/">
                Visit k-5learning.
                <img src="k5learning logo here" alt="k5-logo" />
              </a>
            </div>

            <div className="resource">
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
        </div>
      </div>
    </d>
  );
}

export default ResourceDashboard;
