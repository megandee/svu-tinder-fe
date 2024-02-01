import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Col, Button, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './DetectiveIndex.scss'

const DetectiveIndex = ({ detectives }) => {
   return (
      <main className='body'>
         <h1>SVU Tinder</h1>
         <Row>
         {detectives.map((detective, index) => {
            return (
               <Col lg="4" key={index}>
               <div className='card-holder'>
                  <Card style={{ width: "14rem"}} key={index}>
                     <img alt={`profile of a detective named ${detective.name}`} className='image' src={detective.image} />
                     <CardBody style={{ width: "100%" }}>
                        <CardTitle className='title' tag="h5">{detective.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted subtitle" tag="h6">
                           Age: {detective.age}
                        </CardSubtitle>
                        <NavLink to={`/detectiveshow/${detective.id}`} className="button nav-link">
                           See More Details
                        </NavLink>
                     </CardBody>
                  </Card>
               </div>
                  </Col>
                        )
                     })}
                  </Row>
                  </main>
               )
}

export default DetectiveIndex 