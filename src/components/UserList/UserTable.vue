<template>
  <div>
    <div id="table-container">
      <div id="user-table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th style="color: black">Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>role</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.contactNo }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button
                  @click="selectUserToUpdate(user)"
                  type="button"
                  class="btn btn-info m-2"
                  style="color: green"
                >
                  <i class="fas fa-pencil"></i>
                </button>
                <button
                  @click="deleteUser(user.id)"
                  type="button"
                  class="btn btn-info m-2"
                  style="color: red"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <h3 style="margin-left: 100px">Add/Update</h3>
    </div>
    <div class="edit-user">
      <div class="right-side">
        <input
          v-model="name"
          class="form-control mt-2"
          type="text"
          placeholder="Name"
        />
        <input
          v-model="email"
          class="form-control mt-2"
          type="text"
          placeholder="Email"
        />
        <input
          v-model="password"
          class="form-control mt-2"
          type="text"
          placeholder="Password"
        />
        <input
          v-model="role"
          class="form-control mt-2"
          type="text"
          placeholder="Role"
        />
        <input
          v-model="gender"
          class="form-control mt-2"
          type="text"
          placeholder="Gender"
        />
      </div>
      <div class="left-side">
        <input
          v-model="age"
          class="form-control mt-2"
          type="text"
          placeholder="Age"
        />
        <input
          v-model="address"
          class="form-control mt-2"
          type="text"
          placeholder="Address"
        />
        <input
          v-model="contactNo"
          class="form-control mt-2"
          type="text"
          placeholder="Contact Number"
        />
      </div>
      <div class="text-center d-flex mt-3 justify-content-between">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click="AddUser"
        >
          Add User
        </button>
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click="updateUser"
        >
          Update User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";

export default {
  name: "usertable",
  data() {
    return {
      users: [],
      name: "",
      age: "",
      gender: "",
      address: "",
      contactNo: "",
      email: "",
      password: "",
      role: "",
      userId: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(`${store.state.baseUrl}/users`, requestOptions).then(
        async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = data;
            return Promise.reject(error);
          }
          this.users = await data;
        }
      );
    },
    selectUserToUpdate(user) {
      console.log(user);
      this.name = user.name;
      this.email = user.email;
      this.contactNo = user.contactNo;
      this.address = user.address;
      this.age = user.age;
      this.gender = user.gender;
      this.role = user.role;
      this.userId = user.id;
    },
    updateUser() {
      if (confirm("are you sure to update user")) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            name: this.name,
            gender: this.gender,
            address: this.address,
            age: this.age,
            contactNo: this.contactNo,
            role: this.role,
          }),
        };
        fetch(`${store.state.baseUrl}/users/${this.userId}`, requestOptions)
          .then(async (response) => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = data;
              return Promise.reject(error);
            }
            alert("update sucessfull");
            this.clearllData();
            this.fetchUsers();
          })
          .catch((error) => {
            alert(`cannot Update\n ${error}`);
            console.error("There was an error!", error);
          });
      }
    },
    async AddUser() {
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
          role: this.role,
          age: this.age,
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
          alert("New User Added");
          this.clearllData();
          this.fetchUsers();
        })
        .catch((error) => {
          alert(`cannot register\n ${error}`);
          console.error("There was an error!", error);
        });
    },
    deleteUser(userId) {
      if (confirm("are you sure to delete?")) {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        };
        fetch(`${store.state.baseUrl}/users/${userId}`, requestOptions)
          .then(async (response) => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = data;
              return Promise.reject(error);
            }
            alert("Deleted sucessfully");
            this.clearllData();
            this.fetchUsers();
          })
          .catch((error) => {
            alert(`cannot Update\n ${error}`);
            console.error("There was an error!", error);
          });
      }
    },
    clearllData() {
      this.name = "";
      this.age = "";
      this.gender = "";
      this.address = "";
      this.contactNo = "";
      this.email = "";
      this.password = "";
      this.role = "";
      this.userId = null;
    },
  },
};
</script>

<style scoped>
#table-container {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 1200px;
}

#user-table {
  margin-left: 100px;
  background-color: #fff;
}

.edit-user {
  width: 1000px;
  margin-left: 100px;
  margin-bottom: 100px;
}
</style>
