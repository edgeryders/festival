export default {
  ticket: {
    callToAction: "<h1>So, you want to join the Edgeryders Festival in November?</h1> <p class='highlight'>Great! Your skills and knowledge are valuable.</p> <p>Participation does not cost money. You secure your ticket by filling out this form and following the instructions for some small and easy tasks that will be sent to you by email afterwards.</p>",
    launchButton: "Continue",
    formId: 'registration',
    title: 'Festival Ticket',
    questions: [
    {
        question: "What is your email address so we can contact you?",
        small: "Don't worry, we're not going to spam you.",
        type: 'email',
        id: 'email'
      },
      {
        question: "Your name or alias so we know what to call you?",
        type: 'text',
        minLength: 2,
        id: 'name'
      },
      {
        question: "What languages do you speak?",
        type: 'text',
        minLength: 3,
        id: 'languages'
      },
      {
        question: "The name of the city you live/are based in?",
        type: 'text',
        minLength: 3,
        id: 'city'
      },
      {
        question: "All Edgeryders events are co-created in order to ensure that they are rewarding, high quality experience tailored around each participant’s interests. Perhaps you're planning a demo, a seminar or a workshop that you want to plug into one of the planned events? Or maybe you can help with doing something during the festival like helping take notes during a session. Tell us a little bit about yourself and we’ll help you to find out how you can best benefit from, and contribute to, your participation in the Edgeryders Festival.",
        type: 'block',
        minLength: 3,
        id: 'bio'
      },
      {
        id: 'thank-you',
        question: "That's it! Click submit and keep a lookout for festival events happening in our locations or host one yourself! There are also events happening in Brussels, Warsaw, Stockholm and Berlin where you participate.",
        type: 'submit',
      },
      ]
    },
  proposal: {
    callToAction: '<p>Are you great with graphics, a good photographer or an amazing cook? Maybe you would like to give a talk or lead a discussion?</p><p>To realize great events where people can make meaningful connections and developments, we need all kinds of contributions!</p><p><b>Either way, this is where you get started. If any of the questions in this form are not relevant to what you want to do, just skip them.</b></p>',
    launchButton: "Start",
    formId: 'proposals',
    title: 'Festival Proposal',
    questions: [
    {
        question: "What is your email address so we can contact you?",
        small: "Don't worry, we're not going to spam you.",
        type: 'email',
        id: 'email'
      },
      {
        question: "What is your name so we know how to call you?",
        type: 'text',
        minLength: 2,
        id: 'name'
      },
      {
        question: "Which languages do you speak?",
        type: 'text',
        minLength: 3,
        id: 'languages'
      },
      {
        question: "Which city do you live, so we know where you can get involved?",
        type: 'text',
        minLength: 3,
        id: 'city'
      },
      {
        question: "Tell us a little bit about yourself and we’ll help you to find out how you could best contribute with your skillset and schedule.",
        type: 'block',
        minLength: 3,
        id: 'bio'
      },
      {
        id: 'thank-you',
        question: "That's it! Click submit and keep a lookout for festival events happening in our locations or host one yourself! There are also events happening in Brussels, Warsaw, Stockholm and Berlin where you participate.",
        type: 'submit',
      },
      ]
  }
};
