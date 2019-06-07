<template>
    <div>
        <chatbox/>
        <debug-mode/>

    </div>
</template>

<script>
import Chatbox from "./components/Chatbox.vue";
import DebugMode from "./components/DebugMode.vue";

export default {
    components:{
        Chatbox,
        DebugMode
    }
}
</script>

<style>
    *{
        user-select: none; 
    }
</style>

<style scoped>
</style>


