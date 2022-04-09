<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./pic1.jpg" alt="First slide" style="max-height:50vh;">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./pic2.jpg" alt="Second slide" style="max-height:50vh;">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./pic3.jpg" alt="Third slide" style="max-height:50vh;">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

<div class="col" id="startAd">

    <div class="col align-self-center" id="firstAd">
      <div>Free Delivery</div>
      <div>To Your Door</div>
    </div>
  <div class="col" id="firstAd">
      <div>Free Delivery</div>
      <div>To Your Door</div>
  </div>
  <div class="col" id="firstAd">
      <div>Free Delivery</div>
      <div>To Your Door</div>
  </div>
  <div class="col" id="secAd">
      <div>Free Delivery</div>
      <div>To Your Door</div>
  </div>
      

    
  </div>
</div>



</template>

<script>
  export default {
    name: "CarouselSlide",
    data() {
      return {
      }
    }
  }
</script>

<style>
/* .carousel {
  width:640px;
  height:360px;
} */
#startAd {
    margin-top: 50px;
    /* margin-left: 200px; */
    display: block;
    margin-left: 300px;
  margin-right: auto;
  
}
#secAd {
  width: 300px;
}
#firstAd {
  border-right: 6px solid rgb(0, 0, 0);
  height: 10px;
  width: 300px;
  justify-content: center;
}
.col {
  display: table-cell;
}
</style>
