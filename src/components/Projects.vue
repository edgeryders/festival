<template>
 <div class="w-full" id="projects">
            <h1 class="font-display text-3xl mt-10 mb-6">What else are we working on?</h1>
<div style="position: relative">
 <swiper
            :options="categoryOptions"
            style="clear: both; display: block;"
            class="categories"
           ref="mySwiper"
          >
            <swiper-slide  class="category_slide"
                v-for="(category, indx) in data"
                :key="indx"
                :index="indx">
           
            <div
                  class="category rounded-full shadow-lg"
                  :style="{ borderTop: '3px solid #' + category.color }"
                >
                  <a
                    :href="'https://edgeryders.eu/c/' + category.slug"
                    target="_blank"
                  >
                    <div class="category_header">
                      <div
                        v-if="category.uploaded_logo"
                        class="category_logo"
                        :style="{
                          background:
                            'url(https://edgeryders.eu' +
                            category.uploaded_logo.url +
                            ')',
                          border: '3px solid #' + category.color
                        }"
                      ></div>

                      <h3 :style="{ color: '#' + category.color }">
                        {{ category.name }}
                      </h3>
                    </div>
                  </a>

                  <div
                    class="category_description"
                    v-html="
                      category.description
                        .replace(/<\/?p[^>]*>/g, '')
                        .substring(0, 250) + '...'
                    "
                  ></div>

                  <a
                    :href="'https://edgeryders.eu/c/' + category.slug"
                    target="_blank"
                  >
                    <div class="category_info">
                      <p
                        :style="{
                          color: '#' + category.color,
                          border: '1px solid #' + category.color
                        }"
                      >
                        {{ category.topics_all_time }} Topics
                      </p>

                      <p :style="{ color: '#' + category.color }" class="updated">
                        Updated
                        {{ category.topics[0].last_posted_at | formatDate }} by
                        <b>@{{ category.topics[0].last_poster.username }}</b>
                      </p>
                    </div>
                  </a>
                </div>

            </swiper-slide>

          </swiper>

<div class="arrow left hidden md:block" @click='back()'></div>
<div class="arrow right hidden md:block" @click='forward()'></div>
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
       categoryOptions: {
        slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            slidesPerColumnFill: "row",
            loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 120,
        centeredSlides: true,
            spaceBetween: 30,
            slidesPerColumnFill: "row",
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ['data'],
   filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  },
  methods: {
    back() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    forward() {
     this.$refs.mySwiper.swiper.slideNext();
    }
  }
};
</script>
<style type="text/css" lang="scss">
#projects {
  .arrow {
    top: 45%;
    position: absolute;
    border-radius: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 30' %3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.1 4.6A1.5 1.5 0 0 0 15 2.4l-8.5 8.1a2 2 0 0 0 0 3l8.5 8.1a1.5 1.5 0 1 0 2.1-2.2L9.4 12l7.7-7.4z' fill='%2300ACC2'/%3E%3C/svg%3E") #fff no-repeat 45% 68%;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-size: 50%;
    &.left {
      left: 20px;
    }
    &.right {
      left: auto;
      right: 25px;
      transform: scale(-1);
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
    &:hover {
      cursor: pointer;
    }
    &.left:active {
      transform: scalex(1.05);
    }
    &.right:active {
      transform: scalex(-1.05);
    }
  }

  .categories {
    width: 85% !important;
    margin: 0 auto;
    height: auto;
    display: inline-block;
    .category {
      height: 355px;
      .category_description {
        font-size: 1.1em;
      }
    }

    .category_slide {
      display: flex;
      justify-content: center !important;
      align-items: center !important;
      transition: all 0.6s ease;
      &:hover {
        transform: scale(1.01);
        cursor: grab;
      }
      a {
        text-decoration: none;
      }
    }
    .category {
      width: 90% !important;
      padding: 14px;
      margin: 35px auto 20px !important;
      float: left;
      background: #fff;
      border-radius: 10px;
      height: 320px;
      display: flex;
      position: relative;
      flex-direction: column;
      .category_header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 3px auto 0;
        padding-top: 0px;
        text-align: center;
        background-position: -10% -20% !important;
        h3 {
          width: 100%;
          margin: 60px 0 0 0;
          line-height: 30px;
          font-size: 1.7em;
        }
      }
      .category_description {
        font-size: 16px;
        margin: 11px 5px 0;
        text-align: left;
      }
      .category_logo {
        width: 60px !important;
        height: 60px !important;
        border-radius: 100px;
        display: block;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-color: #fff !important;
        border: 2px solid #ddd;
        position: relative;
        margin: -50px auto;
      }
      .category_info {
        position: absolute;
        bottom: 0;
        height: 50px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(252, 252, 252, 1) 82%,
          rgba(237, 237, 237, 1) 99%,
          rgba(237, 237, 237, 1) 100%
        );

        border-radius: 8px;
        width: 95.5%;
        padding: 0 2% 0 3%;
        left: 0;
        p {
          float: left;
          font-size: 13px;
          margin-top: 5px;
          border-right: 1px solid #efefef;
          padding: 5px 10px 5px;
          &:first-child {
            font-weight: bold;
            border-radius: 5px !important;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
    .project {
      width: 23%;
      padding: 14px;
      border: 2px solid #efefef;
      margin: 0 1% 2%;
      float: left;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      height: 250px;
      display: flex;
      .description {
        h3 {
          font-weight: bold;
          color: black;
          font-size: 21px;
          width: 100%;
          border-bottom: 2px solid #ddd;
          padding-bottom: 7px;
          border-radius: 0;
          margin: 0;
        }
        p {
          margin: 7px 0 0 0;
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 860px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
  #projects {
    padding: 0px 0 0 !important;
    height: auto !important;
    display: inline-block !important;
    .swiper-container {
      width: 100% !important;
      margin-top: 20px !important;
    }
    h1 {
      color: RGBA(21, 38, 55, 1) !important;
      font-size: 8.5vw !important;
      padding-bottom: 0px;
      letter-spacing: -1px;
      line-height: 1.3em !important;
      margin: 10vw auto 0px;
      position: relative;
    }

    .categories {
      padding-bottom: 0px;

      .category {
        height: auto !important;
        display: inline-block !important;
        width: 80% !important;
        margin: 40px auto 15px !important;
        background: white;
        .category_info {
          left: 0px;
          p {
            margin-left: 8px;
          }
        }
        .category_description {
          margin: 11px 5px 45px !important;
          font-size: 1.05em;
          width: 100%;
        }
        .updated {
          display: none;
        }
      }
    }
  }
}
</style>