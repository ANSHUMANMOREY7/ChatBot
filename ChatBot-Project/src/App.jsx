import './App.css'
import { ChatInput} from './components/ChatInput';
import { ChatMessages}  from './components/ChatMessages';
import { useState } from 'react';      

 function App() {
             const [chatMessages , setChatMessages] = useState([{ message: "Ask anything... ", sender: 'robot', id: 1 }]
            );
            const [inputAtTop, setInputAtTop] = useState(true);
           // const[chatMessages , setChatMessages]= array;
           // const chatMessages = array[0];
           //const setChatMessages = array[1];

            return (
                <div className="app-container">
                    {inputAtTop && <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />}
                    <ChatMessages chatMessages={chatMessages} />
                    {!inputAtTop && <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />}
                    <button
                        className="input-position-control"
                        onClick={() => setInputAtTop(!inputAtTop)}
                    >
                        {inputAtTop ? 'Move input below messages' : 'Move input above messages'}
                    </button>
                </div>
            )
        }


export default App
