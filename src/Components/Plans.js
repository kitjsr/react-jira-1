import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';

export const Plans = () => {
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2}>
          <div className="sidenav"><SideNav></SideNav></div>
            
          </Col>
          <Col>
          <div className="manage1">
            <Row>
              <Col md={1}><Button variant="primary"> New</Button> </Col>
              <Col md={1}><Button variant="danger">Delete</Button></Col>
              <Col md={8}></Col>
              <Col md={1}><Button variant="success">Update</Button></Col>
              <Col md={1}><Button variant="info"> Export</Button></Col>
            </Row>
                       
            
             
          </div>
          <div className="manage2">
            <h4>Manage Plans</h4>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
