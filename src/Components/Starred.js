import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SideNav } from './SideNav'

export const Starred = () => {
  return (
      <>
          <Container fluid className='dash'>
              <Row>
                  <Col md={2} className='sidenav'><SideNav></SideNav></Col>
                  <Col className='mainarea'>Starred</Col>
              </Row>
          </Container>
      </>
  )
}
