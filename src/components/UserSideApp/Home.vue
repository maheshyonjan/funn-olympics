<template>
  <div>
    <!-- ***** Preloader Start ***** -->
    <!-- <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div> -->
    <!-- ***** Preloader End ***** -->

    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-content">
            <!-- ***** Banner Start ***** -->
            <div v-if="loginStatus" class="live-video">
              <iframe
                width="990"
                height="557"
                src="https://www.youtube.com/embed/O4pSYZNFej0?start=574&autoplay=1&mute=1"
                title="Beam Final - Women's Artistic Gymnastics | London 2012 Replays"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div>
                <h3>Artistic Gymnastics - Men's VT, PB and HB Finals</h3>
              </div>
            </div>
            <div v-if="!loginStatus" class="main-banner">
              <div class="row">
                <div class="col-lg-7">
                  <div class="header-text">
                    <h6>Browse Your Favorite Games On</h6>
                    <h4><em>Fun</em>Olympics</h4>
                    <div v-if="!loginStatus" class="btn-container d-flex">
                      <div class="main-button">
                        <router-link
                          to="/login"
                          style="width: 110px; text-align: center"
                          >Login</router-link
                        >
                      </div>
                      <div class="register-button ml-3">
                        <router-link to="/register">Register</router-link>
                      </div>
                    </div>
                    <div v-if="loginStatus" class="header-text">
                      <h6>welcome!</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Banner End ***** -->

            <!-- ***** Most Popular Start ***** -->
            <div class="most-popular">
              <div class="row">
                <div class="col-lg-12">
                  <!-- <div class="heading-section">
                    <h4><em>Recommended</em> Sports</h4>
                  </div> -->
                  <div class="row">
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-01.jpg" alt=""> -->
                        <h4>Football<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            20.3k
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-02.jpg" alt=""> -->
                        <h4>Basketball<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            100.4k
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-03.jpg" alt=""> -->
                        <h4>Baseball<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            5.3k
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-04.jpg" alt=""> -->
                        <h4>Snooker<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            7.9k
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-07.jpg" alt=""> -->
                        <h4>Rugby<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            8.8k
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-08.jpg" alt=""> -->
                        <h4>Tennis<br /><span>Live Games</span></h4>
                        <ul>
                          <li>
                            <i class="fa fa-eye" style="margin-top: 42px"></i>
                            50.k
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="main-button">
                        <a @click="goToLivebroadcast">Live Broadcast</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Most Popular End ***** -->

            <!-- ***** Gaming Library Start ***** -->
            <div class="gaming-library">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Latest</em> News</h4>
                </div>
                <div class="item"></div>
              </div>
              <div class="col-lg-12">
                <div class="main-button">
                  <a href="profile.html">See More</a>
                </div>
              </div>
            </div>
            <!-- ***** Gaming Library End ***** -->
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

<!-- <script setup>

</script> -->

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "navbar",
  components: {
    Navbar,
  },
  data() {
    return {
      loginStatus: false,
    };
  },

  mounted() {
    this.toggleLoginStatus();
  },
  methods: {
    toggleLoginStatus() {
      if (localStorage.role === "user" || localStorage.role === "admin") {
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
      }
    },
    goToLivebroadcast() {
      this.$router.push("/livebroadcast");
    },
  },
};
</script>

<style scoped></style>
