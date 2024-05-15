import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth"
import { Loading } from "../components"
import { useCheckingUser } from "../hooks/useCheckingUser"

export const AppRouter = () => {

  const { status } = useCheckingUser();

  if (status === 'en-revision')
    return <Loading />

  return (
    <Routes>

      {
        status === 'autenticado'
          ? <Route path='/*' element={<JournalRoutes />} />
          : <Route path='auth/*' element={<AuthRoutes />} />
      }


      <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
