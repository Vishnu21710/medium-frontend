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
import { Toaster } from 'sonner'
import Library from './pages/Library'
import LibraryLayout from './components/Layout/LibraryLayout'
import UserLists from './pages/Library/pages/lists'
import SavedLists from './pages/Library/pages/saved-lists'
import Highlights from './pages/Library/pages/highlights'
import Statistics from './pages/Library/pages/statistics'
import SingleList from './pages/Library/pages/single-list'
import List from './pages/List/List'
import { DeleteModalContextProvider } from './contexts/DeleteModalContext'
import EditBlog from './pages/EditBlog'
type Props = {}

const App = (props: Props) => {
  return (
    <div className='font-["Playwrite PE"]'>
      <AuthProvider>
        <DeleteModalContextProvider>
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
                <Route path='/create' element={<CreateBlog />}/>
                <Route path='/edit/:id' element={<EditBlog/>}/>
                <Route path='/library' element={<LibraryLayout>
                  <Outlet />
                </LibraryLayout>}>
                  
                  <Route index element={<UserLists />} />
                  <Route path='saved-lists' element={<SavedLists />} />
                  <Route path='highlights' element={<Highlights />} />
                  <Route path='stats' element={<Statistics />} />
                  
                </Route>
                <Route path='/list/:id' element={<List/>}/>
              </Route>
              <Route path='/blogs/:id' element={<Blog />} />
            </Route>
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
        <Toaster richColors position='top-right' />
        </DeleteModalContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App