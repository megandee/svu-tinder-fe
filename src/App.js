import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DetetectiveEdit from './pages/DetectiveEdit'
import DetetectiveIndex from './pages/DetectiveIndex'
import DetetectiveNew from './pages/DetectiveNew'
import DetetectiveShow from './pages/DetectiveShow'
import NotFound from './pages/NotFound'
import { Routes, Route, Router } from "react-router-dom"

function App() {
  const [detectives, setDetectives] = useState([]);

  const readDetective = useCallback(() => {
    fetch("http://localhost:3000/detectives")
    .then((response) => response.json())
    .then((payload) => {
      console.log(payload);
      setDetectives(payload);
    })
    .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    readDetective()
  }, [readDetective])
  
  const createDetective = (newDetective) => {
    fetch('http://localhost:3000/detectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ detective: newDetective }),
    })
    .then((response) => response.json())
    .then((newDetectiveFromServer) => {
      setDetectives([...detectives, newDetectiveFromServer]);
    })
    .catch((error) => console.log(error));
  };

  const updateDetective = (updatedDetective, id) => {
    fetch(`http://localhost:3000/detectives/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDetective),
    })
    .then((response) => response.json())
    .then((updatedDetectiveFromServer) => {
      setDetectives(detectives.map(detective => 
        detective.id === id ? updatedDetectiveFromServer : detective
      ));
    })
    .catch((error) => console.log(error))
  }

  const deleteDetective = (id) => {
    fetch(`http://localhost:3000/detectives/${id}`, {
      method: "DELETE"
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Remove the deleted detective from the state
      setDetectives(newDetectives => {
        const updatedDetectives = newDetectives.filter(detective => detective.id !== id);
        return updatedDetectives;
      });
    })
    .catch((error) => console.log(error))
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
