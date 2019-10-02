<template>
  <div>
    <h1 class="font-display text-4xl md:text-5xl">The People</h1>
    <h3 class="font-display text-2xl px-4 mt-2 md-px-0 md:w-1/2 mt-0 m-auto">Shed a light on your journey, it helps us connect you to the right people, conversations and opportunities.</h3>
     <a href='https://edgeryders.eu/c/campfire' target='_blank'><button class="text-white bg-primary border border-primary text-xm font-semibold rounded-lg px-4 py-3 mt-4 leading-normal">Tell us about you</button></a>

<div class="w-full px-4 md:px-12 py-8 people">
   <swiper
            :options="sliderOptions"
            class='md:px-8'
            ref="mySwiper"
          >
            <swiper-slide class="story_slide"
                v-for="(story, indx) in data"
                :key="indx"
                :index="indx"
                >

              <div class="story bg-cover bg-center flex flex-col flex-end shadow-lg" style="height: 400px; width: 100% !important; margin: 0 auto !important; background-repeat: no-repeat; background-color: RGBA(66, 103, 178, 1.00)" :style="{ backgroundImage: 'url(' + story.image + ')' }">
                
                  <Profile class='mt-4 ml-3 mb-2' :data='story.author' />
                   <h4 class="font-body text-3xl mt-4 font-bold text-left pl-4 pr-4 text-white leading-tight" style="text-shadow: 0px 1px 3px rgba(0,0,0,.5)"><a :href='story.link' target="_blank">{{story.title}}</a></h4>
                   <div class="mt-auto text-left p-4 text-white">
                    <p>{{story.date}} | {{story.comments}} comments</p>
                  </div>

              </div>
           
           

            </swiper-slide>

          </swiper>
          <div class="slider-arrow left" @click='back()'></div>
<div class="slider-arrow right" @click='forward()'></div>

</div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Profile from "@/components/Profile.vue";
export default {
  data() {
    return {
      sliderOptions: {
        slidesPerView: 4,
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
            slidesPerColumnFill: "row",
          }
        }
      },
      featured: [
          {
            title: 'Featured Story 1',
            date: '2/11/19',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium feugiat dignissim. Duis sagittis vitae nunc et pulvinar. Vivamus dictum, ligula in porta volutpat, nisl magna tempor orci, in consectetur nisi massa in tellus. Nulla cursus convallis efficitur. Quisque porttitor, magna at consequat gravida, metus quam tincidunt odio, non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus.',
            image: 'https://picsum.photos/200/600',
            comments: 6,
            user: {
              username: "johncoate",
              avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/johncoate/200/9859_2.png"
            }
          },
          {
            title: 'Featured Story 2',
            date: '18/10/19',
            excerpt: 'Vivamus dictum, ligula in porta volutpat, nisl magna tempor orci, in consectetur nisi massa in tellus. Nulla cursus convallis efficitur. Quisque porttitor, magna at consequat gravida, metus quam tincidunt odio, non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus.',
            image: 'https://picsum.photos/100/600',
            comments: 4,
            user: {
              username: "alberto",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/alberto/200/5_2.png",
            }
          },
          {
            title: 'Featured Story 3',
            date: '28/10/19',
            excerpt: 'Quisque porttitor, magna at consequat gravida, metus quam tincidunt odio, non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus. Quisque porttitor, magna at consequat gravida, metus quam tincidunt odio, non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus.',
            image: 'https://picsum.photos/300/600',
            comments: 2,
            user: {
              username: "hugi",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/hugi/200/10418_2.png",
            }
          },
          {
            title: 'Featured Story 4',
            date: '3/11/19',
            comments: 7,
            excerpt: 'Nulla cursus convallis efficitur. Quisque porttitor, magna at consequat gravida, metus quam tincidunt odio, non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus. Non luctus sem sapien nec lectus. Sed congue venenatis bibendum. Cras dictum libero non imperdiet luctus.',
            image: 'https://picsum.photos/400/600',
            user: {
              username: "amelia",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/amelia/200/9977_2.png",
            }
          }
        ],
    }
  },
  components: {
    swiper,
    swiperSlide,
    Profile
  },
  props: ["data"],
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
.people {
  position: relative
}
.slider-arrow {
  top: 45%;
  position: absolute;
  z-index:99999;
  border-radius: 100px;  
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 30' %3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.1 4.6A1.5 1.5 0 0 0 15 2.4l-8.5 8.1a2 2 0 0 0 0 3l8.5 8.1a1.5 1.5 0 1 0 2.1-2.2L9.4 12l7.7-7.4z' fill='%2300ACC2'/%3E%3C/svg%3E") #fff no-repeat 45% 68%;
  width: 50px;
  height: 50px;
box-shadow: 0 2px 10px rgba(0,0,0,0.1);
background-size: 50%;
  &.left {
  left: 20px;
}
  &.right {
  left: auto;
  right: 25px;
  transform: scale(-1);
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);

}
&:hover {
  cursor: pointer;
}
&.left:active {
  transform: scalex(1.05)
}
&.right:active {
  transform: scalex(-1.05)
}
}

 .post_meta {
 color: white
}
 .story {
 width: 100%;
 border-radius: 10px;
}


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
