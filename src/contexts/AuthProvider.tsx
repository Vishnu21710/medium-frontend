import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { User } from '../types'
import Auth from '../components/Auth/Auth'
import axios from 'axios'
import { API_URL } from '../constants/constants'

type Props = {
    children: ReactNode
}

type Auth = Pick<User, "id"> & {token: string}
interface AuthContextType {
    auth: Auth | null,
    setAuth: Dispatch<SetStateAction<Auth | null>> | null
    loading: boolean
} 


const AuthContext = createContext<AuthContextType>({
    auth: null,
    setAuth: null,
    loading:true
})

const AuthProvider = ({ children }: Props) => {

    const [auth, setAuth] = useState<Auth | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    

    useEffect(()=>{
        const token = localStorage.getItem("jwt")
        if(!token){
            setLoading(false)
            return
        }
        const getUser = async()=>{
            try {
              const response = await axios.get<{user:User}>(`${API_URL}/user/get-user?token=${token}`)
              const user = response.data?.user
              
            //   if(response.status === 403){
            //     setError("Unauthorized")
            //   }
              
              setAuth({
                id: user.id,
                token: token || ""
              })
            } catch (error) {
              console.log(error);
              
            }
            setLoading(false)
          }
          getUser()

    }, [])

    const values = {
        auth,
        setAuth,
        loading
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export default AuthProvider