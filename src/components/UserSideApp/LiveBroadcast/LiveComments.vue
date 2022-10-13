<template>
  <div class="live-chat">
    <div class="chat-header">
      <h5>Live Chat</h5>
    </div>
    <div class="chat-comment d-flex">
      <p style="color: orange">jack</p>
      <p class="ml-2" style="color: rgb(225, 225, 225)">
        Lorem ipsum dolor sit, amet consectetur adipisicing
      </p>
    </div>
    <div class="chat-footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.live-chat {
  height: 405px;
  width: 400px;
  background-color: #212529;
  position: relative;
}

.chat-header {
  height: 50px;
  background-color: #343a40;
  /* position: absolute; */
}
.chat-header h5 {
  padding: 10px;
  padding-top: 15px;
}

.chat-comment {
  padding: 10px;
  color: rgb(195, 195, 195);
}

.chat-comment h5 {
  color: orange;
}

.chat-footer {
  height: 60px;
  width: 100%;
  /* width: 240px; */
  background-color: #343a40;
  position: absolute;
  bottom: 0;
}
</style>
