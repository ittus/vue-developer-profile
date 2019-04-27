<template>
  <div>
    <Card title="Education">
      <EducationItem />
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import EducationItem from './EducationItem.vue'

export default {
  name: "",
  components: {
    Card,
    EducationItem
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
