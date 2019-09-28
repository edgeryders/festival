<template>
  <header class="radius element2">
    <div class="bg-dark-blue element2">
        <span class="nav-item logo" data-id="er_menu" aria-controls="er_menu"></span>

      <nav class="vam nav scroll element2">
        <a class="nav-item" href='#participants' v-smooth-scroll="{ duration: 1000, offset: -100 }">Participants</a>
        <a class="nav-item" href='#events' v-smooth-scroll="{ duration: 1000, offset: -100 }">Program</a>
        <a class="nav-item" href='#process' v-smooth-scroll="{ duration: 1000, offset: -100 }">Process</a>
        <a class="nav-item" href='#mission' v-smooth-scroll="{ duration: 1000, offset: -100 }">Mission</a>
        <a class="nav-item" href='#people' v-smooth-scroll="{ duration: 1000, offset: -100 }">People</a>
         <a class="nav-item" href='#edgeryders' v-smooth-scroll="{ duration: 1000, offset: -100 }">About Edgeryders</a>
      </nav>
    </div>
    <div class="bg-grey submenu scroll radius-bottom" id="er_menu">
      <div class="box">
        <div class="sidebar">
          <div class="news"></div>
          <div class="campaigns"></div>
           <div class="campfire"></div>
           <div class="research"></div>
        </div>
        <div class="content">
   
        <div class="title"><span class="date">Tuesday July 30th</span> <h1>Welcome to Edgeryders</h1></div>
        <div class="flex_container">
        <div class="featured" id="campaigns"><h2>Campaigns</h2></div>
        <div class="featured" id="ioh"><h2>Next Generation Internet</h2></div>
         <div class="featured" id="about"><h2>About Edgeryders</h2></div>
</div>
 <div class="flex_container">
         <div class="action" id="post"><h2>Write a post</h2></div>

          <div class="action" id="subscribe"><h2>Subscribe</h2></div>

       </div>
      </div>
        <h1>Contact Us</h1>
      </div>
      </div>
    </div>
    <div class="bg-grey submenu scroll radius-bottom" :class="{ active: isactive }" id="languages">
        <span v-for="entry in languages" class="nav-item" :to="'/' + entry.language" @click="isactive = !isactive; changeLocale(entry.language)">{{entry.title}}</span>
    </div>
  </header>
</template>

<script>
import i18n from '@/plugins/i18n'
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "Navigation",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  inheritAttrs: true,
  data() {
    return {
      isactive: false,
      activelanguage: "International",
      languages: [
                    { language: 'en', title: 'International' },
                         { language: 'de', title: 'Deutsch' },
                    { language: 'srb', title: 'српско-хрватски' },
                    { language: 'pl', title: 'Polski' },
               
                     { language: 'cz', title: 'Česky' }
                ]
    }
  },
  methods: {
    showLanguages(){
      this.isactive = !this.isactive
    },
    changeLocale(locale) {
        i18n.locale = locale;
    },
    emit: function() {
      this.$emit('event_child', 1)
    },
    addSlide () {
    this.$refs.fullpage.api.moveSectionDown();
  }
  },
   mounted: function () {

  },
  computed: {
    localActive: {
      get() {
        return this.active
      },
      set(val) {
        this.$emit("input", val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>


.scroll {
  white-space: nowrap;
  overflow-x: scroll;
  width: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 
  .nav-item {
    color: white !important
  }
}
  
.nav-item.active {
  color: #fff;
  border-right: 1px solid RGBA(41, 71, 104, 1.00);
 
  background-color: RGBA(41, 71, 104, 1.00); }

.submenu {
  max-height: 0;
background: RGBA(41, 71, 104, 1.00);
  z-index: 999999;
  transition: max-height .5s ease;
  opacity: 0; 
&#languages {
    position: fixed;
  top: 52px;
  width: 100%;
}
}

.submenu.active {
  height: auto;
   max-height: 90px;
  opacity: 1; 
  transition: max-height .5s ease;
}

#er_menu {
  .box {
    display: none
  }
}

.submenu#er_menu {
    transition: none;
}
.submenu#er_menu.active {
   max-height: 900px;
   .box {
    display: flex
  }
 
}


