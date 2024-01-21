import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Chat from "./Pages/Chat"
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


      </Routes>

      <Footer />
    </div>


  )
}

export default App
