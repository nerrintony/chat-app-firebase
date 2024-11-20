const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5eal] text-black float-left rounded-br-full`,
};

interface propsMessage {
  id: string;
  text: string;
  timestamp: any;
  name: string;
}

interface Message {
  propsMessage: propsMessage;
}

export const Message: React.FC<Message> = ({ propsMessage }) => {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>{propsMessage.name}</p>
        <p>{propsMessage.text}</p>
      </div>
    </div>
  );
};
