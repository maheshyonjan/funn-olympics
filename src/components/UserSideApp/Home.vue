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
            <div class="main-banner">
              <div class="row">
                <div class="col-lg-7">
                  <div class="header-text">
                    <h6>Browse Your Favorite Games On</h6>
                    <h4><em>Fun</em>Olympics</h4>
                    <div class="main-button">
                      <router-link to="/login">Login</router-link>
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
                  <div class="heading-section">
                    <h4><em>Recommended</em> Sports</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-01.jpg" alt=""> -->
                        <h4>Football<br /><span>Latest Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-02.jpg" alt=""> -->
                        <h4>Basketball<br /><span>Latest Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-03.jpg" alt=""> -->
                        <h4>Baseball<br /><span>Latest Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-04.jpg" alt=""> -->
                        <h4>Snooker<br /><span>Latest Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-07.jpg" alt=""> -->
                        <h4>Rugby<br /><span>Live Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="item">
                        <!-- <img src="assets/images/popular-08.jpg" alt=""> -->
                        <h4>Tennis<br /><span>Live Games</span></h4>
                        <ul>
                          <li><i class="fa fa-star"></i> 4.8</li>
                          <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="main-button">
                        <a href="browse.html">Live Broadcast</a>
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
                >Ayush Pokharel</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped></style>
