import React, { useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';
// import MaterialInput from '@material-ui/core/Input';

export const Tasks = () => {
  const [isLogin,setIsLogin]=useState(false);
  const [count,setCount]=useState(0);

  const changeLoginStatus=()=>{
    setIsLogin(true);
  }
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
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
            <h4>Manage Tasks</h4>
            <p>{isLogin?"Hii":"Hello"}</p>
            <Button onClick={changeLoginStatus}>Login</Button>
            <br></br>
            <p>Count = {count}</p>
            <Button onClick={increment}>Increment</Button>
            <br></br>
            <br></br>
            <Button onClick={decrement}>Decrement</Button>
            {/* <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikmobile"
                    >
                      <Form.Label>Mobile</Form.Label>
                      return <InputMask mask="+4\9 99 999 99" maskChar=" " />;
                    </Form.Group>
                    </Row>
                    </Form> */}

           </div>

          </Col>
        </Row>
      </Container>
    </>
  )
}