/**
 * Helper
 */
.bg-dark-blue {
  background-color: #152637;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99999;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  }

.bg-grey {
  background-color: RGBA(41, 71, 104, 1.00); }

.bg-dark-grey {
  background-color: RGBA(41, 71, 104, 1.00); }

.flex_container {
  display: grid;
  grid-gap: 20px;
  width: 95%;
   grid: 200px / auto auto auto;
  margin: 20px auto 50px;
}

.text-center {
  text-align: center; }

.radius {
  background: #727c87;
}
.vam,
.nav-item {
  display: inline-block;
  vertical-align: middle; }
  
/**
 * Example specific
 */
.logo {
  min-width: 60px; 
  height: 52px;
  padding: 0 50px 0 20px;
background: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center #152637;
background-size: 45%;transition: none;
box-shadow: none !important;
left: 0;
z-index: 99999;
}
.logo.active {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center orangered;
border-right: 1px solid #727c87 !important;
box-shadow: none !important;
background-size: 45%;
transition: none;
}
.box {
  height: 100vh;
  width: 100vw !important;
  display: block;
  background: #fff;
  position: fixed;
  z-index: 99999;
  top: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  transition: none;
  .sidebar {
    flex-basis: 61px;
    display: flex;
    flex-direction: column;
    background: #727c87;
    border-right: 1px solid #ddd;
  }
  .content {
    flex-basis: 92%;
    margin: 0 auto;
    padding-top: 30px;
    justify-content: left;
    align-items: flex-start;
    height: 80%;
      overflow: scroll;
    .status {
      width: 75%;
    }
    .title {
      display: flex !important;
      padding: 0 !important;
    }
    .login {
      border: 1px solid orangered;
      padding: 10px;
align-self: flex-start;
      border-radius: 0 10px 10px 0;
      font-size: 14px;
      color: orangered !important;
      display: inline-block !important;
      width: auto !important;
      padding: 12px 12px 12px;
      background-size: 18px;
      font-weight: bold;
      text-align: left;
      margin: 14px 0 0 0px;
    }
  }
  h1 {
    position: relative;
 
    font-weight: 500;
    font-family: sans-serif;
    color: black;    
    display: inline;
    text-align: left;

  }
  .action {

    font-weight: bold;
width: 100%;
    height: 140px;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-family: "Helvetica", sans-serif;
     position: relative;
      h2 {
      font-weight: bold;
    font-size: 21px;
    color: black;

      margin: 0;
           margin-left: 10px;
      position: absolute;
      bottom: 10px;
      text-align: left;
     }
     &#post {
      h2 {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 78 98'%3E%3Cpath d='M54 24v-6h-6v6h6z'/%3E%3Cpath  d='M54 24v6H42V18h6v-6H18v54h42V24h-6zm0 18v18H24V18h12v18h18v6z'/%3E%3C/svg%3E") no-repeat 5px 5px;
        margin-left: 10px;
        padding: 10px 40px !important;
        background-size: 32px;
        font-weight: 900 !important;
      }
      }
      &#subscribe {
        h2 {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 100 125'%3E%3Cpath d='M10 84h89V11H83v8h8v57H18V60h-8z'/%3E%3Cpath fill='red' d='M67 11V3H51v8h-9v8h-8v-8h-8V3H10v8H2v24h8v9h8v8h8v8h8v8h8v-8h9v-8h8v-8h8v-9h8V11z'/%3E%3C/svg%3E") no-repeat 7px 9px;
        margin-left: 10px;
        padding: 10px 45px !important;
        background-size: 27px;
        }
      }
     
    
  }
  .featured {
    padding: 20px;
    width: 100%;
    margin: 20px .5% 0;
    float: left;
    position: relative;
    height: 200px;
    border-radius: 10px;
    color: white;
    border: none !important;
    box-shadow: 0 1px 20px rgba(0,0,0,0.2);
    display: flex;
    &:first-child {
      margin: 20px 1.5% 0 0;
    }
    &#campaigns {
      background: url("data:image/svg+xml,%3Csvg id='e9321c55-7aa4-4d8e-a3d7-7280e303cff0' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width='1036' height='591.05128' viewBox='0 0 1036 591.05128'%3E%3Ctitle%3Epreparation%3C/title%3E%3Cpath d='M1118,209.81624c-44.54508,152.29867-37.33631,323.11768,0,504.718q-59.93521-9.71256-119.59379-17.46593-10.57583-1.36143-21.14064-2.66745-14.85921-1.84285-29.6964-3.553c-.7748-.09958-1.5496-.18815-2.31332-.26563-7.13912-.83013-14.27817-1.616-21.41728-2.40182Q821.11851,677.04,719.28391,672.2419C503.57231,662.24719,290.9156,674.677,82,714.53419c37.64817-186.31737,52.90073-361.88071,0-504.71795C366.35046,250.02237,726.13585,240.4941,1118,209.81624Z' transform='translate(-82 -154.47436)' fill='%236c63ff'/%3E%3Cpath d='M937.353,599.06888c-9.076-70.07389-19.29217-140.668-30.52653-210.85256q-7.57077-47.18446-15.71711-94.03695l-.16605-.95186-.96295.04424q-16.65231.6143-33.42651.797-9.09816.11624-18.18533.12174c-19.9784.04425-39.91256-.18815-59.47036-.40953-20.02272-.23246-40.3-.46485-60.67685-.39844-13.271.04425-26.58626.2103-39.8904.58659-20.63147.58665-41.26294,1.67133-61.72836,3.57513-21.12956,1.95906-42.5136,4.82579-63.2004,7.604-23.55353,3.16554-47.904,6.43072-71.97768,8.36769-44.25134,3.564-89.36606,2.77817-132.99758,2.02546-23.54245-.40952-47.8818-.83013-71.8227-.56443-1.04043.011-2.47931-.07749-4.13957-.19929-6.09868-.42054-14.45529-1.00719-16.9346,3.01063-1.69349,2.72285.2988,11.04622,2.85559,20.8307.66415,2.52355,1.23966,4.71514,1.40571,5.78874,2.6232,16.20411,4.70406,32.71811,6.20934,49.0772a732.2906,732.2906,0,0,1,2.24692,101.10959A725.3373,725.3373,0,0,1,254.2793,606.0641l-.24354,1.18433,1.1954.14389c84.8059,10.08328,173.45248,16.06016,263.49376,17.76473,13.448.25455,26.11026.39845,38.14165.40953,1.16217.01107,2.31325.01107,3.45333.01107,9.48554,0,18.58378-.07748,27.361-.22138q8.45076-.14946,16.52508-.38743c9.79555-.2988,19.21468-.69725,28.39041-1.20641.74156-.03324,1.47211-.07749,2.2026-.12174q3.90156-.21585,7.75894-.47593,6.226-.39855,12.3412-.87445c28.30184-2.19151,56.95789-5.73341,84.89446-9.29739q4.69855-.61429,9.36387-1.20649c2.10295-.26563,4.206-.54234,6.32-.808,42.10414-5.40137,85.138-10.70316,128.13861-11.75461,1.66025-.04431,3.33159-.08856,4.99185-.11072q12.95-.23245,25.87786.13282,10.85805.29883,21.694,1.07366l1.35038.08857ZM913.3457,596.988q-12.46843-.33207-24.937-.08857c-1.92588.02216-3.84076.06641-5.76664.12174-44.95974,1.16223-89.89732,6.93989-133.77238,12.57373l-4.6819.59767c-1.18433.155-2.37973.30994-3.56406.46485-28.25752,3.61938-57.26776,7.2166-85.89057,9.43028-3.2541.25455-6.51929.487-9.81764.70839-3.398.23239-6.81816.44269-10.28257.642-.73048.04425-1.472.0885-2.21367.13282-9.21991.498-18.70552.89653-28.5564,1.18426q-9.64608.29894-19.79026.44276c-8.77721.13281-17.88647.18814-27.38315.155-11.96491-.02216-24.56073-.155-37.92027-.40952-89.54312-1.6935-177.71384-7.62613-262.077-17.60983a728.74349,728.74349,0,0,0,13.76906-110.62836,733.26729,733.26729,0,0,0-2.258-101.41954c-1.50528-16.41442-3.59722-32.97273-6.22042-49.23218-.19923-1.18433-.75264-3.30943-1.45-5.999-1.45-5.501-4.44944-16.96784-3.12129-19.104,1.78206-2.87775,9.67375-2.32433,14.90914-1.95912,1.70451.11072,3.16554.2103,4.30561.19929,23.90767-.2657,48.23594.1549,71.76732.56443,43.67583.75271,88.84587,1.53852,133.20794-2.03655,24.12905-1.937,48.51265-5.21323,72.09935-8.37877,20.65363-2.76709,42.01558-5.63383,63.11191-7.59289,1.616-.155,3.22086-.29886,4.83687-.43168.74156-.06641,1.48319-.13281,2.21368-.18814,17.72048-1.48319,35.56269-2.39081,53.40491-2.911,13.72481-.39845,27.44956-.57558,41.13006-.61983,20.29943-.0664,40.52137.166,60.47762.39845,19.50247.23246,39.35914.45377,59.27114.40952,6.143-.01108,12.28594-.04425,18.42887-.13281q16.30374-.18261,32.5189-.75264,7.853,45.159,15.16369,90.72744c11.31184,70.4724,21.60542,141.37642,30.72582,211.76018Q924.17615,597.24264,913.3457,596.988Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M431.12782,618.84894c-3.8134-27.2375-.39453-55.03058,2.91193-81.90814,1.76673-14.364,3.59344-29.21662,4.29657-43.81467,1.48244-30.77365-1.96291-62.01263-5.29531-92.22313-3.0076-27.26831-6.11734-55.46511-5.61958-83.33277l2.21367.04c-.49559,27.72607,2.60658,55.851,5.60607,83.05012,3.34159,30.29589,6.79721,61.6235,5.30666,92.57226-.70745,14.68019-2.53957,29.5744-4.31116,43.97842-3.28862,26.736-6.68966,54.38205-2.91679,81.331Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M632.8052,626.49844c-8.57583-108.87974-12.32654-219.46028-11.1462-328.66861l2.21367.02378c-1.17926,109.14294,2.56821,219.657,11.13972,328.47189Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M299.93351,349.12375,299.7,346.922a604.70983,604.70983,0,0,1,81.06451-3.093l-.06486,2.21259A602.23329,602.23329,0,0,0,299.93351,349.12375Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M489.95613,339.54107l-.06269-2.2126c13.24692-.37345,26.94458-.75987,40.25851-2.63955,14.93583-2.10883,29.75545-6.14489,44.087-10.048l.58153,2.13585c-14.39754,3.92095-29.2858,7.97594-44.35944,10.10422C517.02447,338.77795,503.26358,339.166,489.95613,339.54107Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M811.15522,324.20261c-1.63864,0-3.26972-.01351-4.89106-.027l-126.21732-1.04523.0173-2.21367,126.21731,1.04522c8.685.07242,17.65644.14592,26.20093-1.89751l.5145,2.15314C825.81109,323.93617,818.41992,324.20261,811.15522,324.20261Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M337.67947,458.85471H287.8718c5.60247-22.98548,10.98434-44.44489,0-59.76923h49.80767Q351.74179,429.00144,337.67947,458.85471Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M569.6795,569.85468H519.87177c-3.11512-27.7071,3.75787-48.359,0-59.7692H569.6795A311.81139,311.81139,0,0,0,569.6795,569.85468Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M511.453,485.4188h-49.8077c1.86759-22.98178,7.8891-44.44186,0-59.76922H511.453Q525.51942,455.53419,511.453,485.4188Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3Cpath d='M562.36752,434.50427h49.80769c3.115-22.98593-3.75787-44.4453,0-59.76923H562.36752Q548.30109,404.61966,562.36752,434.50427Z' transform='translate(-82 -154.47436)' fill='%233f3d56'/%3E%3Cpath d='M949.76068,745.52564h49.8077c3.115-22.98593-3.75787-44.4453,0-59.76923h-49.8077Q935.69427,715.641,949.76068,745.52564Z' transform='translate(-82 -154.47436)' fill='%233f3d56'/%3E%3Cpath d='M336.57265,560.68376h49.80769c3.115-22.98593-3.75787-44.4453,0-59.76923H336.57265Q322.50622,530.79915,336.57265,560.68376Z' transform='translate(-82 -154.47436)' fill='%233f3d56'/%3E%3Cpath d='M843.14623,237.67172c-23.32527-39.41248-69.47245-41.24928-69.47245-41.24928S728.706,190.672,699.85942,250.6977c-26.8873,55.94889-63.99519,109.96869-5.97407,123.06591l10.4803-32.61938,6.49039,35.04786a227.02168,227.02168,0,0,0,24.82508.42428c62.13593-2.00612,121.311.58693,119.40567-21.71005C852.554,325.26563,865.58982,275.59442,843.14623,237.67172Z' transform='translate(-82 -154.47436)' fill='%232f2e41'/%3E%3Ccircle cx='696.32111' cy='135.05365' r='60.22663' fill='%23a0616a'/%3E%3Cpath d='M753.683,328.76657s27.37573,63.87672-9.12525,76.65207l36.501,120.45325,62.05168-3.6501,16.42544-40.15108-3.65009-60.22663L850.41056,381.693s-38.326,9.12525-34.67594-58.40157Z' transform='translate(-82 -154.47436)' fill='%23a0616a'/%3E%3Cpath d='M739.08255,403.59359s-60.22662-5.47515-54.75148,38.326,10.9503,52.92643,10.9503,52.92643l5.47515,65.70177-32.85089,20.07555H636.87979S541.97723,602.524,589.42851,626.2496s63.87673-18.25049,63.87673-18.25049,87.60236,0,93.07751-14.6004S739.08255,403.59359,739.08255,403.59359Z' transform='translate(-82 -154.47436)' fill='%23a0616a'/%3E%3Cpath d='M855.88571,385.34309s56.57652-20.07554,60.22662,23.72564,3.6501,47.45129,3.6501,47.45129l10.9503,62.05167s21.90059,54.75148,21.90059,71.17692,16.42544,67.52683,16.42544,67.52683,21.90059,71.17692-1.82505,69.35187S939.838,649.97524,939.838,649.97524l-49.27633-98.55266L875.96125,491.196Z' transform='translate(-82 -154.47436)' fill='%23a0616a'/%3E%3Cpath d='M748.2078,396.29339H733.6074l-1.82505,76.65207s-23.72564,32.85089,5.47515,62.05167l7.3002,47.45129,133.2286-5.47515,9.12524-49.27633s18.2505-40.15109-7.30019-76.65207l-23.72564-74.827H843.11036s29.58893,109.098-32.85089,111.328C759.15809,489.3709,748.2078,396.29339,748.2078,396.29339Z' transform='translate(-82 -154.47436)' fill='%23d0cde1'/%3E%3Cpath d='M923.83857,688.18039Q821.11851,677.04,719.28391,672.2419c10.36-30.34947,17.7979-51.57861,20.50967-59.249.36527-1.02942.642-1.80415.83012-2.33548.11073-.34312.19923-.58659.24354-.70833a.90617.90617,0,0,0,.04425-.1218l4.41627-14.732,1.85948-6.20934,1.99237-6.63,2.67852-8.93218L870.489,569.67128l3.32051,7.47115,8.83255,19.87876.974,2.20266,1.47211,3.29836a9.97466,9.97466,0,0,1,2.756,1.295C898.75759,610.96739,911.1431,642.44585,923.83857,688.18039Z' transform='translate(-82 -154.47436)' fill='%232f2e41'/%3E%3Cpath d='M883.26144,555.07268l-144.17889,5.47514s-6.58031,49.27634,0,49.27634c1.82505,0,151.47909,12.77534,149.654-9.12525S883.26144,555.07268,883.26144,555.07268Z' transform='translate(-82 -154.47436)' fill='%233f3d56'/%3E%3Ccircle cx='697.32171' cy='42.14771' r='33.36694' fill='%232f2e41'/%3E%3Cpath d='M742.44246,187.8413a33.36822,33.36822,0,0,1,29.85463-33.17936,33.36694,33.36694,0,1,0,0,66.35871A33.36821,33.36821,0,0,1,742.44246,187.8413Z' transform='translate(-82 -154.47436)' fill='%232f2e41'/%3E%3Cpolygon points='750.834 79.398 705.243 55.517 642.283 65.286 629.257 122.818 661.683 121.571 670.742 100.435 670.742 121.223 685.704 120.647 694.388 86.997 699.815 122.818 753.005 121.733 750.834 79.398' fill='%232f2e41'/%3E%3Cpath d='M590.78632,678.61966H540.97863c9.43913-22.99026,14.16484-44.44888,0-59.76923h49.80769Q604.85275,648.735,590.78632,678.61966Z' transform='translate(-82 -154.47436)' fill='%23f2f2f2'/%3E%3C/svg%3E") no-repeat center -60px #2f2e41;
  background-size: 120%;
    }
    &#about {
