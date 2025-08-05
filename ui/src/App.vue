<template>
    <div class="top">Real-Time Group Chat | {{ isTyping }} <button @click="clearChat">Clear History</button></div>
    <Messages :all-messages="allMessages"/>
    <InputBox v-model:message.trim="message" @send="send" @typing="typing" ref="chatInput"/>
    <Register v-if="!isRegistered" v-model:my-id.trim="myId" @set-username="setUsername"/>
</template>

<script>
import InputBox from './components/InputBox.vue';
import Messages from './components/Messages.vue';
import { io } from "socket.io-client";
import Register from './components/Register.vue';

export default {
    components: {
        Messages,
        InputBox,
        Register
    },
    data() {
        return {
            socket: null,
            message: '',
            allMessages: [],
            myId: '',
            isTyping: null,
            typingTimeOut: null,
            isRegistered: false
        }
    },
    methods: {
        setUsername() {
            this.socket.emit('setUsername', this.myId)
        },
        send() {
            this.socket.emit('new-message', this.message)
            this.message = ''
        },
        typing() {
            this.socket.emit('typing', this.myId)

            if(this.typingTimeOut) {
                clearInterval(this.typingTimeOut)
            }

            this.typingTimeOut = setTimeout(() => {
                this.socket.emit('stopTyping', this.myId)
            }, 1000)
        },
        clearChat() {
            this.socket.emit('clearChat')
        }
    },
    mounted() {
        this.socket = io('http://localhost:3000')
        this.socket.on('setUsername', (socketId) => {
            this.myId = socketId
            this.isRegistered = true
        })

        this.socket.on('chat-message', ({ from, text}) => {
            const isMine = from === this.myId
            this.allMessages.push({ from, text, isMine})
        })

        this.socket.on('typing', (user) => {
            this.isTyping = `${user} is typing...`
        })

        this.socket.on('stopTyping', () =>{
            this.isTyping = ''
        })

        this.socket.on('clearChat', () => {
            this.allMessages = []

            this.$refs.chatInput?.unfocus()

            this.message = ''
        })
    }
}
</script>