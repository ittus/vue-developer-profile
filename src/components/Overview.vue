<template>
  <div>
    <Card title="Overview">
      <p class="lead">
        Hello, I'm <strong>{{ personal.full_name }}</strong>, a Software Engineer based in Tokyo, Japan. Find me on
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
        I'm looking for opportunities to participate in challenging projects!
      </p>
      <div class="mt-5">
        <button class="btn btn-primary mr-3" @click="downloadResume">Download Resume</button>
        <buy-me-a-coffee v-if="coffeeDonateUrl" :coffeeDonateUrl="coffeeDonateUrl"/>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import BuyMeACoffee from './common/BuyMeACoffee.vue'

export default {
  name: "Overview",
  props: {
    'socials': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    },
    'personal': {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    },
    "coffeeDonateUrl": {
      type: String,
      required: false,
      default: function() {
        return "https://www.buymeacoffee.com/8buMYCOog"
      }
    }
  },
  components: {
    Card,
    BuyMeACoffee
  },
  data: () => ({

  }),
  methods: {
    downloadResume() {
      window.open("https://www.linkedin.com/in/ittus/", "_blank")
    }
  }
}
</script>
<style lang="scss" scoped>
.lead {
  color: #000;
}
</style>
