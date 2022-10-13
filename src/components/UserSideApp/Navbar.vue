<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <h1>FunOlympics</h1>
              <!-- <img src="assets/images/logo.png" alt=""> -->
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search End ***** -->
            <!-- <div class="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i class="fa fa-search"></i>
                      </form>
                    </div> -->
            <!-- ***** Search End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link to="/livebroadcast">Live Broadcast</router-link>
              </li>
              <li><router-link to="/sports">Sports</router-link></li>
              <li><router-link to="/news">News</router-link></li>

              <!-- <li v-if="loginStatus">
                <router-link to="/aboutus">About Us</router-link>
              </li> -->
              <li v-if="!loginStatus">
                <a @click="logout">Logout</a>
              </li>
              <li>
                <a
                  v-if="loginStatus"
                  @click="goToLogin"
                  class="pr-3"
                  style="background-color: rgb(82, 82, 82); color: #fff"
                  >Login
                </a>
                <a @click="goToUserProfile" v-if="!loginStatus"
                  >Profile <img src="@/assets/images/profile-header.jpg" alt=""
                /></a>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
import store from "../../store/store";
export default {
  name: "navbar",
  data() {
    return {
      loginStatus: false,
    };
  },
  mounted() {
    this.toggleLoginStatus();
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes("?")) {
        this.getAnswer();
      }
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    toggleLoginStatus() {
      if (localStorage.role === "user" || localStorage.role === "admin") {
        this.loginStatus = false;
      } else {
        this.loginStatus = true;
      }
    },
    logout() {
      console.log("logout");
      if (confirm("are you sure to logout?")) {
        localStorage.clear();
        this.$router.push("/");
        this.loginStatus = true;
      }
    },
    goToLiveBroadcast() {},
    goToUserProfile() {
      if (!this.loginStatus) {
        this.$router.push("/userprofile");
      } else {
        this.goToLogin();
      }
    },
  },
};
</script>

<style scoped></style>