background-color: #FFE53B;
background: url("~@/assets/er_logo.png") no-repeat 20px 15px, linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
border: none;
background-size: 200px, 100%;

 h2 {
        bottom: 5px
      }
    }
    &#ioh {
      height: 200px;
      background-color: #21D4FD;
background: url("~@/assets/NGI2.png") no-repeat 20px 30px, linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
background-size: 105px, 100%;

      color: white;
      border: none;
      opacity: 0;
      h2 {
        bottom: 5px
      }
    }
    h2 {
      color: white;
      font-family: Helvetica, sans-serif;
      display: inline-block;
      position: absolute;
      bottom: -10px;
      font-size: 22px;
    }
  }
}

.campfire {
  width: 60px;
  height: 50px;
  display: inline-block;
  
  margin: 7px 0 0 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 100 125'%3E%3Cpath fill='white' d='M35.8 99.2a1.6 1.6 0 0 0 1.7-1.7 34.1 34.1 0 0 1 10.8-28.8 2.5 2.5 0 0 1 3.4 0 34.1 34.1 0 0 1 10.8 29 1.6 1.6 0 0 0 1.5 1.7c38.3-6 30.7-38.4 25.2-52.9a3.4 3.4 0 0 0-3.2-2.2 3.3 3.3 0 0 0-2.7 1.5 36.3 36.3 0 0 1-14 12c4-36-18.3-50.9-29-56.7a3.4 3.4 0 0 0-5 3.2c1 15-13 34.7-21.2 44.8a34.6 34.6 0 0 0-7.8 25c2.3 21 22.8 24.6 29.5 25.1z'/%3E%3C/svg%3E") no-repeat center;
  background-size: 32px;
}

