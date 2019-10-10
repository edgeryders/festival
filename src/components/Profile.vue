<template>
  <div class="self-start flex items-center pr-2 w-auto bg-gray-100 border-b border-gray rounded-full overflow-hidden">
    <div class="w-12 h-12 md:h-10 bg-cover shadow-lg" :style="{ backgroundImage: 'url(' + data.avatar + ')' }"></div>
    <a class="ml-3 mt-1 mr-2 font-bold text-s" :href="'https://edgeryders.eu/u/' + data.username" target="_blank">@{{data.username}}</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {
  },
  props: ["data"],
  mounted: function() {
    
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
