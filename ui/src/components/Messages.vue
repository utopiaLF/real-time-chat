<template>
    <ul>
        <li v-for="(message, index) in allMessages" :key="index" :class="{ 'own': message.isMine, 'other': !message.isMine}"><div><p v-if="!message.isMine">{{ message.from }}</p><span>{{ message.text }}</span></div></li>
        <div ref="last"></div>
    </ul>
</template>

<script>
export default {
    props: ['allMessages'],
    watch: {
        allMessages: {
            handler() {
                this.scrollToBottom()
            }, deep: true
        }
    },
    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                const lastMessage = this.$refs.last
                if(lastMessage) lastMessage.scrollIntoView({ behavior: 'smooth'})
            })
        }
    }
}
</script>