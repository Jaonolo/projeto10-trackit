import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Login from "../Login"
import Register from "../Register"
import Habits from "../Habits"
import Today from "../Today"
import PrivateScreens from "../PrivateScreens"
import PublicScreens from "../PublicScreens"
import { UserContext } from "../../contexts/UserContext"

import './reset.css'
import './globals.css'

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicScreens/>} >
                        <Route path='/' element={<Login/>}/>
                        <Route path='/cadastro' element={<Register/>}/>
                    </Route>
                    <Route element={<PrivateScreens/>} >
                        <Route path='/habitos' element={<Habits/>}/>
                        <Route path='/hoje' element={<Today/>}/>
                        <Route path='/historico' element={<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    ) 
}
    

export default App