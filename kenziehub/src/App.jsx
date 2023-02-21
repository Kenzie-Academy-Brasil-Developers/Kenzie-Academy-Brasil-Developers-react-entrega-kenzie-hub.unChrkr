import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalReset } from './StyledApp.js'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginForm } from './Components/Login'
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './Components/Dashboard';
import { RegisterForm } from './Components/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from './Components/ProtectedRoutes';


function App() {





  return (
    <div className="App">
      <ToastContainer />
      <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/registerform' element={<RegisterForm />} />
          <Route path='*' element={<LoginForm />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/dashboardpage' element={<DashboardPage />} />
        </Route>
      </Routes>
      <GlobalReset />


    </div>
  )
}

export default App
