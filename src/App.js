import { ChatEngine } from 'react-chat-engine';

import Feed from './components/Feed'
import LoginScreen from './components/LoginScreen';


import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginScreen />;

    return (

        <ChatEngine

        height="100vh" //the chat application takes up most of the app so we can set it to 100
        projectID="9ae763f9-c429-44ae-869c-a952e4b31937" //chat engine ran by chatengine.io- Called Shwetha's ReactChat App
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <Feed {...chatAppProps} /> }
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      );
    };
    
    
    export default App;