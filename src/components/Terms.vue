<template>
  <div class="w-full md:flex bg-black p-10 text-left">
    <div class="md:w-3/4 md:px-4 md:pr-20">
      <h1 class="text-white font-bold">TERMS OF PARTICIPATION & PRIVACY POLICY</h1>
      <p class="text-white mt-2">The Edgeryders online platform and activities are intended for people to cooperate within and across projects trying to build a better world. The word "better" has here a fairly broad range of meaning. These <a class="underline" href='https://edgeryders.eu/t/netiquette/45' target='_blank'>Community Guidelines</a> are here to help you understand what it means to be a member of Edgeryders. Don’t forget that your use of Edgeryders is subject to these Community Guidelines and our <a class="underline" href='https://edgeryders.eu/t/id/44' targert='_blank'>Terms of Service</a>.</p>
    </div>

    <div class="md:w-1/4 pt-4 md:p-6 md:px-10 border-gray-100 md:border-l">
      <h1 class="text-white font-bold">Contact Us</h1>
      <p class="text-white mt-2">
        <a class="underline" href='mailto:contact@edgeryders.eu' target="_blank">Email</a><br />
        <a class="underline" href='https://twitter.com/edgeryders' target="_blank">Twitter</a><br />
        <a class="underline" href='https://facebook.com/edgeryders' target="_blank">Facebook</a>

      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["data"],
  mounted: function() {}
};
</script>

<style type="text/css" lang="scss">
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
.social {
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-color: #ddd;
  margin-right: 1rem;
  background-position: center center !important;
  background-repeat: no-repeat !important;
 &:hover {
 background-color: rgba(0,0,0,0.14);
} 
}

