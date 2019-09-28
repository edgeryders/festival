<template>
  <div class="mt-0">
    <h1 class="font-display text-5xl mt-0 pt-0">Join the conversation</h1>
    <h3 class="font-display text-2xl">The Edgeryders Festival is a #nospectators event</h3>

<div class="w-full flex justify-between">
    <div class="w-1/2 p-12 text-left leading-normal">
    <p class=" text-xl">
      The process of co-creating the festival is designed to ensure each
      participant is connected with the relevant people ahead of the event. That
      each point on the program is optimised to support the personal and
      professional development of the individuals who participate. And that
      outputs from the activities feed forward into generating tangible
      opportunities for mutual support and collaboration.
    </p>
       <a href='#events' v-smooth-scroll="{ duration: 1000, offset: -100 }"><button class="text-white bg-primary border border-primary text-xm font-semibold rounded-lg px-4 py-3 mt-4 leading-normal">Experience it now</button></a>

  </div>
    <div class="w-1/2 px-8 mt-8 pt-4 text-left text-xl border-l border-gray leading-normal">
    <div class="w-full" v-if='activeDiscussion != null'>
        <div class="w-full flex items-center content-center" v-if="activeDiscussion.author">

          <div class="p-2 w-20 h-20 flex-none mr-8 ml-0 mb-5 bg-white rounded-full shadow-lg border-4 border-white overflow-hidden object-cover bg-cover" :style="{ backgroundImage: 'url(' + activeDiscussion.author.avatar + ')' }">
          </div>
            
  
          <div class="p-8 flex-grow bg-white rounded-lg shadow-xl speech-bubble">
              <p v-if='activeDiscussion.excerpt'>{{activeDiscussion.excerpt}}</p>
              <div class="footer text-lg mt-4 flex items-stretch items-center h-12">

              <a :href="activeDiscussion.link" target="_blank" class="font-bold pr-4 border-r border-gray-200 flex items-center" v-if='activeDiscussion.author'>@{{ activeDiscussion.author.username }}</a> 
              <a :href="activeDiscussion.link" target="_blank" class="date flex items-center text-base px-4 bg-white border-r border-gray-200" v-if='activeDiscussion.created'>{{ activeDiscussion.created && activeDiscussion.created | formatDate() }}</a> 
              <a :href="activeDiscussion.link" target="_blank" class="comments flex items-center text-base px-4" v-if='activeDiscussion.comments'>{{ activeDiscussion.comments && activeDiscussion.comments }} comments</a>

              </div>
          </div>

        </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import moment from "moment";

export default {
  data() {
    return {
      activeDiscussion: null,
      categoryOptions: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        slidesPerColumnFill: "row",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 120,
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerColumnFill: "row"
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
   filters: {
    formatDate: function(value) {
      return moment(String(value)).format("DD/MM/YY");
    }
  },
  props: ["data"],
   mounted: function() {
    setTimeout(function(){ this.activeDiscussion = this.data[0]; }.bind(this), 800);

    var counter = 0;
    setInterval(function () {
     
      if (counter==this.data.length-1) {counter=0} else {  counter = counter + 1; };
            this.activeDiscussion = this.data[counter];
        }.bind(this), 5000);  
  }
};
</script>

<style type="text/css" lang="scss">
  
.speech-bubble {
  position: relative;
  background: #fff;
  border-radius: .4em;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #fff;
  border-left: 0;
  border-top: 0;
  margin-top: -10px;
  margin-left: -20px;

}

</style>
