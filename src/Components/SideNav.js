import React from "react";
import { Link } from "react-router";
import "../Styles/Sidenav.css";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

export const SideNav = () => {
  return (
    <div className='sidenav1'>
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
      <li>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li>
        <Link to="/plans">Plans</Link>
      </li>
      {/* <li>
      <Dropdown  data-bs-theme="light">
        <Dropdown.Toggle split id="dropdown-button-light-example1" variant="">
          Teams
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link to='/newTeam'>Create Team</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/invitePeople'>Invite People</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/teams'>All Teams</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </li>
      <li>
      <Dropdown  data-bs-theme="light">
        <Dropdown.Toggle split id="dropdown-button-light-example1" variant="">
          Task
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link to='/newTask'>New Task</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/tasks'>All Tasks</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </li>
      <li>
      <Dropdown  data-bs-theme="light">
        <Dropdown.Toggle split id="dropdown-button-light-example1" variant="">
          Projects
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link to='/newProject'>Create Project</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/projects'>All Projects</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </li> */}
     
      {/* <li>
        <Link to="/forUser">For You</Link>
      </li>
      <li>
        <Link to="/recent">Recent</Link>
      </li>
      <li>
        <Link to="/updateProfile">Update Profile</Link>
      </li>
      <li>
        <Link to="/starred">Starred</Link>
      </li>
      <li>
        <Link to="/apps">Apps</Link>
      </li> */}
    </ul>
     </div>
  );
};