.projects {
  width: 60px;
  height: 50px;
  display: inline-block;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 100 125'%3E%3Cpath fill='white' d='M12.6 43.5l11.6 4.9a67 67 0 0 0-3.1 10.1l-.5 2 16.7 16.7 2-.5a67 67 0 0 0 10.2-3l4.8 11.5a.8.8 0 0 0 1.2.3l7.3-7.3a12 12 0 0 0 3.5-9.1l-.3-4.7c13.5-10 27-27.3 30.8-57.8A5 5 0 0 0 91.2 1C60.8 4.7 43.3 18.4 33.4 31.8l-4.7-.3a12 12 0 0 0-9 3.5l-7.3 7.3a.8.8 0 0 0 .2 1.3zm46.6-17.7a9 9 0 1 1 0 12.8 9 9 0 0 1 0-12.8zM10.5 78.5a11.8 11.8 0 0 0-6-.5 1 1 0 0 1-1-.3 1 1 0 0 1-.2-1.2c2.1-4.6 7.8-13.8 18-6.4a.5.5 0 0 1 0 .8A11.1 11.1 0 0 0 17 80a.8.8 0 0 0 .8.8 11.1 11.1 0 0 0 9-4.2.5.5 0 0 1 .9 0c1.4 1.7 5.3 7.3 1 12.6a11.3 11.3 0 0 1-7.6 4C17 93.6 9.1 95 6 98.6a1 1 0 0 1-1.9-.4 17.3 17.3 0 0 1 6.3-19.7z'/%3E%3C/svg%3E") no-repeat center;
  background-size: 32px;
  margin: 7px 0 0 0;
}

