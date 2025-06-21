import React from "react";
import {Container,Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Home.css";
import software from "../Assets/software.png"
import operation from "../Assets/operation.png"
import hr from "../Assets/hr.png"
import allTeams from "../Assets/allTeams.png"
import marketing from "../Assets/marketing.png"
import design from "../Assets/design.png"
import sales from "../Assets/sales.png"
import kanban_board from "../Assets/kanban_board.png"
const Home = () => {
  return (
    <>
      <Container fluid className="slidearea">
          <Row>
            <Col></Col>
            <Col md={7} className="slide1">
              {/* <Row> */}
                <button>
                  <div className="box"><Image src={software} width={30}></Image></div>
                    <p>Software</p>
                </button> 
                <button>
                  <div className="box"><Image src={operation} width={30}></Image></div>
                  <p>Operation</p>
                </button>
                <button>
                  <div className="box"><Image src={hr} width={30}></Image></div>
                  <p>HR</p>
                </button>
                <button>
                  <div className="box"><Image src={allTeams} width={30}></Image></div>
                  <p>All Teams</p>
                </button>
                <button>
                  <div className="box"><Image src={marketing} width={30}></Image></div>
                  <p>Marketing</p>
                </button>
                <button>
                  <div className="box"><Image src={design} width={30}></Image></div>
                  <p>Design</p>
                </button>
                <button>
                  <div className="box"><Image src={sales} width={30}></Image></div>
                  <p>Sales</p>
                </button>
              {/* </Row>  */}
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md={3} className="slide2">
            <div>
              <h1>Connect every team, task, and project together with Jira</h1>
              
            </div>
            </Col>
            <Col md={5} >
              <Image src={kanban_board} className="slide3"></Image>
            </Col>
            <Col></Col>
          </Row>

        {/* <div className="slidearea"> */}
          {/* <Row>
            <Col></Col>
            <Col md={5} className="slide1">
              <Row>
                <Col className="box"><Image src={software} width={30}></Image></Col>
                <Col className="box"><Image src={operation} width={30}></Image></Col>
                <Col className="box"><Image src={hr} width={30}></Image></Col>
                <Col className="box"><Image src={allTeams} width={30}></Image></Col>
                <Col className="box"><Image src={marketing} width={30}></Image></Col>
                <Col className="box"><Image src={design} width={30}></Image></Col>
                <Col className="box"><Image src={sales} width={30}></Image></Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="slide2">Home</Col>
            <Col className="slide3">It's Anushruti</Col>
          </Row> */}
          {/* </div> */}
        
      </Container>
      {/* <Container fluid className="timeline">
        <div >
        <Row>
          <Col>hii</Col>
        </Row>
        <Row>
          <Col>hlww</Col>
        </Row>
        <Row>
          <Col>Anu</Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="darea">
        <div >
        <Row>
          <Col>hii</Col>
        </Row>
        <Row>
          <Col>hlww</Col>
        </Row>
        <Row>
          <Col>Anu</Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="carea">
        <div >
        <Row>
          <Col>hii</Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="testarea">
        <div >
        <Row>
          <Col>hii</Col>
          <Col>hii</Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="footarea">
        <div >
        <Row>
          <Col>hii</Col>
          <Col>hii</Col>
          <Col>hii</Col>
          <Col>hii</Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="footer">
        <div >
        <Row>
          <Col>hii</Col>
          <Col>hii</Col>
        </Row>
        </div>
      </Container> */}
    </>
  );
};

export default Home;
