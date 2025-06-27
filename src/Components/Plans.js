import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import { InputTextarea } from "primereact/inputtextarea";

import '../Styles/Plans.css'

export const Plans = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
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
            <Row className='box1'>
              <Col className='box2'><InputTextarea autoResize value={value1} onChange={(e) => setValue1(e.target.value1)} rows={5} cols={30} /></Col>
              <Col className='box2'><InputTextarea autoResize value={value2} onChange={(e) => setValue2(e.target.value2)} rows={5} cols={30} /></Col>
              <Col className='box2'><InputTextarea autoResize value={value3} onChange={(e) => setValue3(e.target.value3)} rows={5} cols={30} /></Col>
              <Col className='box2'><InputTextarea autoResize value={value4} onChange={(e) => setValue4(e.target.value4)} rows={5} cols={30} /></Col>
            </Row>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
