import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginConst from './Components/LoginRegister/Login.jsx'
import RegisterConst from './Components/LoginRegister/Register.jsx'
import DashboardConst from './Components/Dashboard/Dashboard.jsx'

import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom"



const router = createBrowserRouter ([
	{
		path: '/',
		element: <LoginConst/>
	},
	{
		path: "/register",
		element: <RegisterConst/>
	},
	{
		path: "/dashboard",
		element: <DashboardConst/>
	}

])

function App() {
  return <RouterProvider router={router}/>
}


export default App
