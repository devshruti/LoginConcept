import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/LoginPage"
import Home from "../components/Home"

export const AllRoutes = () =>{
    return(
        <>
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Home"  element={<Home/>} />
    </Routes>
        </>
    )
}