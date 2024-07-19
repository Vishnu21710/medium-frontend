import { ReactNode } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'

type Props = {
    children: ReactNode
}

const RequireAuth = ({ children }: Props) => {
    const { auth, loading } = useAuth()
    const location = useLocation()

    console.log(auth, "auth");
    
    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                        <LoaderCircle className='animate-spin w-7 h-7'/>
            </div>
        )
    }

    

    return auth ? children : <Navigate to={'/signin'} state={{ from: location }} replace />
}

export default RequireAuth