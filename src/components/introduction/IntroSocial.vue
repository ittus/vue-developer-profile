<template>
  <ul class="social-intro pl-0">
    <li v-for="social in socials" :key="social.icon">
      <g-link :to="social.link">
        <font-awesome-icon :icon="['fab', social.icon]" :transform="{rotate: -45}"/>
      </g-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "IntroSocial",
  props: {
    'socials': {
      type: Array,
      required: false,
      default: function() {
        return []
      }
    }
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.social-intro {
  text-align: center;
  list-style: none;
  li {
    display: inline-block;
    padding: 0 5px;

    a {
      color: #fff;
      padding: 5px;
      display: block;
      width: 40px;
      height: 40px;
      background: rgba(244, 244, 244, 0.1);
      border-radius: 4px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      margin: 5px;
    }
  }
}
</style>
