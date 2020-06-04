<template>
  <div>
    <Card title="Certifications">
      <template v-for="(cert, idx) in certifications">
        <CertificationItem
          :key="idx"
          :certification="cert"
        />
        <hr class="my-5" :key="'hr-' + idx" v-if="idx !== certifications.length - 1">
      </template>

    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import CertificationItem from './CertificationItem.vue'

export default {
  name: "CertificationCard",
  props: {
    'certifications': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  components: {
    CertificationItem,
    Card
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
