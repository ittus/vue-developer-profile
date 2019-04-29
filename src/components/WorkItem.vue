<template>
  <div class="mb-5">
    <h4 class="pt-0 my-0">{{ employment.title }} | {{ employment.company }}</h4>
    <div class="text-muted mt-2">
      {{ employment.start }} - {{ employment.end }}
    </div>
    <p class="mt-1">
      <ul>
        <li v-for="(desc, idx) in employment.description" :key="idx">
          {{ desc }}
        </li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
  props: {
    'employment': {
      type: Object,
      default: function() {
        return {
          "title": "Software Engineer",
          "company": "ABEJA Inc.",
          "start": "July 2017",
          "end": "Present",
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
