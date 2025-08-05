<template>
    <div class="register">
        <input :value="myId" @input="$emit('update:myId', $event.target.value)" type="text" placeholder="Create Username">
        <button :class="{ active: myId.length > 0}" @click="$emit('setUsername')">Go</button>
    </div>
</template>

<script>
export default {
    props: ['myId'],
    emits: ['setUsername', 'update:myId']
}
</script>