import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import '../Styles/UpdateProfile.css'
import '../Styles/Teams.css'
import { Image } from "react-bootstrap";
import jiraAdd from "../Assets/jiraAdd.png";

function MyVerticallyCenteredModal(props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mobile: yup.string().required()
    .min(10, 'Mobile number must be of 10 digits')
    .max(10, 'Mobile number must be of 10 digits')
    .matches(/[0-9]/, 'Password requires a number'),
    email: yup.string().email().required(),
    designation: yup.string().required(),
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
           Add people
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>  
        <Row>
            <Col md={5}>
                <div className="modalPic"><Image src={jiraAdd} width={400} ></Image></div> 
             </Col>
            <Col>   
          <div className="team1">
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                designation: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                      <Form.Label>First name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={values.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          firstName is required
                          {/* {errors.firstName} */}
                        </Form.Control.Feedback>
                      </InputGroup>
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik02">
                      <Form.Label>Last Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                          isValid={touched.lastName && !errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          lastName is required
                          {/* {errors.lastName} */}
                        </Form.Control.Feedback>
                      </InputGroup>

                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikemail"
                    >
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="E-mail address"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          email is required
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
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
                    </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormik04">
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
                  <Button type="submit" variant='success'>Add</Button>
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

export const Teams = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2}>
            <div className="sidenav">
              <SideNav></SideNav>
            </div>
          </Col>
          <Col>
            <div className="manage1">
              <Row>
                <Col md={1}>
                  <Button variant="primary"> Create</Button>{" "}
                </Col>
                <Col md={1}>
                  <Button variant="danger">Delete</Button>
                </Col>
                <Col md={8}></Col>
                <Col md={2}>
                    <Button variant="success" onClick={() => setModalShow(true)}>
                       Add people
                    </Button>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}/>
                </Col>
                {/* <Col md={1}><Button variant="outline-info"> Export</Button></Col> */}
              </Row>
            </div>
            <div className="manage2">
              <h4>Manage Teams</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
