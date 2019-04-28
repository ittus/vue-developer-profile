<template>
  <div>
    <Card title="Overview">
      <p class="lead">
        Hello, I'm <strong>Thang Vu</strong>, a Software Engineer based in Tokyo, Japan. Find me on
        <template v-for="(social, idx) in socials">
          <a
            :key="idx"
            :href="social.link"
            :style="{color: social.color}"
            target="_blank">
            {{ social.name }}
          </a>
          {{ idx !== socials.length - 1 ? ', ': ''}}{{ idx === socials.length - 2 ? 'and': ''}}
        </template>
      </p>
      <p>
        As a Software Engineer, I would like to bring technology to make life easier and increase productivity. I also want to create great products which have good design architecture, high scalability and easy to maintain.
      </p>
      <p>
        I'm looking for opportunities to build and improve exciting and challenging projects!
      </p>
      <div class="mt-5">
        <button class="btn btn-primary">Download Resume</button>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'

export default {
  name: "Overview",
  props: {
    'socials': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  components: {
    Card
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.lead {
  color: #000;
}
</style>
