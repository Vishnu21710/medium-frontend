import { ReactNode } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

type Props = {
    children: ReactNode
}

const RequireAuth = ({ children }: Props) => {
    const { auth, loading } = useAuth()
    const location = useLocation()

    console.log(auth, "auth");
    
    if (loading) {
        return <p>Loading.....USERRRR</p>
    }

    

    return auth ? children : <Navigate to={'/signin'} state={{ from: location }} replace />
}

export default RequireAuth