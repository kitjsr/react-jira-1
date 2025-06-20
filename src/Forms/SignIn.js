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
    username: yup.string().required()
    .min(5, 'username must be at least 5 characters long'),
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
          <Col ></Col>
          <Col md={5} className="signin1">
            <div>
              <h2>Log in to continue</h2>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  username:"",
                 password:"",
                
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                     
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
                    <Row className="mb-4">
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
                   
                    <Button type="submit">Log in</Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col ></Col>
        </Row>
      </Container>
    </div>
  
  )
}
