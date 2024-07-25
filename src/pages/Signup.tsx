import Quote from '../components/Auth/Quote'
import Auth from '../components/Auth/Auth'


const Signup = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <Auth type="signup"/>
        <Quote/>
    </div>
  )
}

export default Signup