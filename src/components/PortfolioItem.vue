<template>
  <div class="mb-4" @click="showDetail">
    <div>
      <g-image src="~/assets/images/projects/waach_thumb.png" fit="cover" v-if="project.code === 'waach'"/>
      <g-image src="~/assets/images/projects/mouse_miner_thumb.png" fit="cover" v-else-if="project.code === 'golden-mouse-miner'"/>
      <g-image src="~/assets/images/projects/vuejs_shopping_cart_thumb.png" fit="cover" v-else-if="project.code === 'vuejs-shopping-cart'"/>
      <g-image src="~/assets/images/projects/maze_city_thumb.png" fit="cover" v-else="project.code === 'maze-city'"/>

      <div class="mt-1"><strong>{{ project.name }} </strong></div>
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
        }
      }
    }
  },
  computed: {
  },
  methods: {
    showDetail() {
      this.$emit('showDetail')
    }
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
