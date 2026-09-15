import RobotProfileImage from '../assets/robot2.png';
import UserProfileImage from '../assets/user1.png'; 
 
 export function ChatMessage({ message, sender }) {
            // const message=props.message;
            // const sender=props.sender;

            // const {message , sender}=props;

            /*  if(sender === "robot") {
            return(<div>
                {message}
                <img src="robot.png" width="50"/>
                </div>);
            }*/
            return (
                <div className={ sender==='user'?'chat-message-user':'chat-message-robot'}>
                    {sender === "robot" && <img src={ RobotProfileImage } className="chat-msg-profile"/>}
                    <div className="chat-msg-text">
                        {message} 
                    </div>
                        {sender === "user" && <img src={ UserProfileImage } className="chat-msg-profile" />}
                </div>
            );
        }