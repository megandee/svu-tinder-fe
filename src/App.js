import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Header'
import DetetectiveEdit from './pages/DetectiveEdit'
import DetetectiveIndex from './pages/DetectiveIndex'
import DetetectiveNew from './pages/DetectiveNew'
import DetetectiveShow from './pages/DetectiveShow'
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom"

function App() {
  const [detectives, setDetectives] = useState([]);

  useEffect(() => {
    readDetective()
  }, [])

const readDetective = () => {
  fetch("http://localhost:3000/detectives")
  .then((response) => response.json())
  .then((payload) => {
    console.log(payload);
    setDetectives(payload);
    console.log(detectives)
  })
  .catch((error) => console.log(error))
}

const createDetective = (detective) => {
  fetch("http://localhost:3000/detectives", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(detective),
  })
  .then((response) => response.json())
  .then(() => readDetective())
  .catch((error) => console.log(error))
}

const updateDetective = (detective, id) => {
  fetch(`http://localhost:3000/detectives/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(detective),
  })
  .then((response) => response.json())
  .then(() => readDetective())
  .catch((error) => console.log(error))
}

const deleteDetective = (id) => {
  fetch(`http://localhost:3000/detectives/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // No need to parse the response as JSON since it's a DELETE request
  })
  .then(() => readDetective())
  .catch((errors) => console.log("delete errors:", errors))
}
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detectiveindex" element={<DetetectiveIndex detectives={detectives} />} />
    <Route path="/detectiveshow/:id" element={<DetetectiveShow detectives={detectives} deleteDetective={deleteDetective} />} />
    <Route path="/detectivenew" element={<DetetectiveNew createDetective={createDetective} />} />
    <Route path="/detectiveedit/:id" element={<DetetectiveEdit detectives={detectives} updateDetective={updateDetective} />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
