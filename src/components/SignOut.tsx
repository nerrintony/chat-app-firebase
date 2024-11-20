import { auth } from '@/app/firebase-config';

const style = {
  signOutButton: `bg-gray-200 px-4 py-2 text-red-700 text-2xl rounded-lg`,
};

export const SignOut = () => {
  return (
    <button className={style.signOutButton} onClick={() => auth.signOut()}>
      Log Out
    </button>
  );
};
