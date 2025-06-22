import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import "../Styles/Dashboard.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { SideNav } from "./SideNav";
import { ForUser } from "./ForUser";
// import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2}>
          <div className="sidenav"><SideNav></SideNav></div>
            
          </Col>
          <Col md={10}>
          <div className="manage3">
            <h2>G'Day Anushruti!</h2>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};




    // <div className="dash1">
    //   <div className="sidebar">
    //     <Sidebar
    //       rootStyles={{
    //         [`.${sidebarClasses.container}`]: {
    //           backgroundImage: "linear-gradient(to right,#80deea,#4dd0e1,#26c6da,#00bcd4,#00acc1, #0097a7)"
    //         },
    //       }}
    //     >
    //       <Menu
    //         menuItemStyles={{
    //           button: {
    //             // the active class will be added automatically by react router
    //             // so we can use it to style the active menu item
    //             [`&.active`]: {
    //               backgroundColor: "#13395e",
    //               color: "#b6c8d9",
    //             },
    //           },
    //         }}
    //       >
    //         <MenuItem> Documentation</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> E-commerce</MenuItem>
    //         <MenuItem> Documentation</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> E-commerce</MenuItem>
    //         <MenuItem> Documentation</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> E-commerce</MenuItem>
    //         <MenuItem> Documentation</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> E-commerce</MenuItem>

    //         {/* <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    // <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
    // <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}
    //     </Menu>
    //     </Sidebar>
    //   </div>
    //   <div className="mainarea">
    //     {/* <iframe width="100%" height="100%"></iframe> */}
    //     <h2>Coming soon!</h2>
    //   </div>
    // </div>