import { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '@/app/firebase-config';

import { getRedirectResult, signInWithPopup } from 'firebase/auth';

const style = {
  wrapper: `flex justify-center`,
};
const googleSignIn = async () => {
  const result = await signInWithPopup(auth, provider);
};

const SignIn = () => {
  // Call this after the redirect, usually in a component that loads after the redirection
  const handleRedirectResult = async () => {
    const result = await getRedirectResult(auth);
    if (result) {
      // User is signed in
      console.log(result, 'result');
    } else {
      // No result found, or user hasn't signed in yet
      console.log('No redirect result found');
    }
  };
  useEffect(() => {
    handleRedirectResult();
  }, []);

  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
