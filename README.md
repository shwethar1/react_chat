# React_Chat

Hi My name is Shwetha Radhakrishnan. This fictitious Chat Engine App is developed for the residents and interns of Seattle Grace Hospital from the popular Netflix show "Grey's Anatomy". The Grey's anatomy cast finds their way through their tough residency program by forming relationships, friendships, and scrubbing in on surgeries together. This app models potential conversations the interns and residents could be chatting about. This app features online status updates, real time response, read reciept functionality, ability to create new chat groups, text/attatchment/image support, and the ability to add new users through chatengine.io

built using React JS Sockets, Rest APIs, React Hooks, Props, HTML, and CSS

Backend was hosted by chatengine.io

npm install's included: @ant-design/icons, axios, react-chat-engine


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# App Walk-through

after loading the app you will see this screen
![image](https://user-images.githubusercontent.com/64232154/123532553-0fbb1480-d6dc-11eb-84ba-99ee2d372746.png)

you are currently logged in as globaluser1, Christina Yang.
I have created five different users in chatengine.io for you all to login as and play around the engine with.
The credentials are below
1) Christina Yang, username: globaluser1, password:1234
2) Derek Shepherd, username: globaluser2, password: 1234
3) Meredith Grey, username: globaluser3, password: 1234
4) Miranda Bailey, username: globaluser4, password: 1234
5) Alex Karev, username: globaluser5, password: 1234

you can send messages , images, and attatchments as Christina, if you click under people you can see that you have the green light next to you indicating that you are active.
After you send a message, since read-reciepts are on, all users that are active can read your message.

To have multiple users active at the same time you can simply open localhost:3000 in a different browser and do the following:
right click on app, and click 'inspect'->'Application'->Local Storage-> and hit 'clear' to clear the credentials
![image](https://user-images.githubusercontent.com/64232154/123533366-f073b580-d6e2-11eb-91fb-59cd6ddb81b3.png)
![image](https://user-images.githubusercontent.com/64232154/123533382-0aad9380-d6e3-11eb-9ef0-a4a470dbcf67.png)


clearing, will take you back to log in page, I can log in as Derek Shephard now, in Microsoft edge as opposed to Google Chrome. Now this is Derek's view of the screen and both Christina and Derek are active.

![image](https://user-images.githubusercontent.com/64232154/123533410-4d6f6b80-d6e3-11eb-8eb1-607fa3171a7b.png)

![image](https://user-images.githubusercontent.com/64232154/123533225-932b3480-d6e1-11eb-954a-45a693bbaf3a.png)

The following is back to Christina's view on google Chrome:
![image](https://user-images.githubusercontent.com/64232154/123533249-c077e280-d6e1-11eb-9655-c3ac4c456ada.png)

Inputting the wrong credentials will give you this error:
![image](https://user-images.githubusercontent.com/64232154/123533285-003eca00-d6e2-11eb-827a-5202a9468715.png)


Happy Chatting!







