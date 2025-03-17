import Footer from "./assets/components/Footer"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import Navbar2 from "./assets/components/Navbar2"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import {Route, Routes} from "react-router-dom";

import NotFound from "./pages/NotFound"
import Profile from "./assets/components/Profile"
import UserProvider from "./context/UserContext"
import LoginContext from "./context/LoginContext"


const App = () => {
  return (
    <>
    <UserProvider>
   <Navbar2 />
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/*" element={<NotFound />} />
    <Route path="/pizzas/:id" element={<Pizza />} />
    <Route path="profile" element={
      <LoginContext>
<Profile />
      </LoginContext>
      
      } />
   </Routes>
   </UserProvider>
   
   
   
   {/*<Register />*/}
   {/*<LoginPage />*/}
   
   {/*<Cart />*/}
   {/*<Pizza /> */}
   <Footer />
   
   
   </>
  )
}

export default App
