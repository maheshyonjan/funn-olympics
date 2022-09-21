<template>
  <div>
    <div class="box">
      <h1>Login</h1>
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <CButton style="color: white" @click="goToRegister">
        forgot password?
      </CButton>
      <button class="btn" @click="login">Login</button>
      <button class="btn2" @click="goToHome">Cancle</button>
      <div class="already-acc">
        <CCol class="text-left m-0 px-0 pt-3" @click="goToRegister">
          <CButton style="color: white" @click="goToRegister">
            Don't have an account? Register
          </CButton>
        </CCol>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "axios";
// import Vue from "vue";

// Vue.prototype.axios = axios;

export default {
  name: "login",
  data() {
    return {
      email: "ayush@mail.com",
      password: "bestPassw0rd",
      token: null,
    };
  },
  mounted() {},
  methods: {
    login() {
      if (this.email.length > 0 && this.password.length > 0) {
        console.log(this);
        console.log("test");
        console.log(this.email);
        console.log(this.password);
        this.$axios
          .post(`http://localhost:3000/login`, {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            console.log(response);
            //   data.accessToken = res.data.accessToken;
            //   data.loggedInUser = res.data.user;
            //   console.log(res.data.accessToken);
            //   console.log(res.data.user);
            //   localStorage.setItem("token", data.accessToken);
            //   localStorage.setItem("role", data.loggedInUser.role);
            this.goToDashboard();
          })
          .catch((err) => {
            alert(`could not login \n ${err}`);
            console.log(err);
          });
      } else {
        alert("password or email must not be empty!");
      }
    },
    goToDashboard() {
      this.consoledd();
      //   this.$router.push("/admin");
    },
    consoledd() {
      console.log("login");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};

// import { router } from "@router";

// const goToDashboard = () => {
//   console.log("login");
//   $router.push("/admin");
//   console.log(router);
//   this.$router.push({ path: "/admin" });
// };

// const determineUserRole = () => {
//   goToDashboard();
// };

// const login = () => {
//   determineUserRole();
// };
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}
.box {
  width: 450px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
}
.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 280px;
  border-color: #2ecc71;
}
.btn {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  width: 250px;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.btn:hover {
  background: #2ecc71;
}

.btn2 {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #a72f2f;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  width: 250px;
  cursor: pointer;
}
.btn2:hover {
  background: #fe4845;
}
</style>
