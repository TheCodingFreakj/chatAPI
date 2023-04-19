

<template>
    <div class="hello">
      <h1>Ask to chatGpt</h1>
      <input v-model="currentMessage" type="text"> <span><button @click="sendMessage(currentMessage)">Ask</button></span>
      <div class="messageBox">
        <template v-for="message in messages">
  
          <div v-if="message.from == 'user' ? 'messageFromUser' : 'messageFromChatGpt'" :key="message"
            v-html="message.data">
          </div>
        </template>
      </div>
    </div>
  </template>
    
  <script>
  import axios from "axios"
  export default {
    name: 'ChatBox',
    components: {
  
    },
    data() {
      return {
        messages: [],
  
      }
    },
    methods: {
      async sendMessage(message) {
  
        this.messages.push({
          from: "user",
          data: message
        })
        await axios.post("http://16.16.27.206:5000/", {
          messages: this.messages
        }).then((response) => {
          console.log(response.data.data)
          this.messages.push({
            from: "chatGpt",
            data: response.data.data
          })
  
        })
      }
    }
  }
  </script>
    
  <style>
  input {
    width: 300px;
    padding: 10px;
  }
  
  
  button {
    height: 40px;
    background-color: powderblue;
    padding: 10px;
  }
  
  .messageBox {
    height: 500px;
    background-color: gainsboro;
    /* margin-left: 10%;
    margin-right: 10%; */
    margin: 0 20% 0 20%;
    margin-top: 20px;
    padding: 5%;
  }
  
  
  .messageFromUser {
    text-align: right;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 30%;
    margin-left: 70%;
  }
  
  
  .messageFromChatGpt {
    text-align: left;
    background-color: antiquewhite;
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 30%;
    margin-right: 70%;
  }
  </style>
    