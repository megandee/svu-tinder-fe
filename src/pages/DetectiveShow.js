import React from 'react'
import { useParams } from 'react-router-dom'
import mockDetectives from '../mockDetectives'

const DetectiveShow = () => {
   const { id } = useParams()
   console.log(id)
   console.log(mockDetectives)
   const detective = mockDetectives.find((detective) => detective.id === Number(id))
   console.log(detective)
   return (
      <div>
         <img src={detective ? detective.image : 'Detective not found'} alt="Detective" />
         <h1>{detective ? detective.name : 'Detective not found'}</h1>
         <p>{detective ? detective.age : 'Detective not found'}</p>
         <p>{detective ? detective.hobbies : 'Detective not found'}</p>
         <p>{detective ? detective.interested : 'Detective not found'}</p>
         <p>{detective ? detective.pronouns : 'Detective not found'}</p>
         <p>{detective ? detective.quotes : 'Detective not found'}</p>
         <p>{detective ? detective.cases : 'Detective not found'}</p>
      </div>
   )
}

export default DetectiveShow