<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-content">
            <div class="live d-flex">
              <div style="margin-left: 0px; margin-top: 0px">
                <iframe
                  v-if="liveStreamId === 1"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/4v5pXiWcuaU?start=500&autoplay=1&mute=1"
                  title="Nepal VS India 1-0 | SEMI FINAL | SAFF WOMEN CHAMPIONSHIP "
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="liveStreamId === 2"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/9v7t65AhP_8?start=100&autoplay=1&mute=1"
                  title="Swimming: Women's 4x100m Medley Relay Final r"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="liveStreamId === 3"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/l9uf7hpsdDc?start=1300&autoplay=1&mute=1"
                  title="Cross-Country Skiing - Men's 4x10km Relay Classic/Free"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="liveStreamId === 4"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/HUFj2r755NE?start=1500&autoplay=1&mute=1"
                  title="Volleyball - Russia vs Brazil - Men's Gold Final | London 2012 Olympic Games"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="liveStreamId === 5"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/0Z3qL5dftX0?start=6500&autoplay=1&mute=1"
                  title="Marathon"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="liveStreamId === 6"
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/rQRiS8l30xE?start=5472&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div><h3 class="mt-2">Nepal VS India 1-0 | SEMI FINAL</h3></div>
              </div>
              <LiveComments style="margin-left: 30px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p>
              Copyright © 2036 <a href="#">FunOlympics</a> All rights reserved.

              <br />Design:
              <a
                href="https://templatemo.com"
                target="_blank"
                title="free CSS templates"
                >Mahesh Tamang</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../Navbar.vue";
import LiveComments from "./LiveComments.vue";
</script>

<script>
import store from "@/store/store";
export default {
  name: "livebroadcast",
  data() {
    return {
      liveStreamId,
    };
  },
  beforeMount() {
    if (localStorage.role === "user" || localStorage.role === "admin") {
      this.liveStreamId = store.state.liveStreamId;
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped></style>
