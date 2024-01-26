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
         <h1>{detective ? detective.name : 'Detective not found'}</h1>
      </div>
   )
}

export default DetectiveShow