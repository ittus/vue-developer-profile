<template>
  <div>
    <Card title="Employment history">
      <template v-for="(work, idx) in works">
        <work-item :key="idx" :employment="work" />
        <hr class="my-5" v-if="idx !== works.length - 1">
      </template>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import WorkItem from './WorkItem.vue'

export default {
  name: "WorkCard",
  props: {
    'works': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  components: {
    Card,
    WorkItem
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