.research {
  width: 60px;
  height: 50px;
  display: inline-block;
  background: url("data:image/svg+xml,%3Csvg width='900' height='1094' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M172 1029c-231-20-29-278 33-375 49-74 93-148 102-239 11-103 0-198 0-299 0-27-4-21 23-22h260c-4 127-25 295 22 414 25 61 79 119 98 179-624 0-573 304-538 342zM48 790c-71 113-79 279 86 298 105 15 224-5 332-5 174 0 270-2 290-5 156-25 174-150 107-270-61-108-184-257-208-366-25-117-37-264 14-376C701-4 578 0 538 1c-45 1-84 4-131 3-33-1-159-8-180 13-22 21 15 69 21 100 18 85 10 217 0 304-10 77-141 282-200 369z' fill='white' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center;
  background-size: 27px;
  margin: 7px 0 0 0;
}

.news {
  width: 60px;
  height: 50px;
  display: inline-block;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='white' d='M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2a7 7 0 0 0 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5a7 7 0 0 0 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z'/%3E%3Cpath fill='white' d='M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM89.4 30.1h-12V14.4a8 8 0 0 0-8.1-8.1H10.6a8 8 0 0 0-8.1 8.1v71.1a8 8 0 0 0 8.1 8.1h72.8a14 14 0 0 0 14.1-14.1V38.3c0-4.5-3.6-8.2-8.1-8.2zm-70.9-4.7c0-2.1 1.7-3.8 3.8-3.8H32c2.1 0 3.8 1.7 3.8 3.8v16.1c0 2.1-1.7 3.8-3.8 3.8h-9.7a3.8 3.8 0 0 1-3.8-3.8V25.4zm39.1 53.8H22.3a3.8 3.8 0 1 1 0-7.6h35.3c2.1 0 3.8 1.7 3.8 3.8 0 2.2-1.7 3.8-3.8 3.8zm0-16.9H22.3a3.8 3.8 0 1 1 0-7.6h35.3a3.8 3.8 0 1 1 0 7.6zm0-17H47a3.8 3.8 0 1 1 0-7.6h10.6a3.8 3.8 0 1 1 0 7.6zm0-17H47a3.8 3.8 0 1 1 0-7.6h10.6a3.8 3.8 0 1 1 0 7.6zm31.8 51.3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V38.3h11.9v41.3z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat center;
  background-size: 30px;
  margin: 20px 0 0 0;
}

.campaigns {
  width: 60px;
  height: 50px;
  display: inline-block;
  background: url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 13a6 6 0 0 1-2.8 5c-.7-1-1.2-2.8-1.2-5s.5-4 1.2-5a6 6 0 0 1 2.8 5zM10 32a4 4 0 0 1-4-3.3L4.7 21 6 21h2c.8 0 2.8.5 5 1.6l1 4.7a4 4 0 0 1-4 4.7zM6 7h2a20 20 0 0 0 8.7-3.3C18.3 1.4 20.5 0 23 0c5 0 9 5.8 9 13s-4 13-9 13c-2.5 0-4.7-1.4-6.3-3.7A20 20 0 0 0 8 19H6A6 6 0 0 1 6 7zm17 15c2.4 0 5-3.9 5-9 0-5.2-2.6-9-5-9s-5 3.8-5 9c0 5.1 2.6 9 5 9z' fill='white' fill-rule='nonzero'/%3E%3C/svg%3E") no-repeat center;
  background-size: 30px;
}

.active .box {
  .content {
    animation: scale .3s ease forwards;
  }
  .sidebar {
    animation: slide .3s ease forwards;
  }
  .news {
    animation: slide .8s ease forwards;
  }
  .campaigns {
    animation: slide 1s ease forwards;
  }
  .featured {
        animation: scale-easeInElastic 1.3s ease reverse;
  display: flex;
  }
  #ioh {
    animation: scale-easeInElastic 1.4s ease reverse .12s forwards;
  }
}

