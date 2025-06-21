import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
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




function MyVerticallyCenteredModal(props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    projectName: yup.string().required(),
    clientName: yup.string().required(),
    mobile: yup.string().required(),
    timeAllotted: yup.string().required(),
    deadline: yup.string().required(),
    designation: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
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
                designation: "",
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
                          projectName is required
                          {/* {errors.projectName} */}
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
                          clientName is required
                          {/* {errors.clientName} */}
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
                        <Form.Control
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
                          mobile is required
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Designation"
                        name="designation"
                        value={values.designation}
                        onChange={handleChange}
                        isInvalid={!!errors.designation}
                        isValid={touched.designation && !errors.designation}
                      />
                      <Form.Control.Feedback type="invalid">
                        designation is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                  <Row className="mb-4">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormiktimeAllotted"
                    >
                      <Form.Label>Time Allotted</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
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
                        placeholder="deadline"
                        name="deadline"
                        value={values.deadline}
                        onChange={handleChange}
                        isInvalid={!!errors.deadline}
                        isValid={touched.deadline && !errors.deadline}
                      />

                      <Form.Control.Feedback type="invalid">
                        deadline is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  
                  </Row>
                  <Form.Group className="mb-4">
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
                  </Form.Group>
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
  const [modalShow, setModalShow] = React.useState(false)


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
              <Col md={1}><Button variant="danger">Delete</Button></Col>
              <Col md={8}></Col>
              <Col md={1}><Button variant="success">Update</Button></Col>
              <Col md={1}><Button variant="info"> Export</Button></Col>
            </Row>
          </div>
          <div className="manage2">
            <h4>Manage Projects</h4>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