.twitter {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%231DA1F2' d='M459 152l1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z'/%3E%3C/svg%3E");
  background-size: 40%;
}
.facebook {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%234267B2' d='M279 288l14-93h-89v-60c0-25 13-50 53-50h40V6s-37-6-72-6c-73 0-121 44-121 125v70H23v93h81v224h100V288z'/%3E%3C/svg%3E");
  background-size: 20%;
}
.email {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='rgba(0,0,0,0.7)' d='M502 191c4-3 10 0 10 5v204c0 27-21 48-48 48H48c-26 0-48-21-48-48V196c0-5 6-8 10-5l154 114c21 15 56 47 92 47s72-33 92-47l154-114zM256 320c23 0 57-29 73-41 133-97 143-105 174-129 6-5 9-12 9-19v-19c0-26-22-48-48-48H48C22 64 0 86 0 112v19c0 7 3 14 9 19 31 24 41 32 174 129 16 12 50 41 73 41z'/%3E%3C/svg%3E");
  background-size: 35%;
}
.arrow {
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='367.3' height='367.3'%3E%3Cpath fill='rgba(0,0,0,0.2)' d='M337.6 1A473.5 473.5 0 0 0 298.4 21c-11.6 6.1-25.7 12.3-35.5 21.4-5.5 5 0 15.3 7.4 12.9 0 0 .6 0 .6-.6 1.8 1.2 3 2.4 4.9 4.3 0 .6.6 1.8.6 2.4.6 1.2 1.8 2.5 3 3.7-17.7 33-34.2 66-55 96.7a166.4 166.4 0 0 1-20.8 25.7c-19.6-31.2-51.4-67.3-90-60.6-50.8 9.2-23.3 63.7 3 82 31.3 22.7 58.2 21.4 85.1 0 12.3 20.8 20.8 44 19.6 66.7-1.8 54.5-50.8 63.7-91.8 49.6 6.1-16 8-34.3 4.3-50.2-6.1-28.8-50.2-54.5-75.9-34.3-25 20.2 22 71.6 37.3 82 4.3 3.1 9.2 6.2 14.1 8.6-.6.6-.6 1.2-1.2 1.8-28.2 44.1-65.5 6.2-82.6-25-2.5-5-9.2-.7-7.4 4.2C32.2 345 61 382.8 99.5 360.8a63.5 63.5 0 0 0 22.7-23.3c33.6 13.5 72.8 13.5 97.3-17.1 29.4-36.7 11-84.5-8.6-120l1.2-1.2c35-33.6 56.3-81.4 78.4-124.2 4.3 3 9.1 6.1 13.4 9.2 3 1.8 7.4 1.2 9.8-1.3a150.2 150.2 0 0 0 35.5-73.4c1.9-6.7-4.9-11.6-11.6-8.6zM178.5 207.7c-23.3 13.5-46.5-3-63.7-19-22.6-20.8-16.5-54.5 18.4-47.7 17.7 3.7 31.8 19.6 43.4 32.4 6.2 6.7 12.3 14.7 17.8 23.3-5 4.3-10.4 8-16 11zM116 319.2s-.6 0 0 0A99.5 99.5 0 0 1 67.7 261c-6.1-20.8 27-10.4 35.5-6 23.3 12.8 21.4 42.1 12.8 64.2zM306.4 67c-.6 0-.6-.6-1.2-.6 0-1.8-1.3-3.7-3.7-4.9-4.3-1.8-8.6-4.3-12.9-6.7-1.8-1.2-5.5-5-5.5-3.7 0-.6-.6-1.2-1.2-1.2 6.7-3.7 13.5-8.6 20.2-12.2 8.6-5 17.7-9.8 27-14.7a131.3 131.3 0 0 1-22.7 44z'/%3E%3C/svg%3E%0A");
  background-size: cover;
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 0;
  left: -30px;
}
.er_photo {
  transform: rotate(-1.2deg);
  .photo {
  background: url('../assets/edgeryders_group.jpg') no-repeat center 15px #f7f8f8;
  background-size: 95%;
  height: 290px;
  padding-bottom: 80px;
  position: relative;
  border-radius: 10px;
  width: 90%;
  left: 5%;
  margin-top: 2%;
  &:before, &:after {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 50%;
        top: 80%;
        max-width: 300px;
        background: #777;
        box-shadow: 0 15px 10px #777;
        transform: rotate(-3deg);
      }
      &:after {
        transform: rotate(3deg);
        right: 10px;
        left: auto;
      }
      h3 {
        position: absolute;
        bottom: 6%;
        left: 0%;
        width: 100%;
        text-align: center;
        color: orangered;
        font-size: 1.1em;
        font-family: "Permanent Marker", cursive;
        }
}
}
.icon {
  background-color: #00acc1 !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: 50%;
  width: 25%;
  height: 6.5rem;
  margin: 10px;
  &.automation {
    background-image: url("data:image/svg+xml,%3Csvg width='70' height='77' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath fill='white' d='M11.5 26.3a11.4 11.4 0 0 0-3 22.4l9 20.1a17.8 17.8 0 0 0-3.7 4.4c-.4.8-.4 1.8 0 2.5.5.8 1.3 1.3 2.2 1.3h26.5a2.5 2.5 0 0 0 2.2-3.8c-2.8-4.8-7.6-8-13.1-8.7l-11.8-19a11.4 11.4 0 0 0 3-9.5l18.6-17.6a9 9 0 0 0 1.9.3 9 9 0 0 0 2.2-.3l9.2 7.8c0 2.2 1 4.3 2.6 5.7v5.8c0 1 .6 2 1.5 2.3l1.1 4a2.5 2.5 0 0 0 5 0l1-4c1-.4 1.6-1.3 1.6-2.3v-5.8A7.6 7.6 0 0 0 61 18.8l-9-7.6.2-1.4a8.9 8.9 0 0 0-17.8 0v1L14.2 26.7l-2.7-.3zm30.5 48H15.9A15 15 0 0 1 30.3 67c4.9.3 9.2 3 11.7 7.2zM27.5 64h-.4l-1 .1h-.4l-1.3.3h-.2l-1 .4-.5.1-.8.4-.5.1-.9.5-.3.1-1 .7-8-17.7H13l1.4-.4h.2L16 48h.1l1.3-.7h.1L28 64h-.5zm-10-19.9a9 9 0 0 1-7 2.1h-.6A8.8 8.8 0 1 1 14.3 29a8.8 8.8 0 0 1 3.2 15.1zm46-11.4l.9-.3V37h-4.7v-4.6l1 .2h.1a6 6 0 0 0 2.4 0h.2zm-2.9-12.4v10.2h-.3l-1.4-.8c-1.2-1-2-2.6-2-4.3V25l.2-.8a5.1 5.1 0 0 1 3.5-3.8zm2 22.3l-1-2.8h1.9l-1 2.8zm4.6-17.2c0 1.7-.7 3.3-2 4.3-.5.4-1.1.7-1.7.8V20.4c2.2.6 3.7 2.7 3.7 5.1zm-8.4-5.7l-.7.5-.2.2c-.6.5-1.1 1-1.6 1.7l-.5 1-7.3-6 1-.6.7-.8.2-.2.6-.6.2-.4.4-.6 7.1 5.8h.1zm-15.9-17a6.5 6.5 0 0 1 6.1 8.9 6.5 6.5 0 0 1-12.6-2.4c0-3.6 3-6.5 6.5-6.5zM34.7 13l.1.2.4.7.2.3.7.9.1.1 1 .9.2.2.8.5-16.5 15.7-.3-.7v-.1l-.7-1.2-.2-.2-.8-1-1-.9-.1-.2-1-.7-.3-.1-.5-.4 18-14z'/%3E%3Cpath fill='white' d='M54.3 54.6l1.2.1c2.4 0 4.2-1.6 4.2-3.7 0-2-1.8-3.7-4.2-3.7-2.3 0-4.2 1.7-4.2 3.7l.1.8a4 4 0 0 0 2.9 2.8zm1.2-5.4c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.3-1.4 1.3h-.4-.2l-.3-.3-.1-.2-.4-.5v-.3c0-.8.7-1.4 1.4-1.4z'/%3E%3C/g%3E%3C/svg%3E");
}
&.activism {
  background-image: url("data:image/svg+xml, %3Csvg width='72' height='76' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M67.1 17.7C62 7.3 52.8.4 44.4.4c-2.2 0-4.3.5-6.3 1.4-4 2-6.6 5.8-7.8 10.6A166.5 166.5 0 0 1 8 30.9a15.1 15.1 0 0 0-5.5 19.3c2.5 5 7.7 8 13.2 8 1.8 0 3.6-.3 5.4-.9h.2L28 71a7.7 7.7 0 0 0 10.3 3.4l1-.5c3.8-1.9 5.4-6.5 3.5-10.4l-5.5-10.9c3.8-.9 7.8-1.7 11.7-2.2A18 18 0 0 0 56 52c2.2 0 4.4-.5 6.3-1.5 4.6-2.3 7.6-7 8.5-13.4.8-6.1-.5-13-3.7-19.4zM39.5 65.2c1.1 2.2.2 5-2 6.2l-1 .5a4.5 4.5 0 0 1-6-2L24 56.1c2.3-.7 5.8-1.8 9.8-2.8l5.7 11.8zM19.8 53.6c-5.9 2-12-.2-14.6-5.5a11.8 11.8 0 0 1 4.4-15c.4-.3 10.6-7.3 19.5-15.7-.2 5.2 1 11.1 3.8 16.8A34.9 34.9 0 0 0 44 47.4c-12 2-23.7 6-24.2 6.2zM44 29.3c1.2 2.3 3 4 4.9 5l-8.3 6a34.7 34.7 0 0 1-7.7-15l10-3c-.5 2.1-.1 4.6 1 7zm3.3-8.7a2 2 0 0 1 1-.2c1.6 0 3.5 1.6 4.7 3.9.7 1.5 1 3.1.9 4.5-.1.7-.4 1.9-1.4 2.4a2 2 0 0 1-1 .2c-1.6 0-3.6-1.7-4.7-4-1.4-2.8-1.1-6 .5-6.8zm20.4 15.7c-.7 5.2-3 9.1-6.7 11-1.5.7-3.1 1-4.8 1-4.4 0-9-2.2-12.9-6L54.7 34a6.1 6.1 0 0 0 3-4.7c.2-2-.2-4.3-1.3-6.3-1.7-3.5-4.7-5.7-7.6-5.7-.8 0-1.5.2-2.2.5l-13.4 4c-.9-7.8 1.5-14.6 6.7-17.2 1.5-.8 3.1-1.1 4.9-1.1 7.2 0 15 6.2 19.7 15.4a31 31 0 0 1 3.3 17.5z' stroke='%2300acc1' stroke-width='.3' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E");
}
&.healthcare {
  background-image: url("data:image/svg+xml, %3Csvg width='72' height='82' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='nonzero'%3E%3Cpath d='M58.1 41a6 6 0 0 1 6 6c0 1.1.8 2 2 2 1 0 1.9-.9 1.9-2 0-20.2-14-36.7-31.5-37.9V3a2 2 0 0 0-2-2c-1 0-2 .9-2 2v6.1C15 10.3 1 26.8 1 47a2 2 0 0 0 4 0 6 6 0 0 1 5.9-6 6 6 0 0 1 5.9 6c0 1.1.8 2 2 2 1 0 2-.9 2-2a6 6 0 0 1 5.8-6 6 6 0 0 1 6 6v24a6 6 0 0 1-6 6 6 6 0 0 1-5.9-6 2 2 0 0 0-2-2c-1 0-2 .9-2 2a10 10 0 0 0 10 10 10 10 0 0 0 9.8-10V47a6 6 0 0 1 5.9-6 6 6 0 0 1 5.9 6 2 2 0 0 0 4 0 6 6 0 0 1 5.8-6zm-7.8 0a9.8 9.8 0 0 0-15.8 0 9.8 9.8 0 0 0-15.8 0A9.8 9.8 0 0 0 6 38.4C9.2 23.8 20.8 13 34.5 13c13.7 0 25.3 10.8 28.6 25.4A9.7 9.7 0 0 0 50.3 41z' stroke='%2300acc1' stroke-width='.4'/%3E%3Cpath d='M70 65h-6v-6a2 2 0 0 0-4 0v6h-6a2 2 0 0 0 0 4h6v6a2 2 0 0 0 4 0v-6h6a2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
&.ai {
  background-image: url("data:image/svg+xml, %3Csvg width='66' height='77' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='nonzero'%3E%3Cpath d='M64.2 38.1l-6.6-10c-.2-.4-.3-.7-.3-1.2A28 28 0 0 0 29.3 1 28.4 28.4 0 0 0 1 29.5c0 9 4.2 18.1 11.2 24.1.2.2.5.5.5.9v15c0 2.4 1.7 4.3 4 4.5l22.4 2h.4c1 0 2.2-.4 3-1.2 1-.9 1.5-2 1.5-3.3v-9.6h6.9c3.6 0 6.5-3 6.5-6.6V46H60a5 5 0 0 0 4.4-2.6 5 5 0 0 0-.1-5.3zm-3.7 3.2c0 .2-.2.4-.6.4H56a3 3 0 0 0-3 3v10.7c0 1.2-1 2.2-2.2 2.2h-7.9a3.5 3.5 0 0 0-3.4 3.5v10.6l-22.5-2v-15c0-1.6-.7-3.2-2-4.3-6-5.1-9.6-13.1-9.6-20.9a24 24 0 0 1 23.8-24c12.4 0 22.6 9.3 23.7 21.8 0 1 .4 2 1 3l6.6 10.2c.2.3 0 .6 0 .8z' stroke='%2300acc1'/%3E%3Cpath d='M32 15.9a3 3 0 0 0-3-2.9 3 3 0 0 0-3 2.9c0 1 .6 2 1.6 2.5v24C26.6 43 26 44 26 45a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1-.6-2-1.6-2.5v-24C31.4 18 32 17 32 16zM21 20.4c.8-.4 1.4-1.4 1.4-2.5 0-1.6-1.3-2.9-2.8-2.9a3 3 0 0 0-2.8 3c0 1 .6 2 1.5 2.4v5.2h4v3.6h-6c-.4-1-1.4-1.6-2.4-1.6a2.9 2.9 0 1 0 0 5.8c1 0 2-.6 2.5-1.6h6v3.6h-4.1v5.2c-1 .4-1.5 1.4-1.5 2.5 0 1.6 1.2 2.9 2.8 2.9 1.6 0 2.8-1.3 2.8-3 0-1-.6-2-1.5-2.4V38H25V23h-4v-2.6zM46.1 27.7c-1 0-2 .6-2.5 1.5h-6v-3.5h4.1v-5.2c1-.5 1.5-1.5 1.5-2.6 0-1.6-1.2-2.9-2.8-2.9a2.8 2.8 0 0 0-2.8 3c0 1 .6 2 1.5 2.5V23H35V38h4.2v2.6c-1 .5-1.6 1.5-1.6 2.6 0 1.6 1.3 2.8 2.8 2.8 1.6 0 3-1.3 3-2.8 0-1.1-.7-2.1-1.6-2.6v-5.2h-4.2v-3.6h6c.5 1 1.5 1.6 2.5 1.6 1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.8-2.9-2.8z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
&.elections {
  background-image: url("data:image/svg+xml, %3Csvg width='78' height='74' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M70.7 52.7c-.3-.7-.8-1-1.5-1h-8.7V38.7c0-2.5-2-4.6-4.7-4.6h-1.1v-3.9c0-1.7-.7-3.4-1.9-4.6L30.3 2.5a7 7 0 0 0-9-1L10.5 8.7c-2 1.3-3 3.6-2.7 6L10 30.6c0 2.2.9 4.4 2.4 6L16 41v10.6H8.8c-.7 0-1.3.5-1.5 1L1.1 71.5a1.5 1.5 0 0 0 1.4 2h73c.4 0 1-.3 1.2-.7.3-.4.4-1 .2-1.4l-6.2-18.6zM13.2 30.3v-.2l-2.2-16a3 3 0 0 1 1.4-3l10.9-7a4 4 0 0 1 5 .5l22.7 23c.6.7 1 1.6 1 2.6V34H30.8l-1.4-2.8c-.4-.8-1.3-1-2.1-.7-.8.4-1 1.3-.7 2L35.4 50c.7 1.4.5 3-.6 4.2a3.9 3.9 0 0 1-4.2 1l-.3-.1c-.8-.3-1.5-.9-2-1.6l-5.8-9.9a7 7 0 0 0-.7-1l-7-8a6.4 6.4 0 0 1-1.6-4.2zm6 13.6c0 .2.2.3.3.5l5.8 10.1a7 7 0 0 0 3.4 3l.3.1c.8.3 1.7.5 2.5.5 2.4 0 4.6-1.3 5.9-3.3 1.2-2.1 1.3-4.7.2-6.9L32 36.4h23.6c.8 0 1.5.7 1.5 1.5v24.5H19V43.7l.1.2zM4 70.4l5.2-16h6.1v8.4h-3c-1 0-1.6.8-1.6 1.6 0 1 .7 1.6 1.6 1.6H63c.8 0 1.5-.7 1.5-1.6 0-.8-.7-1.6-1.5-1.6h-3v-8.4h7.7l5.2 16H4z' stroke='%2300acc1' stroke-width='.4' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E%0A");
}
&.network {
  background-image: url("data:image/svg+xml, %3Csvg width='76' height='76' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M38 1.4c-5 0-9 4-9 8.9a9 9 0 0 0 6.5 8.6v10.3c-2.4.5-4.6 1.7-6.3 3.4l-10.7-8c.4-.9.6-1.9.6-3a9 9 0 1 0-18 0 9 9 0 0 0 14.5 7l11 8a11.9 11.9 0 0 0 1.8 12.1l-9 9a9 9 0 0 0-13.5 7.7 9 9 0 1 0 18 0c.1-1.5-.3-3-1-4.3l9.3-9.2a12.3 12.3 0 0 0 11.6 0L53 61a8.7 8.7 0 0 0-1.1 4.3 9 9 0 1 0 18 0 9 9 0 0 0-13.4-7.7l-9-9a12 12 0 0 0 1.8-12l11-8a9 9 0 0 0 14.6-7 9 9 0 1 0-18 0c-.1 1 .1 2 .5 3l-10.8 7.9a12.4 12.4 0 0 0-6.2-3.4V18.9a9 9 0 0 0 6.5-8.6c0-5-4-9-9-9zm0 4.8a4 4 0 1 1 0 8.1 4 4 0 1 1 0-8zM10 17.6a4 4 0 1 1 0 8.1 4 4 0 1 1 0-8.1zm56 0a4 4 0 1 1 0 8.1 4 4 0 1 1 0-8.1zM38 33.8a7.3 7.3 0 1 1 0 14.6 7.3 7.3 0 1 1 0-14.6zM15 61.4a4 4 0 1 1 0 8.1 4 4 0 1 1 0-8.1zm46 0a4 4 0 1 1 0 8.1 4 4 0 1 1 0-8.1z' fill='%23fff' fill-rule='nonzero' stroke='%2300acc1' stroke-width='1.9'/%3E%3C/svg%3E%0A");
}
&.environment {
  background-image: url("data:image/svg+xml, %3Csvg width='77' height='74' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='nonzero' stroke='%2300acc1'%3E%3Cpath d='M75.8 40c-.8-4-4.2-6.4-7.8-5.7l-13.4 3a5.8 5.8 0 0 0-4.5-2.8l-20-1.5c-2.7-.2-5.5.7-7.8 2.6L11 44.7 1.6 55c-.8.9-.8 2.2 0 3.1l13 14.3c.3.4.8.6 1.4.6.5 0 1-.2 1.4-.6l8.2-9 13.9 1.9c4.6.6 9.4-.6 13.4-3.4l20-14.1a7.6 7.6 0 0 0 3-7.9zM16 67.6L6 56.5l6-6.7L22.1 61l-6 6.7zM70.7 44l-20 14.1A15 15 0 0 1 40 60.8L25.8 59 15 46.9l9.6-7.9a7.1 7.1 0 0 1 5.2-1.6l20 1.5c1 0 1.7 1 1.8 2 0 1-.5 2-1.5 2.2l-4.9 1.3c-1.9.5-3.8.7-5.8.6l-5.7-.3c-1.1 0-2 .9-2.1 2.1-.1 1.2.8 2.3 1.9 2.3l5.6.3c2.4.2 4.7 0 7-.7l4.9-1.2c2.6-.6 4.4-3 4.6-5.8l13-3c1.5-.3 2.9.8 3.2 2.4.3 1-.1 2.3-1.1 3z' stroke-width='1.3'/%3E%3Cpath d='M25 26.7c.4 0 .7 0 1.1-.3 2.6-1.8 5.5-3.3 8.3-4.5C40 25.2 45.3 27 50 27c2.6 0 5.1-.5 7.4-1.5C68.2 20.9 71.8 7.5 72 6.9c.2-.7 0-1.6-.6-2.2a2 2 0 0 0-2.2-.3c-3 1.3-6.5 0-10.3-1.3-8-2.8-17.9-6.3-26 14.7-3 1.4-6 3-8.9 5-1 .6-1.2 1.8-.6 2.9.4.7 1 1 1.7 1zM57.5 7.2c3 1 6.1 2.2 9.3 2-1.7 3.9-5 9.8-11 12.3-4.7 2-10.3 1.5-16.6-1.6a74.4 74.4 0 0 1 12.5-3.5c1-.2 1.8-1.2 1.6-2.4a2 2 0 0 0-2.3-1.8c-.4.1-6 1-13 3.6C44.2 2.5 50.5 4.7 57.5 7.2z'/%3E%3C/g%3E%3C/svg%3E%0A");
}
&.nomad {
  background-image: url("data:image/svg+xml, %3Csvg width='77' height='73' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='nonzero' stroke='%2300acc1'%3E%3Cpath d='M75.1 2.8l-.3-.4-.3-.3A2 2 0 0 0 74 2c-3.7-2.2-10.7-.2-15.6 4.4l-7 6.7-32.1-2h-.2c-2.6 0-4.6 1.4-5.1 3.6-.5 2 .7 5.2 5.4 7.2l15.3 7.3c-2.5 2.8-7.2 8.2-9.5 11.9l-9 1c-1 0-1.8 1-1.7 2l.6 4.7c0 .8.8 1.5 1.6 1.6l6.5.9.9 6c.1 1 .8 1.6 1.7 1.7l5 .5c.5 0 1-.1 1.4-.4.4-.3.6-.8.7-1.2l1-8.5c3.8-2.3 9.5-6.8 12.4-9.1l7.7 14.5c1.9 4 4.6 5.3 6.7 5.3h1c2.2-.5 3.6-2.4 3.7-5V55l-2.2-30.6 7.1-6.7c4.8-4.6 7-11.2 4.7-14.8zM60 22.3c-.4.4-.6 1-.6 1.4L61.6 55c0 .6-.2 1.2-.6 1.3-.7.1-2.2-.6-3.4-3.1l-8.8-16.8a2 2 0 0 0-1.7-1 2 2 0 0 0-1.3.4c-.1.1-9.9 8.2-14.6 10.7-.5.3-.9.8-1 1.4l-.8 7.6-1.6-.2-.8-5.9c-.1-.4-.4-.8-.7-1a2 2 0 0 0-1.2-.7l-6.2-.9-.2-1.4 8-.9a2 2 0 0 0 1.5-.9c2.6-4.5 11.1-13.8 11.2-13.8.4-.5.6-1 .4-1.6 0-.6-.4-1-1-1.3l-17.6-8.4c-2.7-1.1-3.4-2.6-3.3-3.2 0-.4.7-.6 1.3-.6l32.9 2a2 2 0 0 0 1.5-.4l7.7-7.4c3.9-3.7 8.7-4.8 10.6-4 .8 1.8-.4 6.4-4.2 10.1L60 22.3z'/%3E%3Cpath d='M18.4 33c.8-.6.8-1.8 0-2.5a2 2 0 0 0-2.7 0L1.6 44c-.8.7-.8 1.9 0 2.6a2 2 0 0 0 2.7 0L18.4 33zM40.7 56.6L28.6 68.7a1.9 1.9 0 1 0 2.7 2.7l12.1-12.1a1.9 1.9 0 1 0-2.7-2.7zM17.6 54.5l-13 12.3c-.8.8-.8 2 0 2.7.4.3.9.5 1.4.5.5 0 1-.2 1.4-.5l13-12.3c.8-.7.8-2 0-2.7a2 2 0 0 0-2.8 0z'/%3E%3C/g%3E%3C/svg%3E%0A");
}

}


.speech-bubble {
  position: relative;
  background: #fff;
  border-radius: 0.4em;
}

.speech-bubble:after {
  content: "";
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
