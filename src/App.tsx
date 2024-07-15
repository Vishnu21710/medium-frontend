import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Signup from './pages/Signup'
import Layout from './components/Layout/Layout'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import AuthProvider from './contexts/AuthProvider'
import RequireAuth from './components/ProtectedRoutes/RequireAuth'
type Props = {}

const App = (props: Props) => {
  return (
    <div className=''>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={
              <Layout>
                <Outlet />
              </Layout>
            }>
              <Route path='/' element={<Blogs />} />
              <Route element={<RequireAuth>
                <Outlet />
              </RequireAuth>}>
                <Route path='/create' element={<CreateBlog />} />
              </Route>
              <Route path='/blogs/:id' element={<Blog />} />
            </Route>
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App