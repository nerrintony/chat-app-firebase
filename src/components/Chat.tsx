'use client';

import { useEffect, useRef, useState } from 'react';
import { Message } from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/app/firebase-config';
import SendMessage from './SendMessage';

// import { useState, useEffect, useRef } from "react";
const style = {
  main: `flex flex-col p-[10px] relative`,
};

interface Message {
  id: string;
  text: string;
  timestamp: any;
  name: string;
}
export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const scroll = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages: Message[] = [];
      querySnapshot.forEach((doc) => {
        const messageData = doc.data() as Omit<Message, 'id'>; // Exclude 'id' from Firestore data
        messages.push({ ...messageData, id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  });

  return (
    <>
      <main className={style.main}>
        {messages?.map((msg) => (
          <Message key={msg.id} propsMessage={msg} />
        ))}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};
