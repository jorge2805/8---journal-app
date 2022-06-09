import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Auth/*" element={<AuthRouter />} />          
            

            {/* <Route path="/Login" element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } /> */}

            {/* <Route path="/*" element={
              <PrivateRoute>
                <DashboardRouter />
              </PrivateRoute>
            } /> */}

            <Route path="/*" element={<JournalScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