@keyframes scale-easeInElastic {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  4% {
    transform: scale(1);
  }

  8% {
    transform: scale(1);
  }

  14% {
    transform: scale(1);
  }

  18% {
    transform: scale(1);
  }

  26% {
    transform: scale(1.01);
  }

  28% {
    transform: scale(1.01);
  }

  40% {
    transform: scale(0.98);
  }

  42% {
    transform: scale(0.98);
  }

  56% {
    transform: scale(1.05);
  }

  58% {
    transform: scale(1.04);
  }

  72% {
    transform: scale(0.87);
  }

  86% {
    transform: scale(1.07);
  }

  100% {
    transform: scale(0);
    opacity: 1;
  }

}
@keyframes scale-easeInOutElastic {
  0% {
    transform: scale(1);
  }

  4% {
    transform: scale(1);
  }

  8% {
    transform: scale(1);
  }

  18% {
    transform: scale(1.01);
  }

  20% {
    transform: scale(1);
  }

  28% {
    transform: scale(0.98);
  }

  30% {
    transform: scale(0.98);
  }

  38% {
    transform: scale(1.09);
  }

  40% {
    transform: scale(1.12);
  }

  60% {
    transform: scale(-0.12);
  }

  62% {
    transform: scale(-0.09);
  }

  70% {
    transform: scale(0.02);
  }

  72% {
    transform: scale(0.02);
  }

  80% {
    transform: scale(0);
  }

  82% {
    transform: scale(-0.01);
  }

  90% {
    transform: scale(0);
  }

  92% {
    transform: scale(0);
  }

  100% {
    transform: scale(0);
  }

}

