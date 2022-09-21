<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <h1>FunOlympics</h1>
              <!-- <img src="assets/images/logo.png" alt=""> -->
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search End ***** -->
            <!-- <div class="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i class="fa fa-search"></i>
                      </form>
                    </div> -->
            <!-- ***** Search End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/sports">Sports</router-link></li>
              <li><router-link to="/news">News</router-link></li>
              <li>
                <router-link to="/livebroadcast">Live Broadcast</router-link>
              </li>
              <li><router-link to="aboutus">About Us</router-link></li>
              <li>
                <a href="profile.html"
                  >Profile <img src="@/assets/images/profile-header.jpg" alt=""
                /></a>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script setup></script>

<style scoped></style>
