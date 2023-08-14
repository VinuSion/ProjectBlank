<template>
  <div class="app">
    <div class="defaultColor"> <!-- This div container is so that we can apply color themes onto the navbar. -->
        <MainNavBar
        :navigationLinks="navLinks"
        :imagePath="require('./assets/img/hamburger.png')"
        ></MainNavBar> <!-- Binds the "navigationLinks" prop to the "navLinks" data in the app and then the image for the logo. -->
        <router-view/> 
    </div>
    
    <ToggleSwitch v-model="checkbox"></ToggleSwitch>

    <br>
    <br>

    <StyledButton
      class="btnDefault btnDefaultLength" 
      :onClick="alertClick"
    >
    Test
    </StyledButton> <!-- Pass in any text between the tags to customize it. -->

    <br>
    <br>

    <div class="vidDefault"> <!-- This div is so that we can apply color themes onto the video container. -->
      <VideoContainer
        :videoTags="vidTags"
    ></VideoContainer> <!-- Binds the "videoTags" prop from (video-container.vue) to the "vidTags" data in the app. --> 
    </div>
  </div>
</template>

<script>
import MainNavBar from './layout/MainNavBar.vue'
import ToggleSwitch from './components/toggle-switch.vue'
import StyledButton from './components/styled-button.vue'
import VideoContainer from './components/video-container.vue'

export default {
  components: {
    MainNavBar,
    ToggleSwitch,
    StyledButton,
    VideoContainer
  },
  data() {
    return {
      checkbox: false,
      navLinks: [ // The data "navLinks" will contain an array of objects, each one for a Navbar Link section with its own title, path and icon.
      {
        text: 'HOME', // Text that will appear on the Navbar itself.
        path: '/', // The path to locate to.
        icon: 'mdi mdi-home' // his is specific to materialdesignicons.com where in the data will bind/show the icon on the navbar because of its class name.
      },
      {
        text: 'VIDEOS',
        path: '/videos',
        icon: 'mdi mdi-youtube'
      },
      {
        text: 'HYPE',
        path: '/hype',
        icon: 'mdi mdi-flash-circle mdi-rotate-45'
      } // Add the rest of the routes if you'd like, just remove the comments here.
      // {
      //   text: 'DASHBOARD',
      //   path: '/dashboard',
      //   icon: 'mdi mdi-view-dashboard'
      // },
      // {
      //   text: 'MODERATION',
      //   path: '/moderation',
      //   icon: 'mdi mdi-pencil-circle-outline'
      // },
      // {
      //   text: 'MORE',
      //   path: '/more',
      //   icon: 'mdi mdi-apps-box'
      // }
    ],

    vidTags: [ // For now, these are dummy-data binds for tags, but later ill make it so that all data about a video is displayed somewhere else...
      {
        text: 'Parody'
      },
      {
        text: 'Shitpost'
      },
      {
        text: 'Music'
      },
      {
        text: 'DissTrack'
      }
    ]
    }
  },
  methods: {
    alertClick() { // Example method to demonstrate how the parent is sending props to the button component.
      alert('Button clicked')
    }
  }
}
</script>

<style>
/* This is so the icons can be imported from: "https://materialdesignicons.com/" */
@import "https://cdn.materialdesignicons.com/4.7.95/css/materialdesignicons.min.css";
</style>