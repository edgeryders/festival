<template>
  <div class="background">
    <div class="modal m-auto">
        <h1>Modal</h1>
    </div>
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
.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9;
}
.modal {
  position: relative;
  top: 90px;
  width: 90%;
  height: 80vh;
  background: white;
  top: 10%;
  border-radius: 10px;
}
</style>
