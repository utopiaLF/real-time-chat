<template>
    <div class="input-area">
        <input ref="input" :value="message" @input="$emit('update:message', $event.target.value), $emit('typing')" @keyup.enter="$emit('send')" type="text" placeholder="Type something...">
        <button :class="{ active: message.length > 0}" :disabled="message.length === 0" @click="$emit('send')">Send</button>
    </div>
</template>

<script>
export default {
    props: ['message'],
    emits: ['update:message', 'send', 'typing'],
    methods: {
        unfocus() {
            this.$refs.input?.blur()
        }
    }
}
</script>