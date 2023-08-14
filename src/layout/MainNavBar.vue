<template>
    <nav id="navbar">
      <img class="settings" src="../assets/img/settings.png" alt="Settings"> <!-- This is so the settings icon can show up. -->
      <ul ref="nav"> <!-- Gives a reference for memory to the "<nav>" tag so that it can add an "active" class when the logo is clicked on. -->
        <div class="image-logo" @click="toggleNav"> <!-- Attaches an event to toggle a function so that the "sidebar responsive version" of the navbar can show up. -->
          <img :src="imagePath" alt="logo" height="40px" width="40px" /> <!-- The src="imagePath" attribute is binded to the "required()" path so the logo shows up. -->
        </div>
        <li
          v-for="(link, index) in navigationLinks" :key="index"
        > <!-- The v-for gets the index in the "navLinks" data back in the app, so that the new variable "link" can iterate through all of the navigation 
        links of the navbar. It also gives it a key to identify each link it iterates through with its index. -->
          <router-link
            :to="link.path"
          > <!-- For every <li> tag, in which the "v-for" iterates, it will generate a <router-link> specific to said path and the also
            the text, in which all of this is back at the data of the app. -->
            {{ link.text }}
            <i :class="link.icon"></i> <!-- This is specific to materialdesignicons.com where in the app, theres data that will bind a specific class
            for said icon name, for example: "mdi-home" with "mdi" before any of these names. -->
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
  props: [
    'navigationLinks', // "navigationLinks" will connect to the "navLinks" data in the app.
    'imagePath' // "imagePath" will connect to the "required()" image path to bind it in the app.
  ],
  methods: {
    toggleNav () {
      const nav = this.$refs.nav.classList // Gets the <nav> tag reference so that it can store it in the variable "nav".
      nav.contains('active') ? nav.remove('active') : nav.add('active') // IF nav contains the class "active", remove said class. ELSE add said class.
    }
  }
}
</script>
