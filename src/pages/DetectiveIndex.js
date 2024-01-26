import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import mockDetectives from '../mockDetectives'
import { NavLink } from 'react-router-dom'

const DetectiveIndex = ({ detectives }) => {
   if (!mockDetectives.length) {
      return <div>Loading...</div>;
   }
   console.log(detectives)
   return (
      <main>
         <h1>SVU Tinder</h1>
         {mockDetectives?.map((detective, index) => {
            return (
               <Card
                  style={{
                  width: "14rem"
                }}
            key={index}
            >
        <img alt={`profile of a detective named ${detective.name}`} src={detective.image} />
        <CardBody>
          <CardTitle tag="h5">{detective.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Age: {detective.age}
          </CardSubtitle>
          <NavLink to={`/detectiveshow/${detective.id}`} className="nav-link">
            See More Details
          </NavLink>
        </CardBody>
      </Card>
            )
         })}
      </main>
   )
}

export default DetectiveIndex 