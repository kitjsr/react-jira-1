import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { SideNav } from "../Components/SideNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";
import "../Styles/UpdateProfile.css";
import "../Styles/Teams.css";
import { Image } from "react-bootstrap";
import jiraAdd from "../Assets/jiraAdd.png";
import { FaBeer, FaPen, FaTrash } from "react-icons/fa";
import { colors } from "@mui/material";

function CreateTeam(props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    teamName: yup.string().required(),
    projectName: yup.string().required(),
    teamMember: yup.string().required(),
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
          Create Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5}>
            <div className="modalPic">
              <Image src={jiraAdd} width={400}></Image>
            </div>
          </Col>
          <Col>
            <div className="team1">
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  teamName: "",
                  teamMember: "",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Team name</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            name="teamName"
                            placeholder="Team name"
                            value={values.teamName}
                            onChange={handleChange}
                            isInvalid={!!errors.teamName}
                            isValid={touched.teamName && !errors.teamName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {/* teamName is required */}
                            {errors.teamName}
                          </Form.Control.Feedback>
                        </InputGroup>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Project name</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Select
                            type="text"
                            name="projectName"
                            placeholder="Project name"
                            value={values.projectName}
                            onChange={handleChange}
                            isInvalid={!!errors.projectName}
                            isValid={touched.projectName && !errors.projectName}>
                          <option value="">Select Project</option>
                          <option value="MPS"> MPS</option>
                          <option value="CEC">CEC</option>
                          <option value="GPA"> GPA</option>
                          <option value="Quora">Quora</option>
                        </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {/* projectName is required */}
                            {errors.projectName}
                          </Form.Control.Feedback>
                        </InputGroup>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Members Assigned</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Select
                            type="text"
                            name="teamMember"
                            // placeholder="Choose people"
                            value={values.teamMember}
                            onChange={handleChange}
                            isInvalid={!!errors.teamMember}
                            isValid={touched.teamMember && !errors.teamMember}>
                          <option value=""> Choose people</option>
                          <option value="Anushruti Mahato"> Anushruti Mahato</option>
                          <option value="Esha Kumari">Esha Kumari</option>
                          <option value="Aman Kumar Verma"> Aman Kumar Verma</option>
                          <option value="Aditya Shukla"> Aditya Shukla</option>
                        </Form.Select>

                          <Form.Control.Feedback type="invalid">
                            {/* teamMember is required */}
                            {errors.teamMember}
                          </Form.Control.Feedback>
                        </InputGroup>

                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                      </Form.Group>
                    </Row>
                    <Button type="submit" variant="success">
                      Add
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function AddPeple(props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mobile: yup
      .string()
      .required()
      .matches(/^\d{10}$/, "Mobile number must be of 10 digits"),
      // .min(10, "Mobile number must be of 10 digits")
      // .max(10, "Mobile number must be of 10 digits")
      // .matches(/[0-9]/, "Password requires a number"),
    email: yup.string().email().required(),
    roleAssigned: yup.string().required(),
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add people</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5}>
            <div className="modalPic">
              <Image src={jiraAdd} width={400}></Image>
            </div>
          </Col>
          <Col>
            <div className="team1">
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  teamName: "",
                  teamMember: "",
                  mobile: "",
                  email: "",
                  roleAssigned: "",
                  // terms: false,
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01"
                      >
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
                            {/* teamName is required */}
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </InputGroup>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik02"
                      >
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
                            {/* teamMember is required */}
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </InputGroup>

                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
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
                            {errors.email}
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
                            {errors.mobile}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik04"
                      >
                        <Form.Label>Role Assigned</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          type="text"
                          placeholder="roleAssigned"
                          name="roleAssigned"
                          value={values.roleAssigned}
                          onChange={handleChange}
                          isInvalid={!!errors.roleAssigned}
                          isValid={touched.roleAssigned && !errors.roleAssigned}
                        >
                          <option value="">Select one</option>
                          <option value="Designer">Designer</option>
                          <option value="Developer">Developer</option>
                          <option value="Tester">Tester</option>
                          <option value="Deployer">Deployer</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.roleAssigned}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit" variant="success">
                      Add
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
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
  const [modalCreate, setModalCreate] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const addPeople=[
    {
      "id":"1",
      "firstName":"Anushruti",
      "lastName":"Mahato",
      "mobile":"6287752535",
      "email":"anushruti5882@gmail.com",
      "roleAssigned":"Designer",
    },
    {
      "id":"2",
      "firstName":"Esha",
      "lastName":"Kumari",
      "mobile":"7667017876",
      "email":"eshakumarijsr0@gmail.com",
      "roleAssigned":"Developer",
    },
    {
      "id":"3",
      "firstName":"Aman",
      "lastName":" Kumar Verma",
      "mobile":"9393939393",
      "email":"amankumar@gmail.com",
      "roleAssigned":"Tester",
    },
    {
      "id":"4",
      "firstName":"Aditya",
      "lastName":"Shukla",
      "mobile":"7878787878",
      "email":"adityashukla02@gmail.com",
      "roleAssigned":"Deployer",
    },
  ]
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2} className="leftBody">
            <div className="sidenav">
              <SideNav></SideNav>
            </div>
          </Col>
          <Col className="rightBody">
            <div className="manage1">
              <Row>
                <Col md={1}>
                  <Button
                    variant="primary"
                    onClick={() => setModalCreate(true)}
                  >
                    New
                  </Button>

                  <CreateTeam
                    show={modalCreate}
                    onHide={() => setModalCreate(false)}
                  />
                </Col>
                <Col md={1}>
                  <Button variant="danger">Delete</Button>
                </Col>
                <Col md={8}></Col>
                <Col md={2}>
                  <Button variant="success" onClick={() => setModalShow(true)}>
                    Add people
                  </Button>
                  <AddPeple
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
                {/* <Col md={1}><Button variant="outline-info"> Export</Button></Col> */}
              </Row>
            </div>
            <div className="manage2">
              <h4>Manage People</h4>
              <Table striped hover bordered>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Full Name</th>
                    {/* <th>Last name</th> */}
                    <th>Mobile number</th>
                    <th>E-mail</th>
                    <th>Role Assigned</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    addPeople.map((people)=>(
                      <tr>
                        <td className="alignCenter">{people.id}</td>
                        <td>{people.firstName +" "}{people.lastName}</td>
                        {/* <td>{people.lastName}</td> */}
                        <td className="alignCenter">{people.mobile}</td>
                        <td>{people.email}</td>
                        <td>{people.roleAssigned}</td>
                        <td><FaPen style={{color:"blue",marginLeft:"15px"}}/></td>
                        <td><FaTrash style={{color:"red",marginLeft:"20px"}}/></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
