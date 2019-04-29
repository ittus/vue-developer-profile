<template>
  <div>
    <Card title="Education">
      <template v-for="(ed, idx) in educations">
        <EducationItem
          :key="idx"
          :school="ed"
        />
        <hr class="my-5" v-if="idx !== educations.length - 1">
      </template>

    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import EducationItem from './EducationItem.vue'

export default {
  name: "EducationCard",
  props: {
    'educations': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
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
