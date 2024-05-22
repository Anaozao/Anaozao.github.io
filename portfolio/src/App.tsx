import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import Contact from "./Pages/Contact/Contact"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  )
}

export default App
