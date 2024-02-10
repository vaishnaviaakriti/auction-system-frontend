import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Chat from "./Pages/Chat"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Dashboardbid from "./Pages/Dashnoardbid"
import CongratulationPage from "./Pages/CongratulationPage"
import Dynamic from "./Pages/Dynamic"
import SellItem from "./Pages/SellItem"
import { Route, Routes } from "react-router-dom"
import { analytics } from "../src/Helper"
import { logEvent } from "firebase/analytics"



function App() {
if (analytics){
  logEvent(analytics, 'Init...')
}
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/contact"element={<Contact/>}/>
<Route path="/chat"element={<Chat/>}/>
<Route path="/About"element={<About/>}/>
<Route path="/Dashboard"element={<Dashboard/>}/>
<Route path="/Register"element={<Register/>}/>
<Route path="/Login"element={<Login/>}/>
<Route path="/Home"element={<Home/>}/>
<Route path="/SellItem"element={<SellItem/>}/>
<Route path="/Dashboardbid"element={<Dashboardbid/>}/>
<Route path="/CongratulationPage"element={<CongratulationPage/>}/>
<Route path="/Dynamic/:id"element={<Dynamic/>}/>
      </Routes>

      <Footer/> 
    </div>


  )
}

export default App
