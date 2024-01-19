
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/index'
import Button from '../components/shared/Button';

const Header = () => {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/login')
    }

  return (
    <div className='absolute z-10 w-full h-50'>
      <div className='flex justify-between w-full px-8 py-4'>
      <img src={logo}  alt='netflix logo' className='w-40 h-10'></img>
      <Button style="text-white bg-primary px-4 rounded-md h-9 font-semibold" onClick={handleSignIn}>
        Sign In
      </Button>
      </div>
    </div>
  )
}

export default Header