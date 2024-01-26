import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const DetectiveShow = ({ detectives, deleteDetective }) => {
   const { id } = useParams()

   let selectedDetective = detectives.find(detective => detective.id === +id)

   return (
      <div>
         <img src={selectedDetective ? selectedDetective.image : 'Detective not found'} alt="Detective" />
         <h1>{selectedDetective ? selectedDetective.name : 'Detective not found'}</h1>
         <p>{selectedDetective ? selectedDetective.age : 'Detective not found'}</p>
         <p>{selectedDetective ? selectedDetective.hobbies : 'Detective not found'}</p>
         <p>{selectedDetective ? selectedDetective.interested : 'Detective not found'}</p>
         <p>{selectedDetective ? selectedDetective.pronouns : 'Detective not found'}</p>
         <p>{selectedDetective ? selectedDetective.quotes : 'Detective not found'}</p>
         <p>{selectedDetective ? selectedDetective.cases : 'Detective not found'}</p>
         <NavLink to={`/detectiveedit/${selectedDetective ? selectedDetective.id : ''}`} className="nav-link">
            Edit Detective Profile
         </NavLink>
         <NavLink to="/detectiveindex">
            <Button onClick={() => deleteDetective(id)}>Delete Detective Profile</Button>
         </NavLink>
      </div>
   )
}

export default DetectiveShow