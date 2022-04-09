<template>
    <div class="row">
  <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top">
    <div class="col-sm">
    <b-navbar-brand href="#"><img class="logo" src="/mainLogo.png"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle></div>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Center Search Bar -->
        <div class="col-sm">
        <b-nav-form id="searchBar">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        </div>

        <div class="col-sm">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em class="user">User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </div>
      <!-- </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    
}
</script>
<style>
li#__BVID__125 {
    list-style: none;
}
.logo {
  width: 85px;
}
a.navbar-brand {
    margin: 0px;
    padding: 0px;
}
.col-sm {
    list-style: none;
}
</style>