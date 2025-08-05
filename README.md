# Real-Time Group Chat App

A simple yet powerful real-time group chat app built with Vue.js and Socket.IO.  
Focused on clean user interface, responsive design, and a smooth real-time experience.

> Each user can set a username and instantly start chatting in a shared group room.

## Tech
 - Vuejs + socket.io-client
 - Nodejs (Express)
 - Socket.IO

## Features
 - **Username-based login** – choose a name and enter the chat
 - **Group chat** – send and receive messages in real time
 - **"User is typing..."** indicator – shows who's currently typing
 - **Dark theme UI** – clean dark mode for comfortable chatting at night
 - **Clear chat** – instantly clear the chat for all users
 - **Auto-scroll** – always scrolls to the latest message
 - **Responsive design** – fully usable on mobile devices
 - **Smart UI:**
  - Your messages are shown on the **right**, with white background
  - Others' messages appear on the **left**, gray background with usernames on top

## About the Theme
> This app currently uses a **static dark theme** with clean contrast and readability.

<br><hr>

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```
Install dependencies
```
# backend
cd server
npm install

# frontend
cd ../client
npm install
```
Run the app locally
```bash
# backend
cd server
node index.js

# frontend
cd ../client
npm run dev
```
Open http://localhost:5173 to use the chat.

<br>

Made with ❤️ by @utopiaLF