@keyframes slide {
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0px)
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7)
  }
  100% {
    transform: scale(1)
  }
}
/**
 * Visual style
 */
.logo {

  border-right: 1px solid rgba(255,255,255,0.28);
  }

.nav-item {
  cursor: pointer;
  padding: 16px 16px 14px; }

.nav-item:not(:last-child) {
  border-right: .5px solid rgba(255,255,255,0.2); }
  
  .bg-grey .nav-item { color: #fff; }


header,
nav {
  font-size: 0; }

.logo,
.nav-item {
  font-size: 16px; }

.title {
display: flex;
align-items: center;
width: 100%;
overflow: hidden;
    border-radius: 10px;
    white-space: normal;
    color: black;
    
    width: 90% !important;
    border: 1px solid #ddd;
    background: #efefef;
    margin: 10px auto 20px;
    h1 {
         font-size: 17px;
         margin: 0;
    }
    .date {
          border: 1px solid orangered;
align-self: flex-start;
      border-radius: 10px 0 0 10px;
      font-size: 15px;
      color: white !important;
      display: inline-block !important;
      width: auto !important;
      background: orangered no-repeat 11px 12px ;
      padding: 12px;
      margin-right: 15px;
      font-family: "Helvetica", sans-serif;
      background-size: 18px;
      font-weight: bold;
      text-align: left;
    }
  }

/**
 * Setup
 */
* {
  box-sizing: border-box; }

a { 
  color: #fff;
  text-decoration: none; }

ul, li { list-style: none; margin: 0; padding: 0; }


@media only screen and (max-width: 600px) {
    .featured {
      width: 85%;
      float: none;
    }
}

// Demo purposes only, proceed with caution on Windows!
.scroll::-webkit-scrollbar {
  display: none; }


</style>
