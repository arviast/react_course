import RobotImg from '../assets/robot.png'
import UserImg from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({message, sender}) {
  return (
    <div className={sender==='robot' ? "chat-message-robot" : "chat-message-user"}>
      {sender === 'robot' && <img className="chat-message-icon" src={RobotImg} />}
      <div className="chat-message-text">{message}</div>
      {sender === 'user' && <img className="chat-message-icon" src={UserImg} />}
    </div>
  );
}