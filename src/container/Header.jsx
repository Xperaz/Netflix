import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/index'
import Button from '../components/shared/Button';
import { auth } from '../firebase/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';


const Header = ({btnName}) => {
  const navigate = useNavigate();
  const  userInfo = useSelector(store => store.user);

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    const handleLogOut = (e) => {
      e.preventDefault();
      signOut(auth).then(() => {
       navigate('/');
        // Sign-out successful.
      }).catch((error) => {
        console.log("can't log out ", error.message);
      });
  }

  return (
    <div className='absolute z-10 w-full h-50'>
      <div className='flex justify-between w-full px-8 py-4'>
      <img src={logo}  alt='netflix logo' className='w-40 h-10'></img>
      { btnName === 'login' ? (<Button style="text-white bg-primary px-4 rounded-md h-9 font-semibold" onClick={handleSignIn}>
        Sign In
      </Button>) : (null)
      }

      { userInfo !== null && btnName === 'logout' ? (
      <div className='flex justify-between items-center gap-4'>
        <Button style="text-white bg-primary px-4 rounded-md h-9 font-semibold" onClick={handleLogOut}>
          Log Out
        </Button>
        <img src={userInfo?.user?.photoURL} alt={`${userInfo?.user?.displayName} profile image`} className='w-12 h-12 rounded-full' />
      </div> ) : (null)
      }
      </div>
    </div>
  )
}

export default Header