<template>
    <div class="navBarWhite">
  <!-- <b-navbar toggleable="lg" type="light" variant="info" style="background-color: #FFFFFF;" class="navbar navbar-expand-sm bg-white sticky-top">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
  <ul class="nav justify-content-center sticky-top" >
  <li class="nav-item">
    <a class="nav-link" href="" style="color:black">Deals</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/fruits" style="color:black">Food</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:black">Beverages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:black">Household</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:black">Personal Care</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:black">Most Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color:black">My Orders</a>
  </li>
</ul>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.navBarWhite {
  margin-top: 10px;
  margin-bottom: 10px;
}
ul.nav.justify-content-center {
    font-size: 18px;
}

</style>