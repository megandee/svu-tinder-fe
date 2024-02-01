import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './DetectiveIndex.scss'

const DetectiveIndex = ({ detectives }) => {
   return (
      <main className='main'>
         <h1>SVU Tinder</h1>
         {detectives.map((detective, index) => {
            return (
               <div className='card-body'>
               <Card
                  style={{
                  width: "14rem"
                }}
            key={index}
            >
        <img alt={`profile of a detective named ${detective.name}`} className='image' src={detective.image} />
        <CardBody>
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
            )
         })}
      </main>
   )
}

export default DetectiveIndex 