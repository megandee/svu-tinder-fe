import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from "reactstrap"
import {useNavigate} from 'react-router-dom' 

const DetectiveNew = ({createDetective}) => {
   const navigate = useNavigate()
   const [newDetective, setNewDetective] = useState({
      name: '',
      age: '',
      hobbies: '',
      interested: '',
      pronouns: '',
      quotes: '',
      cases: '',
      image: ''
   })
   const handleChange = (event) => {
      setNewDetective({...newDetective, [event.target.name]: event.target.value})
   }
   const handleSubmit = (event) => {
      createDetective(newDetective)
      navigate('/detectiveindex')
   }

   return (
      <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" onChange={handleChange} value={newDetective.name} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input type="text" name="age" onChange={handleChange} value={newDetective.age} />
        </FormGroup>
      <FormGroup>
         <Label for="hobbies">Hobbies</Label>
         <Input type="text" name="hobbies" onChange={handleChange} value={newDetective.hobbies} />
      </FormGroup>
      <FormGroup>
         <Label for="interested">Interested</Label>
         <Input type="text" name="interested" onChange={handleChange} value={newDetective.interested} />
      </FormGroup>
      <FormGroup>
         <Label for="pronouns">Pronouns</Label>
         <Input type="text" name="pronouns" onChange={handleChange} value={newDetective.pronouns} />
      </FormGroup>
      <FormGroup>
         <Label for="quotes">Quotes</Label>
         <Input type="text" name="quotes" onChange={handleChange} value={newDetective.quotes} />
      </FormGroup>
      <FormGroup>
         <Label for="cases">Cases</Label>
         <Input type="text" name="cases" onChange={handleChange} value={newDetective.cases} />
      </FormGroup>
      <FormGroup>
         <Label for="image">Image</Label>
         <Input type="text" name="image" onChange={handleChange} value={newDetective.image} />
      </FormGroup>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </Form>
   )
}

export default DetectiveNew