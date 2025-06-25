import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Col, Container, Row, Table } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import '../Styles/Projects.css'
import '../Styles/UpdateProfile.css'
import { Image } from "react-bootstrap";
import jiraAdd from "../Assets/jiraAdd.png";
import { FaBeer, FaPen, FaPenAlt, FaTrash } from "react-icons/fa";
import { red } from '@mui/material/colors';
import { InputMask } from '@react-input/mask';




function MyVerticallyCenteredModal(props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    projectName: yup.string().required(),
    clientName: yup.string().required(),
    mobile: yup.string().required()
      .matches(/^\d{10}$/, "Mobile number must be of 10 digits"),
    // .min(10,"Mobile number must be of 10 digits")
    // .max(10,"Mobile number must be of 10 digits"),
    timeAllotted: yup.string().required()
    .matches(/[0-9]/, 'Only number'),
    deadline: yup.string().required(),
    projectCategory: yup.string().required(),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           Create new project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <Row>
            <Col md={4} className='modalPic'><Image src={jiraAdd} width={300}></Image></Col>
            <Col>      
          <div className="project1">
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                projectName: "",
                clientName: "",
                mobile: "",
                timeAllotted: "",
                deadline: "",
                projectCategory: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormik01">
                      <Form.Label>Project name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="projectName"
                          placeholder="Project name"
                          value={values.projectName}
                          onChange={handleChange}
                          isInvalid={!!errors.projectName}
                          isValid={touched.projectName && !errors.projectName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* projectName is required */}
                          {errors.projectName}
                        </Form.Control.Feedback>
                      </InputGroup>
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md="12" controlId="validationFormik02">
                      <Form.Label>Client Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="clientName"
                          placeholder="Client Name"
                          value={values.clientName}
                          onChange={handleChange}
                          isInvalid={!!errors.clientName}
                          isValid={touched.clientName && !errors.clientName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* clientName is required */}
                          {errors.clientName}
                        </Form.Control.Feedback>
                      </InputGroup>

                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikmobile"
                    >
                      <Form.Label>Mobile</Form.Label>
                      <InputGroup hasValidation>
                        <InputMask mask="__________" replacement={{ _: /\d/ }} 
                         hasValidation
                          type="text"
                          placeholder="Mobile"
                          aria-describedby="inputGroupPrepend"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          isInvalid={!!errors.mobile}
                          isValid={touched.mobile && !errors.mobile}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* mobile is required */}
                          {errors.mobile}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                      <Form.Label>Project Category</Form.Label>
                      <Form.Select
                        type="text"
                        placeholder="projectCategory"
                        name="projectCategory"
                        value={values.projectCategory}
                        onChange={handleChange}
                        isInvalid={!!errors.projectCategory}
                        isValid={touched.projectCategory && !errors.projectCategory}>
                        <option value="">Select one</option>
                        <option value="eCommerce">E-Commerce Website</option>
                        <option value="realTimeChat">Real Time Chat App</option>
                        <option value="socialMedia">Social Media App</option>
                        <option value="expenseTracker">Expense Tracker App</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.projectCategory}
                        {/* projectCategory is required */}
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                  <Row className="mb-4">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormiktimeAllotted"
                    >
                      <Form.Label>Time Allotted(in weeks)</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          placeholder="Time Allotted"
                          aria-describedby="inputGroupPrepend"
                          name="timeAllotted"
                          value={values.timeAllotted}
                          onChange={handleChange}
                          isInvalid={!!errors.timeAllotted}
                          isValid={touched.timeAllotted && !errors.timeAllotted}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.timeAllotted}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                      <Form.Label>Deadline</Form.Label>
                      <Form.Control
                        type="date"
                        id='demo'
                         min="demo" max="2030-12-31"
                        placeholder="deadline"
                        name="deadline"
                        value={values.deadline}
                        onChange={handleChange}
                        isInvalid={!!errors.deadline}
                        isValid={touched.deadline && !errors.deadline}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.deadline}
                        {/* deadline is required */}
                      </Form.Control.Feedback>
                    </Form.Group>
                  
                  </Row>
                  {/* <Form.Group className="mb-4">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormik0"
                    />
                  </Form.Group> */}
                  <Button type="submit" variant='success'>Create</Button>
                </Form>
              )}
            </Formik></div>
        </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export const Projects = () => {
    // const [projects, setProjects] = useState([]);

    
  const [modalShow, setModalShow] = React.useState(false)
  const projects=[
    {
      "id":"1",
      "projectName":"MPS",
      "clientName":"Lupika Guha",
      "mobile":"7979797979",
      "projectCategory":"E-Commerce Website",
      "timeAlloted":4,
      "deadline":"22/07/2025",
      "terms":true
    },
    {
      "id":"2",
      "projectName":"CEC",
      "clientName":"Diksha Singh",
      "mobile":"4545454545",
      "projectCategory":"Expense Tracker",
      "timeAlloted":4,
      "deadline":"22/07/2025",
      "terms":true
    },
    {
      "id":"3",
      "projectName":"GPA",
      "clientName":"Snehal Kumari",
      "mobile":"9898989898",
      "projectCategory":"Real Time Chat App",
      "timeAlloted":4,
      "deadline":"22/07/2025",
      "terms":true
    },
    {
      "id":"4",
      "projectName":"Quora",
      "clientName":"Minu Kumari",
      "mobile":"6767676767",
      "projectCategory":"Social Media App",
      "timeAlloted":4,
      "deadline":"22/07/2025",
      "terms":true
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
              <Col md={1}>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    New
                 </Button>
                <MyVerticallyCenteredModal  show={modalShow} onHide={() => setModalShow(false)}/>
              </Col>
              {/* <Col md={1}><Button variant="danger">Delete</Button></Col> */}
              <Col md={9}></Col>
              <Col md={1}><Button variant="success">Update</Button></Col>
              <Col md={1}><Button variant="info"> Export</Button></Col>
            </Row>
          </div>
          <div className="manage2">
            <h4>Manage Projects</h4>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project Name</th>
                  <th>Client Name</th>
                  <th>Mobile</th>
                  <th>Project Category</th>
                  <th>Time Allotted(in weeks)</th>
                  <th>Deadline</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                projects.map((project)=>(
                  <tr>
                    <td className='alignCenter'>{project.id}</td>
                    <td>{project.projectName}</td>
                    <td>{project.clientName}</td>
                    <td className='alignCenter'>{project.mobile}</td>
                    <td>{project.projectCategory}</td>
                    <td className='alignCenter'>{project.timeAlloted}</td>
                    <td className='alignCenter'>{project.deadline}</td>
                    <td><FaPen style={{color:"blue",marginLeft:"15px"}}/></td>
                    <td><FaTrash style={{color:"red",marginLeft:"20px"}}/></td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
            <h2>Filter table</h2>
            
        <div className="card card1" >
            <DataTable value={projects} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
                <Column field="projectName" header="Project Name" sortable style={{ width: '25%' }}></Column>
                <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
                <Column field="mobile" header="Mobile Number" sortable style={{ width: '25%' }}></Column>
                <Column field="projectCategory" header="Project Category" sortable style={{ width: '25%' }}></Column>
                <Column field="deadline" header="Deadline" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
