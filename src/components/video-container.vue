<template>
  <div>
    <div id="video-container">
      <!-- Thumbnail section, alonside the 'added to queue' overlay. -->
      <div class="thumbnail">
        <transition name="fade"> <!-- The transition tag is exclusive to vue, it is used to add animations when something inside of this tag shows up.
         In this case, the thumbnail overlay will showup if the data "isQueued" turns out to be true. -->
          <div
            v-if="isQueued"
            :class="{queueAddedPop: isQueued}"
          >
            <span class="mdi mdi-playlist-check"></span>
            <span>In queue</span>
          </div>
        </transition>

        <img src="../assets/img/Street-city-view.jpg" alt="thumbnail">
      </div>
      <!-- Tags section below the thumbnail. -->
      <ul class="tagsSection">
          <li
            v-for="(tag, index) in videoTags" :key="index"
          >
            <div class="tagTextContainer"><p>{{ tag.text }}</p></div>
          </li>
      </ul>
      <!-- Video title only. -->
      <p class="videoTitle">{{ videoTitle }}</p>
      <!-- Video info such as channel profile pic, name, views count, date posted, duration and the more options section. -->
      <div class="videoInfo">
          <img src="../assets/img/profile_pic_example.jpg" class="channelProfilePic" alt="channel"> 
          <p class="channelName">Harkaj</p>

          <div class="viewsCount">
            <span class="mdi mdi-eye"><span class="viewsText">305,567</span></span>
          </div>

          <div class="timePosted">
            <span class="mdi mdi-circle-small">3 months ago</span>
          </div>

          <div class="videoDuration">
            <p>19:54</p>
          </div>
          <!-- The beginning of the video more section. -->
          <div class="videoMore">
              <span
                @click="showChecked"
                :class="[isQueued ? 'mdi-playlist-check' : 'mdi-playlist-plus']"
                class="mdi"
              ></span>

              <span
                @click="showMorePanel"
                class="mdi mdi-dots-horizontal"
              >
              </span>
              <transition name="popup"> <!-- If you now know what this tag is for, well then you'll know that the
              more options popup will show up if "showMore" turns out to be true. -->
                <div
                  v-if="showMore"
                  :class="{optionsShowPopup: showMore}"
                >
                  <ul class="listOptions">
                      <li>
                        <span class="mdi mdi-close"><span class="textOption">Not Interested</span></span>
                      </li>
                      <li>
                        <span class="mdi mdi-flag"><span class="textOption">Report</span></span>
                      </li>
                      <li>
                        <span class="mdi mdi-plus-box-multiple"><span class="textOption">Add to list/set</span></span>
                      </li>
                      <li>
                        <span class="mdi mdi-clock"><span class="textOption">Add to watch later</span></span>
                      </li>
                      <li>
                        <span class="mdi mdi-share-variant"><span class="textOption">Share</span></span>
                      </li>
                  </ul>
                </div>
              </transition>

          </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoContainer',
  props: [
    'videoTags' // "videoTags" will connect to the "vidTags" data in the app.
  ],
  data() { // For now the title of the video is being made here, we can change it later though!
    return {
      videoTitle: `Harkaj - "I Hate YouTube, come to blank" (ft. Blank)`,
      isQueued: false, // if true that overlay will show on top of the thumbnail.
      showMore: false // if true that more options popup will show up.
    }
  },
  methods: {
    showChecked() { // function that turns the isQueued to true, once its clicked and false, if clicked again.
      if (this.isQueued == false) {
        this.isQueued = true
      } else {
        this.isQueued = false
      }
    },
    showMorePanel() { // function that turns the showMore to true, once its clicked and false, if clicked again.
      if (this.showMore == false) {
        this.showMore = true
      } else {
        this.showMore = false
      }
    }
  }
}
</script>