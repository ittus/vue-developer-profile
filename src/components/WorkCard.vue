<template>
  <div>
    <Card title="Work">
      <work-item />
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import WorkItem from './WorkItem.vue'

export default {
  name: "",
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
