<template>
  <div>
    <div class="box">
      <h1>Register</h1>
      <div class="inner-box">
        <div class="box1">
          <input
            :class="{ 'is-invalid': validationStatus($v.name) }"
            class="form"
            v-model="name"
            type="text"
            name=""
            placeholder="Name"
          />
          <div v-if="!$v.name.required" class="invalid-feedback">
            Full Name is required
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.age) }"
            class="form"
            v-model="age"
            type="text"
            name=""
            placeholder="Age"
          />
          <div v-if="!$v.age.required" class="invalid-feedback">
            Age is required
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.address) }"
            class="form"
            v-model="address"
            type="text"
            name=""
            placeholder="Address"
          />
          <div v-if="!$v.address.required" class="invalid-feedback">
            Address is required
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.gender) }"
            class="form"
            v-model="gender"
            type="text"
            name=""
            placeholder="Gender"
          />
          <div v-if="!$v.gender.required" class="invalid-feedback">
            Gender is required
          </div>
        </div>
        <div class="box2">
          <input
            :class="{ 'is-invalid': validationStatus($v.contactNo) }"
            class="form"
            v-model="contactNo"
            type="text"
            name=""
            placeholder="Contact No"
          />
          <div v-if="!$v.contactNo.required" class="invalid-feedback">
            Contact No is required
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.email) }"
            class="form"
            v-model="email"
            type="text"
            name=""
            placeholder="Email"
          />
          <div v-if="!$v.email.required" class="invalid-feedback">
            email is required
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            please enter valid email
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.password) }"
            class="form"
            v-model="$v.password.$model"
            type="password"
            name=""
            placeholder="Password"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            password is required
          </div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">
            password must be at least 6 caracter long
          </div>
          <input
            :class="{ 'is-invalid': validationStatus($v.confirmPassword) }"
            class="form"
            v-model="confirmPassword"
            type="password"
            name=""
            placeholder="Password"
          />
          <div v-if="!$v.confirmPassword.required" class="invalid-feedback">
            Retype password
          </div>
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
          <button class="btn" @click="submitForm">Register</button>
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
import { required, email, minLength } from "vuelidate/lib/validators";

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
    submitForm() {
      console.log("what");
      console.log(this.$v);
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) {
        alert("failed to submit form");
      } else {
        this.Register();
      }
    },
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
          age: this.age,
          role: "user",
        }),
      };
      fetch(`${store.state.baseUrl}/register`, requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
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
          if (this.role === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert(`cannot register\n ${error}`);
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
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required },
    name: { required },
    age: { required },
    gender: { required },
    address: { required },
    contactNo: { required },
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
