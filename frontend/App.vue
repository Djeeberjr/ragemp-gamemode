<template>
    <div>
        <chatbox/>
        <debug-mode/>

    </div>
</template>

<script>
import Chatbox from "./chat/Chatbox.vue";
import DebugMode from "./debug/Component.vue";

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

    body{
        background: transparent !important;
        margin: 20px !important;
    }
</style>

<style scoped>
</style>


