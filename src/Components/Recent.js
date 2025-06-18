import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SideNav } from './SideNav'

export const Recent = () => {
  return (
      <>
          <Container fluid className='dash'>
              <Row>
                  <Col md={2} className='sidenav'><SideNav></SideNav></Col>
                  <Col className='mainarea'>Recent</Col>
              </Row>
          </Container>
      </>
  )
}
