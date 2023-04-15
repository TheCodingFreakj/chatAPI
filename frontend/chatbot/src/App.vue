<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Chat Bot</h2>
    <ChatBox/>
   
  </div>
</template>

<script>

import ChatBox from './components/ChatBox.vue';
export default {
  name: 'app',
  components:{
    ChatBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
