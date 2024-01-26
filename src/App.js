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
import mockDetectives from './mockDetectives'

function App() {
  const [detectives, setDetectives] = useState(mockDetectives);

  useEffect(() => {
    // Fetch detectives from an API or other source here
    // Then update the state with setDetectives
  }, []);
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detectiveedit" element={<DetetectiveEdit />} />
    <Route path="/detectiveindex" element={<DetetectiveIndex detectives={detectives} />} />
    <Route path="/detectivenew" element={<DetetectiveNew />} />
    <Route path="/detectiveshow/:id" element={<DetetectiveShow />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
