import { BrowserRouter, Route, Routes,} from "react-router-dom"
import { Login, Register,Dashboard } from "./pages"
import {Customers,Home,Invoice,Orders,Scanner,Track} from './pages/dash'

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
            <Route path="/" element={< Register/>}/>
            <Route path="/login" element={< Login/>}/>
            <Route path="/dashboard"  element={<Dashboard/>} >
                <Route index element={<Home/>} />
                <Route path="customers" element={<Customers/>} />
                <Route path="invoice" element={<Invoice/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="track" element={<Track/>} />
                <Route path="scanner" element={<Scanner/>} />
            </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
