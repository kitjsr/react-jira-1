import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import { InputTextarea } from "primereact/inputtextarea";

import '../Styles/Plans.css'

export const Plans = () => {
  const tasks=[
    {
      "id":"1",
      "taskName":"Get all the requirements",
      "date":'27/06/2025',
      "position":"1"
    },
    {
      "id":"2",
      "taskName":"Note the requirements",
      "date":'28/06/2025',
      "position":"5"
    },
    {
      "id":"3",
      "taskName":"Collect them",
      "date":'29/06/2025',
      "position":"6"
    },
    {
      "id":"4",
      "taskName":"Apply them",
      "date":'30/06/2025',
      "position":"3"
    },
    {
      "id":"5",
      "taskName":"Home page",
      "date":'01/07/2025',
      "position":"1"
    },
    {
      "id":"6",
      "taskName":"Dashboard page",
      "date":'07/07/2025',
      "position":"2"
    },
    {
      "id":"7",
      "taskName":"Login Page",
      "date":'09/07/2025',
      "position":"1"
    },
    {
      "id":"8",
      "taskName":"Deploy",
      "date":'10/07/2025',
      "position":"4"
    },
  ]
  const toDos=[
    {
      "id":"1",
      "toDo1":"Get all the requirements",
      "toDo2":"Note the requirements",
    },
  ]
  const inDesigns=[
    {
      "id":"1",
      "inDesign1":"Home Page Designing",
      "inDesign2":"Dashboard Designing",
    },
  ]
  const userTestings=[
    {
      "id":"1",
      "userTest1":"Test all the components of Home Page",
      "userTest2":"Test all the components of Dashboard",
    },
  ]
  const approvals=[
    {
      "id":"1",
      "approval1":"Approval of Home Page",
      "approval2":"Approval of Dashboard",
    },
  ]
  const lives=[
    {
      "id":"1",
      "live":"Deploy the page",
    },
  ]
  
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
            <h5>Manage Plans</h5>
            <Row className='box1'>
              <Col className='box2'>
              <h5>To-Do</h5>
              {
                tasks.filter((task)=>task.position==="1").map((task)=>(
                  <>
                <div className='box3'>
                    <p>{task.taskName}</p>
                </div>              
                </>
                ))
              }
             
              </Col>
              <Col className='box2'>
              <h5>In-Design</h5>
              {
                tasks.filter((task)=>task.position==="2").map((task)=>(
                  <>
                <div className='box3'>
                    <p>{task.taskName}</p>
                </div>              
                </>
                ))
              }
              </Col>
              <Col className='box2'>
              <h5>User-Testing</h5>
              {
                tasks.filter((task)=>task.position==="3").map((task)=>(
                  <>
                <div className='box3'>
                    <p>{task.taskName}</p>
                </div>              
                </>
                ))
              }
              </Col>
              <Col className='box2'>
              <h5>Approval</h5>
              {
                tasks.filter((task)=>task.position==="5").map((task)=>(
                  <>
                <div className='box3'>
                    <p>{task.taskName}</p>
                </div>              
                </>
                ))
              }
              </Col>
              <Col className='box2'>
              <h5>Live</h5>
              {
                tasks.filter((task)=>task.position==="4").map((task)=>(
                  <>
                <div className='box3'>
                    <p>{task.taskName}</p>
                </div>              
                </>
                ))
              }
              </Col>
            </Row>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
