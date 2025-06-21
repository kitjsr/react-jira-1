import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import '../Styles/UpdateProfile.css'

export const UpdateProfile = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2}>
          <div className="sidenav"><SideNav></SideNav></div>
            
          </Col>
          <Col>
          {/* <div className="manage1">
            <Row>
              <Col md={1}><Button variant="primary"> New</Button> </Col>
              <Col md={1}><Button variant="danger"> Delete</Button> </Col>
              <Col md={7}></Col>
              <Col md={1}><Button variant="success">Update</Button></Col>
              <Col md={1}><Button variant="info"> Export</Button></Col>
            </Row>
          </div> */}
          <div className="manage3">
            <div className="head">
            <h3>Update Your Profile</h3>
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                city: "",
                state: "",
                zip: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-4">
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
                          firstname is required
                          {/* {errors.firstName} */}
                        </Form.Control.Feedback>
                      </InputGroup>
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik02">
                      <Form.Label>Last name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          value={values.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                          isValid={touched.lastName && !errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          lastname is required
                          {/* {errors.lastName} */}
                        </Form.Control.Feedback>
                      </InputGroup>

                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                  </Row>
                  <Row className="mb-4">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikUsername"
                    >
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                          isValid={touched.username && !errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          username is required
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikEmail"
                    >
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="E-mail address"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    </Row>
                  <Row className="mb-4">
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                        isValid={touched.city && !errors.city}
                      />

                      <Form.Control.Feedback type="invalid">
                        city is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                        isValid={touched.state && !errors.state}
                      />
                      <Form.Control.Feedback type="invalid">
                        state is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Zip"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                        isInvalid={!!errors.zip}
                        isValid={touched.zip && !errors.zip}
                      />
                      <Form.Control.Feedback type="invalid">
                        zip is required
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
                  <Button type="submit">Update</Button>
                </Form>
              )}
            </Formik></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
