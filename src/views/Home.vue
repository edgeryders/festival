<template>
  <div class="home">
    <Nav />

    <div class="section fp-auto-height" id="hero">
       <Hero @changeMsg="setMessage" />
      </div>

     <div class="section" id="participants">
        <Participants />
      </div>

     <div class="section" id="events">
        <Events @changeMsg="setMessage" :data="events" />
      </div>

       <div class="section" id="process">
        <Contribute :data="conversations" />
      </div>

       <div class="section" id="press">
        <Press :data="press" />
      </div>

      <div class="section" id="mission">
        <About />
      </div>

       <div class="section" id="people">
        <People :data="stories" />
      </div>

       <div class="section" id="edgeryders">
        <Edgeryders />
      </div>


       <div class="section" id="projects">
        <Projects :data="categories" />
      </div>


       <div class="section" id="terms">
        <Terms />
      </div>

      <vue-form :data="formData" v-show="modal" :splash='true' @complete="complete" @close="closeModal()"></vue-form>

</div>
</template>

<script>


import Nav from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import Participants from "@/components/Participants.vue";
import Events from "@/components/Events.vue";
import Projects from "@/components/Projects.vue";
import Contribute from "@/components/Contribute.vue";
import Press from "@/components/Press.vue";
import About from "@/components/About.vue";
import People from "@/components/People.vue";
import Edgeryders from "@/components/Edgeryders.vue";
import Terms from "@/components/Terms.vue";
import Modal from "@/components/Modal.vue";

import VueForm from "@/components/Form/VueForm";
import data from "@/data/demo";

import axios from "axios";
import moment from "moment";

export default {
  name: 'home',
  data() {
    return {
    	stories: null,
    	events: null,
    	conversations: null,
    	categories: null,
    	modal: false,
    	formData: null,
    	ticket: data.ticket,
    	proposal: data.proposal,
    }
   },
  components: {
    Nav,
    Hero,
    Participants,
    Events,
    Projects,
    Contribute,
    Press,
    About,
    People,
    Edgeryders,
    Terms,
    Modal,
    VueForm
  },
  created () {
  	this.getData();
  	this.getCategories();
  },
  methods: {
	  	 setMessage(msg) {
	  	 	if (msg == 'ticket') {
	  	 		this.formData = data.ticket
	  	 	}
	  	 	if (msg == 'proposal') {
	  	 		this.formData = data.proposal
	  	 	}
          this.modal = true
        },
	  	closeModal() {
	  		this.modal = false
	  	},
	  	complete(data) {
      // Send to database here
      console.log("Form complete", data.map(d => d.question + ': ' + d.answer));
    },
	    getData() {
	        axios.get("https://edgeryders.herokuapp.com/festival")
	            .then(({ data }) => {
	                this.events = data.events;
	                this.conversations = data.conversations;
	                this.stories = data.stories;
	            })
	            .catch()
	    },
	    getCategories() {
	        
	        axios.get("https://api.particip.io/get-data?endpoint=https://edgeryders.eu/categories")
	            .then(({ data }) => {

					this.wellbeingCategory = data.category_list.categories.filter(
						function(e) {
							return (e.name == "Wellbeing in Europe");
						}
					);

					let categoryArray = data.category_list.categories.filter(
					  function(e) {
					    return (
					      e.name !== "Campfire" &&
					      e.name !== "Workspaces" &&
					      e.name !== "Knowledge Collection" &&
					      e.name !== "Documentation & Support"
					    );
					  }
					);

					function sortCats(catdata) {
						return catdata.sort((a, b) =>
						a.topics[0].last_posted_at < b.topics[0].last_posted_at ? 1 : -1
						);
					}

					this.categories = sortCats(categoryArray);

	            })
	            .catch()
	    }
		}
}
</script>
<style lang="scss">
.section {
	background: #efefef;
	width: 100%;
	width: 100vw;
	overflow: hidden;
	&#hero {
		position: relative;
		margin-top: 55px;
		padding-top: 0;
	}
	&#participants {
		position: relative;
		margin-top: 1px;
		background: #fff;
	}
	&#events {
		padding-top: 50px;
		background: #fafafa;
	}
	&#process {
		padding-top: 40px;
		padding-bottom: 60px;
		background: #efefef;
	}
	&#mission {
		padding-top: 40px;
		padding-bottom: 80px;
		background: #efefef;
	}
	&#press {
		background: #fff;
		padding: 0px 0 100px !important;
	}
	&#people {
		padding-top: 40px;
		padding-bottom: 60px;
		background: #fff;
	}
	&#edgeryders {
		padding-top: 50px;
		padding-bottom: 60px;
	}
	&#projects {
		background: #fafafa;
		padding: 0px 0 60px;
	}
}
</style>
