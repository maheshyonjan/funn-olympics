<template>
  <div class="content">
    <div class="user-profile">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h5>{{ user.name }}</h5>
                  <p class="text-secondary mb-1">{{ user.role }}</p>
                  <p class="text-muted font-size-sm">
                    {{ user.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="view-edit">
          <div v-if="!edit" class="col-lg-8">
            <div class="card" style="width: 630px">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Full Name</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="name" type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Email</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="email" type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Password</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="password"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Role</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="role" type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Phone</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="contactNo"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Age</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="age" type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Address</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="address" type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Gender</h5>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input v-model="gender" type="text" class="form-control" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-3">
                    <div class="col-sm-12">
                      <a
                        class="btn btn-info"
                        target="__blank"
                        @click="edit = !edit"
                        >Back</a
                      >
                    </div>
                  </div>
                  <div class="col-sm-9 text-secondary" @click="UpdateProfile">
                    <input
                      type="button"
                      class="btn btn-primary px-4"
                      value="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="edit" class="col-md-8" style="width: 650px">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.name }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.email }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Role</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.role }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Conct No</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.contactNo }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.address }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Gender</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.gender }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Age</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.age }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <a class="btn btn-info" target="__blank" @click="edit = !edit"
                    >Edit</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/store";
export default {
  components: {},
  data() {
    return {
      user: null,
      edit: true,
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
  beforeMount() {
    this.user = JSON.parse(localStorage.user);
  },
  mounted() {
    // this.user = null;
    console.log(localStorage.loggedInUserId);
    this.fetchLoggedInUser();
  },
  methods: {
    async fetchLoggedInUser() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(
        `${store.state.baseUrl}/users/${localStorage.loggedInUserId}`,
        requestOptions
      ).then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = data;
          return Promise.reject(error);
        }
        this.users = await data;
        localStorage.setItem("user", JSON.stringify(this.users));
        this.setValue();
      });
    },
    setValue() {
      this.name = this.user.name;
      this.age = this.user.age;
      this.gender = this.user.gender;
      this.address = this.user.address;
      this.contactNo = this.user.contactNo;
      this.email = this.user.email;
      this.role = this.user.role;
      this.userId = this.user.id;
    },
    UpdateProfile() {
      if (confirm("are you sure to")) {
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
            this.fetchLoggedInUser();
            this.edit = !this.edit;
          })
          .catch((error) => {
            alert(`cannot Update\n ${error}`);
            console.error("There was an error!", error);
          });
      }
    },
  },
};
</script>
<style>
.user-profile {
  width: 1000px;
  margin: 100px;
}
</style>
