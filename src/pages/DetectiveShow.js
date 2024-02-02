import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardColumns, Row } from 'reactstrap'
import './DetectiveShow.scss'

const DetectiveShow = ({ detectives, deleteDetective }) => {
   const { id } = useParams()

   let selectedDetective = detectives.find(detective => detective.id === +id)

   return (
      <div className='show-body'>
      <div >
         <Row>
         <CardColumns style={{width: '37rem'}}>
            <Card className="show-card">
            <CardBody>
               <img className="card-image" src={selectedDetective ? selectedDetective.image : 'Detective not found'} alt="Detective" />
                  <h1>{selectedDetective ? selectedDetective.name : 'Detective not found'}</h1>
                  <div className="show-card-text">
                     <p>Age: {selectedDetective ? selectedDetective.age : 'Detective not found'}</p>
                     <p>Hobbies: {selectedDetective ? selectedDetective.hobbies : 'Detective not found'}</p>
                     <p>Preference: {selectedDetective ? selectedDetective.interested : 'Detective not found'}</p>
                     <p>Pronouns: {selectedDetective ? selectedDetective.pronouns : 'Detective not found'}</p>
                     <p>Quotes: {selectedDetective ? selectedDetective.quotes : 'Detective not found'}</p>
                     <p>Favorite Cases: {selectedDetective ? selectedDetective.cases : 'Detective not found'}</p>
                  </div>
               <div className="horizonatal-buttons d-flex">
               <NavLink to={`/detectiveedit/${selectedDetective ? selectedDetective.id : ''}`} className="nav-link">
                  <Button className='show-button'>
                  Edit Detective Profile
                  </Button>
               </NavLink>
               <NavLink to="/detectiveindex">
                  <Button className='show-button' onClick={() => deleteDetective(id)}>Delete Detective Profile</Button>
               </NavLink>
               </div>
               </CardBody>
            </Card>
            </CardColumns>
         </Row>
      </div>
      </div>
   )
}

export default DetectiveShow