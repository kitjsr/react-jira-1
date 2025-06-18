import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SideNav } from './SideNav'

export const ForUser = () => {
  return (
    <>
        <Container fluid className='dash'>
            <Row>
                <Col md={2} className='sidenav'><SideNav></SideNav></Col>
                <Col className='mainarea'>
                    <h1>G'day! Anushruti Mahato</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}
