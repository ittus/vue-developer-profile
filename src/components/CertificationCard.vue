<template>
  <div>
    <Card title="Certifications">
      <CertificationItem />
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import CertificationItem from './CertificationItem.vue'

export default {
  name: "CertificationCard",
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
