<template>
  <div class="w-full md:px-20 md:py-10 flex flex-col">
    <h2 class="font-display text-4xl md:text-5xl mt-8 ml-8 mb-1 mx-auto md:mt-0 md:ml-0 leading-tight md:leading-normal font-medium w-full flex flex-row">
      The Participants
    </h2>

    <div class="w-full py-4 md:py-8 flex flex-col md:flex-row">
      <div class="members w-full whitespace-no-wrap h-20 mb-4 md:mb-0 md:px-0 md:w-3/5 md:h-auto md:whitespace-normal">
        <div
          class="avatar w-20 h-20 md:w-20 md:h-20 bg-cover md:float-left"
          v-for="(organiser, index) in data"
          @click="setActive(index)"
          :class="{ active: activeIndex === index }"
          :style="{ backgroundImage: 'url(' + organiser.image + ')' }"
        ></div>
      </div>

      <div class="w-full px-8 md:px-0 md:w-1/2 p-2 md:p-0 text-left">
        <h3
          class="font-display text-3xl mb-4 font-medium bg-primary text-white p-2 px-4 inline-block"
        >
          {{ data[activeIndex].title }}
        </h3>
        <div v-if="data[activeIndex].excerpt.length > 1">
          <h4 class="font-display leading-tight text-2xl md:text-3xl mt-0 mb-4 md:mb-2 text-lg md:leading-relaxed">
            {{ data[activeIndex].excerpt[0] }}
          </h4>
          <p class="font-body text-lg leading-relaxed">
            {{ data[activeIndex].excerpt[1] }}
          </p>
        </div>
        <div class="footer flex mt-4" v-if="data[activeIndex].username">
          <a
            class="font-body text-lg leading-relaxed bg-white border-gray mr-4 border rounded-lg text-orange p-3"
            :href="data[activeIndex].link"
            >Read More</a
          >
          <a
            class="font-body text-lg leading-relaxed bg-primary rounded-lg text-white p-3"
            :href="
              'https://edgeryders.eu/u/' +
                data[activeIndex].username.substring(1)
            "
            target="_blank"
            >{{ data[activeIndex].username }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  },
  props: ["data"]
};
</script>
<style type="text/css" lang="scss">
.members {
overflow: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 
}
.avatar {
  opacity: 0.9;
  width: 20%;
  display: inline-block;
  margin: 0;
}
.avatar:hover {
  cursor: pointer;
  opacity: 1;
}

.avatar.active {
  border: 4px solid #00acc1;
  opacity: 1;
}

.recent_post {
  height: 250px;
  width: 250px;
  overflow: hidden;

  margin: 0;
  display: inline-block;
  float: left;
  background: #000;
  position: relative;
  background-color: #000 !important;
  background-size: cover !important;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.4);
  &.animated {
    animation: scale-easeInElastic 1.5s reverse forwards;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 1;
    background: #000;
  }
  .date {
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    position: relative;
    font-size: 15px !important;
    width: auto;
    display: inline-block;
    padding: 6px 14px 4px;
    z-index: 1;
    top: 30px;
    left: 20px;
  }
  .post_excerpt {
    color: white !important;
    overflow: hidden;
    height: 20%;
    position: absolute;
    bottom: 0;
    background: #09192b;
    font-size: 15px;
    padding: 4% 5% 25% !important;
    z-index: 1;
    width: 100%;
    transition: transform 0.65s ease;
  }
  &:hover {
    .post_excerpt {
    }
  }
  a {
    padding: 0 20px 0;
    top: 30px;
    opacity: 1;
    z-index: 2;
    text-decoration: none !important;
    font-weight: bold !important;
    color: white !important;
    display: block;
    line-height: 30px !important;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.7);
    position: relative;
    font-size: 21px !important;
  }
  .thumbnail {
    position: absolute;
    top: 0;
    widh: 100%;
    height: 100%;
    left: 0;
    z-index: 2;
    opacity: 0.2;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }
}

#stories {
  padding-top: 30px;
  padding-bottom: 0;
  h1 {
    text-align: center;
    color: black;
    width: 80% !important;
    padding: 12px;
    float: none;
    border-bottom: 1px solid #ddd !important;
    margin: 0px auto 20px !important;
    display: block !important;
  }
  .featuredStories {
    .swiper-button-prev,
    .swiper-button-next {
      top: 40% !important;
    }
    .swiper-button-prev {
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E");
    }
    .swiper-button-next {
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E");
    }
    .swiper-slide {
      display: flex;
      align-items: center;
    }
    .featured_post {
      width: 80% !important;
      margin: 0 auto !important;
      height: auto;
      display: inline-block !important;

      a {
        text-decoration: none;
        color: #2c86b8 !important;

        h3 {
          color: #2c86b8 !important;
        }
      }
      .excerpt a {
        text-decoration: underline !important;
      }
      .footer {
        border-radius: 10px;
        display: inline-flex;
        width: auto !important;
        margin: 5px 0 0 0;
        overflow: hidden;
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);

        p {
          float: left;
          padding: 13px 20px 10px;
          margin: 0;
          height: 100%;
          font-size: 0.9em;
          background: rgba(0, 0, 0, 0.02);
          border-right: 1px solid #efefef;
        }
        a {
          padding: 13px 20px 10px;
          height: 100%;
          font-size: 0.9em;
          border: none;
          background: orangered;
          color: white !important;
        }
      }
      .photo {
        width: 33%;
        float: left;
        margin-right: 4%;
        height: 400px;
        background-color: #dfdbe5;
        position: relative;
        overflow: hidden;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        .image_fill {
          width: 100%;
          height: 100%;
          background-size: cover !important;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .summary {
        width: 63%;
        float: left;
        text-align: left !important;
      }
      h3 {
        font-size: 1.7em;
        font-weight: bold;
        line-height: 1.4em;
        margin: 10px 0 0 0;
        color: black;
        width: 100%;
        text-align: left !important;
      }
      .excerpt {
        font-size: 1.1em;
        margin: 10px 0 0 0;
      }
    }
  }
  .other_stories {
    width: 80%;
    margin: -40px auto 0;
    padding: 0;
    .swiper-wrapper {
      width: 100% !important;
    }
    .swiper-slide {
      width: 31% !important;
      margin: 0% 1.1% 2%;
      .recent_post {
        width: 100% !important;
      }
    }
    h1 {
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
