import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Pages/Home/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
