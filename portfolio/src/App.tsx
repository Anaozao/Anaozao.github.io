import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      </Route>
    </Routes>
  )
}

export default App
