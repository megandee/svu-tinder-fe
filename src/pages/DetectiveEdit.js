import { useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useParams } from 'react-router-dom'

const DetectiveEdit = (updateDetective) => {
   const { id } = useParams()

   let currentDetective = detective?.find(detective => detective.id === +id)

   const handleSubmit = (event) => {
      event.preventDefault()
      updateDetective(detective)
   }

   const [detective, setDetective] = useState({
      name: '',
      age: '',
      hobbies: '',
      interested: '',
      pronouns: '',
      quotes: '',
      cases: '',
      image: ''
   })
   return (
      <Button onClick={handleSubmit} name="submit">
      Submit Updated Cat
      </Button>
   )
}

export default DetectiveEdit 