<template>
  <div class="home">
    <Nav />

    <div class="section fp-auto-height" id="hero">
       <Hero @changeMsg="setMessage" @setCity="setCity" />
      </div>
      
     <div class="section" id="participants">
        <Participants :data="participants" />
      </div>

     <div class="section" id="events">
        <Events @changeMsg="setMessage" :data="events" :search="city" />
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
    	participants: null,
    	categories: null,
    	modal: false,
    	formData: null,
    	ticket: data.ticket,
    	proposal: data.proposal,
    	form: null,
    	city: '',
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
        setCity(value){
        	this.city = value;

        	var VueScrollTo = require('vue-scrollto');


        	VueScrollTo.scrollTo('#events', 700, { easing: 'ease-out' } );
        },
	  	closeModal() {
	  		this.modal = false
	  	},
	  	complete(formData) {
      // Send to database here
      this.form = formData;

       	const exampledata = {
        "records": [
          {
            "fields": {
              "Name": formData.data[1].answer,
              "Email": formData.data[0].answer,
              "Languages": formData.data[2].answer,
              "City": formData.data[3].answer,
              "Biography": formData.data[4].answer,
            }
          }
        ]
      };

  let airtable = 'https://api.airtable.com/v0/appSsObHW2QODf3jA/' + formData.title;

  let axiosConfig = {
    headers: {
        'Authorization': 'Bearer keyocggSHfh6E9gSg',
        'Content-Type': 'application/json'
    }
  };
axios.post(airtable, exampledata, axiosConfig)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
    });


    },
	    getData() {
	        axios.get("https://edgeryders.herokuapp.com/festival")
	            .then(({ data }) => {
	            	this.participants = data.participants;
	                this.events = data.events;
	                this.conversations = data.conversations;
	                this.stories = data.stories;
	                this.categories = data.categories;
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
		padding-bottom: 20px;
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

@media (max-width: 640px) { 
.section {
	&#press {
		background: #efefef;
		padding: 0px !important;
	}
	&#process {
		padding-bottom: 20px;
	}
	&#mission {
		padding-bottom: 0px;
	}
	&#people {
		padding-top: 0px;
		padding-bottom: 0px;
	}
	&#edgeryders {
		padding-top: 40px;
		padding-bottom: 60px;
	}
	}
}
</style>
