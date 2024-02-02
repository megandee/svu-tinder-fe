import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Col, Button, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './DetectiveIndex.scss'

const DetectiveIndex = ({ detectives }) => {
   return (
      <main className='body'>
      <div className='page-body'>
         <Row>
         {detectives.map((detective, index) => {
            return (
               <Col className="card-container" lg="2" key={index}>
                  <Card className="index-card" style={{ width: "14rem"}} key={index}>
                     <img alt={`profile of a detective named ${detective.name}`} className='image' src={detective.image} />
                     <CardBody style={{ width: "100%" }}>
                        <CardTitle className='title' tag="h5">{detective.name}</CardTitle>
                        <CardSubtitle className="mb-2 subtitle" tag="h6">
                           Age: {detective.age}
                        </CardSubtitle>
                        <NavLink to={`/detectiveshow/${detective.id}`} className="button nav-link">
                           See More Details
                        </NavLink>
                     </CardBody>
                  </Card>
                  </Col>
                        )
                     })}
                  </Row>
                  </div>
                  </main>
               )
}

export default DetectiveIndex 