import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/Signin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';

export const SignIn = () => {
  
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
   
  });
  return (
    <div>
      <Container fluid className='signin'>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="signin1">
            <div>
              <h2>Log in to continue</h2>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  email: "",
                  username:"",
                 password:"",
                
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-2">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder='E-mail address'
                          value={values.email}
                          onChange={handleChange}
                            isInvalid={!!errors.email}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                        {/* <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback> */}
                      </Form.Group>
                    
                      
                     
                      <Form.Group
                        as={Col}
                        md="12"
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
                            {errors.username}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik03"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          isValid={touched.password && !errors.password}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    
                   
                    </Row>
                   
                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  
  )
}
