import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/header/Header"
import HeaderBar from "./components/header/HeaderBar"

export default function App(){

  return(
    <BrowserRouter>
      <HeaderBar />
      <Header />
      <hr />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}