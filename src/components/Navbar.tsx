import SignIn from './SignIn';
import { auth } from '@/app/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut } from './SignOut';

const style = {
  nav: `bg-gray-700 h-20 flex justify-between items-center p-4 rounded-lg`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
