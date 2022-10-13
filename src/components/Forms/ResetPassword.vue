<template>
  <div>
    <div class="box">
      <h1>password reset</h1>
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
import store from "../../store/store";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      token: null,
      count: null,
      role: "",
    };
  },
  mounted() {
    this.count = store.state.count;
    console.log(this.count);
  },
  methods: {
    login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      fetch(`${store.state.baseUrl}/login`, requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            const error = data;
            return Promise.reject(error);
          }
          this.token = await data.accessToken;
          this.role = await data.user.role;
          let userObj = JSON.stringify(data.user);
          localStorage.setItem("token", this.token);
          localStorage.setItem("role", this.role);
          localStorage.setItem("loggedInUserId", data.user.id);
          localStorage.setItem("user", userObj);
          store.dispatch("storeUser", data.user);
          if (this.role === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert(`cannot login\n ${error}`);
          console.error("There was an error!", error);
        });
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
