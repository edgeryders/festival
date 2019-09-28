<template>
  <div class="container w-12/12 py-10 flex flex-col">
  <h2 class="font-display text-4xl mb-0 font-medium w-full flex flex-row">Featured Participants</h2>

  <div class="container w-full py-8 flex flex-row">


<div class="w-1/2 flex flex-row flex-wrap content-start pr-8">
<div class="w-1/5 h-auto avatar" v-for='(organiser, index) in organisers' @click="setActive(index)" :class="{ 'active': activeIndex === index }">
  <img class="" :src="organiser.avatar" />
</div>
</div>

<div class="w-1/2 text-left">
<h3 class="font-display text-3xl mb-5 font-medium bg-primary text-white p-2 px-4 inline-block">{{organisers[activeIndex].name}}</h3>
<p class="font-body text-1xl leading-relaxed">{{organisers[activeIndex].bio}}</p>
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
      activeIndex: undefined,
      activeOrganiser: {
          name: "John Coate",
          username: "johncoate",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/johncoate/200/9859_2.png",
          byline: "Co-Director and Community Manager, Edgeryders",
          bio:
            "John was employee number two at The WELL, where he was instrumental in creating the online community that Wired Magazine called the “world’s most influential”. There he was the first to work as what is now known as an “online community manager” and he wrote the first treatise on building online community. He co-founded the first major news website, sfgate.com, which today has more than thirty million monthly visitors and more than 340K Twitter followers. He was the online manager of a teen social network and game site that had thousands of members. He managed a regional media organisation that combined terrestrial radio and the internet in innovative ways. Through it all the core of his community knowledge comes from direct personal experience living and working with others who are consciously building lasting relationships as the building blocks of community.",
        },
      organisers: [
        {
          name: "John Coate",
          username: "johncoate",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/johncoate/200/9859_2.png",
          byline: "Co-Director and Community Manager, Edgeryders",
          bio:
            "John was employee number two at The WELL, where he was instrumental in creating the online community that Wired Magazine called the “world’s most influential”. There he was the first to work as what is now known as an “online community manager” and he wrote the first treatise on building online community. He co-founded the first major news website, sfgate.com, which today has more than thirty million monthly visitors and more than 340K Twitter followers. He was the online manager of a teen social network and game site that had thousands of members. He managed a regional media organisation that combined terrestrial radio and the internet in innovative ways. Through it all the core of his community knowledge comes from direct personal experience living and working with others who are consciously building lasting relationships as the building blocks of community.",
        },
        {
          name: "Nadia E.N.",
          username: "nadia",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/nadia/200/10484_2.png",
          byline: "Co-Founder, Edgeryders",
          bio:
            "Engineer and designer born in Sweden to African parents, raised in Europe and Asia. A bridge person between activist networks of marginalised groups, artists, civil society, entrepreneurs, media and government. Nadia’s role in Edgeryders to serve our global community of brilliant misfits via the not-for-profit company that builds and managers the infrastructure sustaining it. In practice this translates into laying out the vision, building strategic partnerships, driving flagship projects and managing crews on different projects. Named Minister of Labour in a “dream government of New Thinkers” imagined for Sweden by the leading financial newspaper in Scandinavia.",
        },
        {
          name: "Alberto Cottica",
          username: "alberto",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/alberto/200/5_2.png",
          byline: "Co-Founder and Research Director, Edgeryders",
          bio:
            "Data/Network Scientist and Economist. An expert on collaborative governance and participation, with proven track record of managing processes of ICT-enabled design and delivery of public policy – and even public services – in collaboration with citizens. Alberto has first-hand experience in establishing, nurturing and running communities of citizens that work towards common goals, sometimes in alliance with government). Also has a proven track record of driving adoption of innovative practices – and, more importantly, of a practice of openness and transparency in policy delivery – in fairly conservative large organisations, including government agencies.",
        },
        {
          name: "Hugi Ásgeirsson",
          username: "hugi",
          byline: "Co-Director, Edgeryders",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/hugi/200/10418_2.png",
          bio:
            "Positioned between technology and participatory culture and politics, Hugi is interested in how people can collaborate better together today and in the future, online and offline. He currently works from Stockholm, where he co-founded the participatory culture center and social enterprise Blivande. As a co-director of Edgeryders, he runs the development lab Participio developing software for participatory culture and is involved in a number of projects exploring how technology can enable participation, social cohesion and resilience. Hugi has a background in informatics and analytics and has a degree from KTH Royal Institute of Technology where he studied biotechnology engineering.",
        },
        {
          name: "Maria Euler",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/mariaeuler/200/9955_2.png",
          username: "MariaEuler",
          byline: "Community Manager, Edgeryders",
          bio:
            "Interdisciplinary artist and design researcher as well as a community manager for edgeryder with a background in physics, fine art and a Master in Information Experience Design from the Royal Collge of Art. She searches for points of connection and entry, between disciplines, complex scientific concepts, discussion, emotional and tangible experiences and people. She worked with the Helen Hamlyn Centre for Inclusive Design and the Financial Education startup Gimi as a researcher and UX Designer. She also was part of multiple successful art-science collaborations as for example with the Bristol Laboratory for Quantum Computing and exhibited interactive installations at venues and festivals across Europe such as Sonar+D, I-Gem and VrSci. Her goal is to enable different approaches and connections to increase the diversity and creativity of the discourse on art, science and technology.",
        },
        {
          name: "Amelia Hassoun",
          username: "amelia",
          avatar: "https://edgeryders.eu//user_avatar/edgeryders.eu/amelia/200/9977_2.png",
          byline: "Lead Ethnographer, Edgeryders",
          bio:
            "An anthropologist with a research focus on the social impacts of digital technologies. Has extensive ethnographic research experience both online and offline, in both public and private sector, focusing on the power of participatory communities to facilitate transparent, efficient solutions to public problems. Has technical experience designing and developing a bespoke patient information website, as well as interviewing community members, gathering and analysing qualitative and quantitative data, and generating ethnographic reports. Currently a doctoral researcher at the Oxford Internet Institute analysing community-based civic technology initiatives, ethnographically examining how community members creatively interact with and rework “smart” urban technologies.",
        },
      ],
      featuredStories: {
        spaceBetween: 120,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    setActive(index) { 
      this.activeIndex = index;
    }
},
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  },
  props: ['data', 'title']
};
</script>
<style type="text/css" lang="scss">

.avatar img {
  opacity: 0.8
}
.avatar:hover {
  cursor: pointer;
  img {
  opacity: 1
}
}

.avatar.active img {
  border: 4px solid #00acc1;
  opacity: 1
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
  .swiper-button-prev, .swiper-button-next {
  top: 40% !important;
}
 .swiper-button-prev {
background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E")
}
 .swiper-button-next {
background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E")
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
  text-decoration: underline !important

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
          font-size: .9em;
          background: rgba(0,0,0,0.02);
          border-right: 1px solid #efefef;

        }
           a {
           padding: 13px 20px 10px;
           height: 100%;
          font-size: .9em;
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
        background-color: #DFDBE5;
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