<template>
  <div>
    <div class="box">
      <h1>Login</h1>
      <input type="text" name="" placeholder="Email" />
      <input type="password" name="" placeholder="Password" />
      <button class="btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      token: null,
    };
  },
  mounted() {},
  methods: {
    login() {
      this.consoledd();
      this.$router.push("/admin");
    },
    consoledd() {
      console.log("login");
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
  width: 400px;
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
  width: 200px;
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
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.btn:hover {
  background: #2ecc71;
}
</style>
