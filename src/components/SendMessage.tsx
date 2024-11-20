import { auth, db } from '@/app/firebase-config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FormEventHandler, useState } from 'react';

const style = {
  form: `h-14 w-full max-₩-[728px] flex text-xl absolute bottom-0 gap-1`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-lg`,
  button: `w-[20%] bg-green-500 rounded-lg`,
};

interface SendMessageProps {
  scroll: React.RefObject<HTMLSpanElement>;
}

const SendMessage: React.FC<SendMessageProps> = ({ scroll }) => {
  const [input, setInput] = useState('');

  const sendMessage: FormEventHandler<HTMLFormElement> = async (e) => {
    e?.preventDefault();
    if (input === '') {
      alert('Please enter data');
      return;
    }
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: auth.currentUser?.displayName,
      uid: auth.currentUser?.uid,
      timestamp: serverTimestamp(),
    });
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
    setInput('');
  };

  return (
    <form className={style.form} onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};
export default SendMessage;
