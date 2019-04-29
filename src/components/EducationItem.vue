<template>
  <div>
    <h4 class="pt-0 my-0">{{ school.degree }} <span v-if="hasDegreeAndMajor">of</span> {{ school.major }} | {{ school.name }}</h4>
    <div class="text-muted mt-2">
      {{ school.start }} - {{ school.end }}
    </div>
    <p v-if="school.description && school.description.length">
      <ul>
        <li v-for="(desc, idx) in school.description" :key="idx">
          {{ desc }}
        </li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  name: "EducationItem",
  props: {
    'school': {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => ({

  }),
  computed: {
    hasDegreeAndMajor() {
      return this.school && this.school.degree && this.school.major
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
