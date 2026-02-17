import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/header/Header"
import HeaderBar from "./components/header/HeaderBar"
import Home from "./components/Home/Home"

export default function App(){

  return(
    <BrowserRouter>
      <HeaderBar />
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}