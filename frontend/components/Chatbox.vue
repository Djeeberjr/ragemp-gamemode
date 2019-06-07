<template>
    <div class="container">
        <div class="output"  ref="output">
            <div v-for="(msg,index) in chatOutput" :key="index">
                {{msg}}
            </div>
        </div>
        <input type="text" class="input" :class="{hidden:inputHidden}" v-model="currentInput" @keyup.enter="submit" ref="input" @keydown.escape="toggleInput">

    </div>
</template>

<script>

import bus from "../modules/eventBus";
import keypress from "../modules/globalKeypress";

export default {
    data(){
        return {
            inputHidden: true,
            currentInput: "",
            chatOutput: []
        }
    },
    methods:{
        toggleInput(){
            if(this.inputHidden){
                this.inputHidden = false;
                keypress.focus(true);
                mp.invoke("focus", true);
                this.$nextTick(() => this.$refs.input.focus())
            }else{
                this.inputHidden = true;
                keypress.focus(false);
                mp.invoke("focus", false);
                this.clearInput();
            }  
        },
        scollToEnd(){
            this.$refs.output.scrollTop = this.$refs.output.scrollHeight; 
        },
        pushChat(text){
            this.chatOutput.push(text);
            this.$nextTick(()=>{
                this.scollToEnd();
            });
        },
        clearChat(){
            this.chatOutput = [];
        },
        submit(){
            mp.invoke("command", this.currentInput);
            this.toggleInput();
            // TODO: submit the input to the server
            this.clearInput();
        },
        clearInput(){
           this.currentInput = "";
        }
    },
    mounted() {
        // Register events

        bus.on("chat.push",(text)=>{
            this.pushChat(text);            
        });

        bus.on("chat.clear",()=>{
            this.clearChat();
        });

        bus.on("chat.activate",(toggle)=>{
            this.pushChat("activate:"+toggle);
        });

        bus.on("chat.show",(toggle)=>{
            this.pushChat("show:"+toggle);
        });
        
        // Register keypress to open chat
        keypress.keyPress(["t","T"],(e)=>{
            e.preventDefault();
            this.toggleInput();
        });
    }, 
}
</script>

<style scoped>

    .container{
        width: 30%;
        height: 25%;
    }

    /* For hiding the input */
    .hidden{
        display: none;
    }

    .output{
        overflow-y: scroll;
        overflow-x: visible;
        height: 100%;
        
        /*White text with black outline*/
        color: white;
        text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
        font-size: 120%;
        font-family: fantasy; /* TODO: pick a better font */
        font-weight: 20;
    }

    .output::-webkit-scrollbar{
        width: 0;
    }
    
    .input{
        width: 100%;
        background-color: rgba(146, 156, 170,0.4); /* TODO: pick a good bg color*/
        color: white;
        border: none;
        padding: 5px;
        outline-width: 0;
    }

</style>
