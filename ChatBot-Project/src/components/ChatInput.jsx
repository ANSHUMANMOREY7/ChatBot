import { useState } from 'react';
import { Chatbot} from "supersimpledev"


export function ChatInput({ chatMessages , setChatMessages}) {
            const [ inputText , setInputText ]= useState('');

            function saveInputChnage(event){
                setInputText(event.target.value);
            }

            const newChatMessages=[
                ...chatMessages,
                {
                    message: inputText,
                    sender:'user',
                    id: crypto.randomUUID()
                }
            ]

            function sendMessage(){

                  setChatMessages(newChatMessages);

            const response=Chatbot.getResponse(inputText);
            (response)

             setChatMessages([

                ...newChatMessages,
                {
                    message: response,
                    sender:'robot',
                    id: crypto.randomUUID()
                }
            ]);

            setInputText('')
            }
            return (
                <div className="chat-input-container" >
                    <input className="chat-input"
                        placeholder="send a message to ChatBot"
                        size="30" 
                        onChange={saveInputChnage}
                        value={inputText}
                    />
                    <button onClick={sendMessage} className="send-btn" >Send</button>
                </div>
            );
        }

       