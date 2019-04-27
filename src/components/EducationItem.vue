<template>
  <div>
    <h4 class="pt-0 my-0">{{ school.degree }} of {{ school.major }} | {{ school.name }}</h4>
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
        return {
          "degree": "Bachelor",
          "major": "Software Engineering",
          "name": "FPT University",
          "start": "2010",
          "end": "2015",
          "description": [
            "Develop and maintain company's web application",
            "Working with VueJS, AWS, Google Cloud and serverless architecture"
          ]
        }
      }
    }
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>

</style>
