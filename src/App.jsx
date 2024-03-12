import { BrowserRouter, Route, Routes,} from "react-router-dom"
import { Login, Register,Dashboard } from "./pages"
import ProtectedRoute from "./components/sso/ProtectedRoute"
import {Customers,Home,Invoice,Orders,Scanner,Track,Inventory,} from './pages/dash'

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
            <Route path="/" element={< Register/>}/>
            <Route path="/login" element={< Login/>}/>
            <Route path="/dashboard"  element={<ProtectedRoute><Dashboard/></ProtectedRoute>} >
                <Route index element={<Home/>} />
                <Route path="customers" element={<Customers/>} />
                <Route path="invoice" element={<Invoice/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="track" element={<Track/>} />
                <Route path="scanner" element={<Scanner/>} />
                <Route path="inventory" element={<Inventory/>} />
            </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
