<template>
  <div class="mb-3">
    <div>
      <div class="thumbnail" :style="thumbStyle"></div>
      <div>{{ project.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioItem",
  data: () => ({
    modal: false,
    message: ""
  }),
  props: {
    'project': {
      type: Object,
      default: function() {
        return {
          name: "VueJS Firebase Shopping Cart",
          thumbnail: "https://www.upwork.com/att/download/portfolio/persons/uid/618029776590065664/profile/projects/files/998549258151673856"
        }
      }
    }
  },
  computed: {
    thumbStyle() {
      return {
        backgroundImage: `url(${this.project.thumbnail})`
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

.thumbnail {
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 240px;
}

.portfolio-wrapper {
  padding: 10px;
}

</style>
