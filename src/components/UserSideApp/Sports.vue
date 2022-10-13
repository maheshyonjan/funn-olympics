<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-content">
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

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "navbar",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    goToLivebroadcast() {
      this.$router.push("/livebroadcast");
    },
  },
};
</script>

<style scoped></style>
