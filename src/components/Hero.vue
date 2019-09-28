<template>
  <div class="flex flex-row justify-start w-12/12 py-10">
    <div class="w-3/6 text-left pt-6 pb-8 px-20">
      <h1 class="font-display text-5xl">Edgeryders Festival</h1>
      <h2 class="font-body text-2xl">
        An Edgeryders global event <br /><b>19-29 November 2019</b>
      </h2>
      <p class="font-body text-2xl mt-3 mb-5">Discover, learn and build strategic partnerships with others in <span class="city_tag" :class='city'>{{city}}</span></p>

              <button class="text-white bg-primary border border-primary text-xm font-semibold rounded-full px-4 py-3 mr-4 leading-normal" @click="changeMsg">Get your ticket</button>
              
              <a href='https://edgeryders.eu/t/lets-talk-regularly-our-community-call-schedule/10267' target='blank'><button class="text-primary hover:text-white hover:bg-primary border border-primary text-xm font-semibold rounded-full px-4 py-3 leading-normal">Join our next co-creation call</button></a>


    </div>

    <div class="map-container">
      
    <img src="http://res.cloudinary.com/slzr/image/upload/v1500321012/world-map-1500_vvekl5.png">
    <div class="point venezuela tippy" title="Venezuela"></div>
    <div class="point brasil tippy" title="Brasil"></div>
    <div class="point argentina tippy" title="Argentina"></div>
    <div class="point colombia tippy" title="Colombia"></div>
    <div class="point panama tippy" title="Panamá"></div>
    <div class="point mexico tippy" title="Mexico"></div>
    <div class="point usa tippy" title="Estados Unidos"></div>
    <div class="point arabia tippy" title="Arabia Saudi"></div>
    <div class="point turquia tippy" title="Turquía"></div>     
    <div class="point rusia tippy" title="Rusia"></div>
    <div class="point china tippy" title="China"></div>
    <div class="point japon tippy" title="Japon"></div>
    <div class="point australia tippy" title="Australia"></div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: ['Paris', 'London', 'Brussels', 'Berlin'],
      city: null,
      counter: 0
    };
  },
  methods: {
      changeMsg() {
          this.$emit("changeMsg", 'ticket');
        }
  },
  mounted: function() {
    var counter = 0;
    setInterval(function () {
     
      if (counter==this.cities.length-1) {counter=0} else {  counter = counter + 1; };
            this.city = this.cities[counter];
        }.bind(this), 2000);  
  },
  components: {}
};
</script>
<style type="text/css" lang="scss">
  $primary: #00acc1;

.city_tag {
  display: inline-block;
  font-weight: bold;
  color: $primary;
  border-bottom: 1px dashed $primary;
}
.london {
  color: red
}

.map-container {
  position: absolute;
  width: 65%;
  top: 40px;
  overflow: hidden;
  right: -170px;
  display: inline-block;
  img {
    width: 100%;
  }
  .point {
    cursor: pointer;
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    background-color:  $primary;
    border-radius: 50%;
    transition: all .3s ease;
    will-change: transform, box-shadow;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 rgba($primary, 0.4);
    animation: pulse 3s infinite;
    &:hover {
      animation: none;
      transform:  translate(-50%, -50%) scale3D(1.35, 1.35 ,1);
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
  .venezuela { top: 54%; left: 24%; }
  .brasil { top: 64%; left: 28%; }
  .argentina { top: 77%; left: 27%; }
  .colombia { top: 55%; left: 21%; }
  .panama { top: 51%; left: 18%; }
  .mexico { top: 38%; left: 12%; }
  .usa { top: 26%; left: 17%; }
  .arabia { top: 40%; left: 53%; }
  .turquia { top: 31%; left: 57%; }
  .rusia { top: 16%; left: 67%; }
  .china { top: 40%; left: 72%; }
  .japon { top: 34%; left: 86%; }
  .australia { top: 72%; left: 86%; }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba($primary, 0.5); }
  70% { box-shadow: 0 0 0 25px rgba($primary, 0); }
  100% { box-shadow: 0 0 0 0 rgba($primary, 0); }
}



</style>
