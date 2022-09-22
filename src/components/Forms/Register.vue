<template>
  <div>
    <div class="box">
      <h1>Register</h1>
      <div class="inner-box">
        <div class="box1">
          <input v-model="name" type="text" name="" placeholder="Name" />
          <input v-model="age" type="text" name="" placeholder="Age" />
          <input v-model="address" type="text" name="" placeholder="Address" />
          <input v-model="gender" type="text" name="" placeholder="Gender" />
        </div>
        <div class="box2">
          <input
            v-model="contactNo"
            type="text"
            name=""
            placeholder="Contact No"
          />
          <input v-model="email" type="text" name="" placeholder="Email" />
          <input
            v-model="password"
            type="password"
            name=""
            placeholder="Password"
          />
          <input
            v-model="confirmPassword"
            type="password"
            name=""
            placeholder="Password"
          />
        </div>
      </div>
      <div class="already-acc">
        <CCol class="text-left m-0 px-0 pt-3" @click="goToLogin">
          <CButton
            class="question-text"
            style="color: white"
            @click="goToLogin"
          >
            already have an account? Login
          </CButton>
        </CCol>
      </div>
      <div class="inner-box">
        <div class="btn-box1">
          <button class="btn" @click="Register">Register</button>
        </div>
        <div class="btn-box2">
          <button class="btn2" @click="goToHome">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      age: "",
      gender: "",
      address: "",
      contactNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  mounted() {},
  methods: {
    async Register() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          name: this.name,
          gender: this.gender,
          address: this.address,
          contactNo: this.contactNo,
          role: "user",
        }),
      };
      fetch(`${store.state.baseUrl}/register`, requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          this.token = await data.accessToken;
          this.role = await data.user.role;
          localStorage.setItem("token", this.token);
          localStorage.setItem("role", this.role);
          if (this.role === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert("cannot login\n email or password incorrect");
          console.error("There was an error!", error);
        });
    },
    consoledd() {
      console.log("Register");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};

// import { router } from "@router";

// const goToDashboard = () => {
//   console.log("Register");
//   $router.push("/admin");
//   console.log(router);
//   this.$router.push({ path: "/admin" });
// };

// const determineUserRole = () => {
//   goToDashboard();
// };

// const Register = () => {
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
  width: 800px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
}
.inner-box {
  display: flex;
  justify-content: center;
}

.question-text:hover {
  color: orange;
}
.box1,
.box2 {
  width: 300px;
}
.btn-box1,
.btn-box2 {
  width: 250px;
  position: relative;
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

.btn-container {
  display: flex;
  padding: 0px 15px 0px;
}

.btn {
  border: 0;
  background: none;
  display: block;
  margin: 20px 0px;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  width: 220px;
}
.btn:hover {
  background: #2ecc71;
}
.btn2 {
  border: 0;
  background: none;
  display: block;
  margin: 20px 0px 20px 30px;
  text-align: center;
  border: 2px solid #a72f2f;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  width: 220px;
  cursor: pointer;
  align-items: flex-end;
  position: relative;
  right: 0;
}
.btn2:hover {
  background: #fe4845;
}
</style>
