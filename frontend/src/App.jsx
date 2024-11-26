import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import AdminLogin from "./Pages/AdminLogin"
import AdminPanel from "./Pages/AdminPanel"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/AdminPanel" element={<AdminPanel />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
