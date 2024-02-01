import React, { useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'

const DetectiveEdit = ({detectives, updateDetective}) => {
   const navigate = useNavigate()
   const { id } = useParams()
   let currentDetective = detectives?.find((detective) => detective.id === +id)

   const [editDetective, setEditDetective] = useState(() => ({
      name: currentDetective ? currentDetective.name : '',
      age: currentDetective ? currentDetective.age : '',
      hobbies: currentDetective ? currentDetective.hobbies : '',
      interested: currentDetective ? currentDetective.interested : '',
      pronouns: currentDetective ? currentDetective.pronouns : '',
      quotes: currentDetective ? currentDetective.quotes : '',
      cases: currentDetective ? currentDetective.cases : '',
      image: currentDetective ? currentDetective.image : '',
   }))

   const handleChange = (event) => {
      setEditDetective({...editDetective, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      updateDetective(editDetective, currentDetective.id)
      navigate("/detectiveindex")
   }

   return (
      <>
      <Form>
      <FormGroup>
         <Label for="name">Name</Label>
         <Input type="text" name="name" onChange={handleChange} value={editDetective.name} />
         <Label for="age">Age</Label>
         <Input type="text" name="age" onChange={handleChange} value={editDetective.age} />
         <Label for="hobbies">Hobbies</Label>
         <Input type="text" name="hobbies" onChange={handleChange} value={editDetective.hobbies} />
         <Label for="interested">Interested</Label>
         <Input type="text" name="interested" onChange={handleChange} value={editDetective.interested} />
         <Label for="pronouns">Pronouns</Label>
         <Input type="text" name="pronouns" onChange={handleChange} value={editDetective.pronouns} />
         <Label for="quotes">Quotes</Label>
         <Input type="text" name="quotes" onChange={handleChange} value={editDetective.quotes} />
         <Label for="cases">Cases</Label>
         <Input type="text" name="cases" onChange={handleChange} value={editDetective.cases} />
         <Label for="image">Image</Label>
         <Input type="text" name="image" onChange={handleChange} value={editDetective.image} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
      Updated Detective
      </Button>
      </Form>
      </>
   )
}

export default DetectiveEdit 