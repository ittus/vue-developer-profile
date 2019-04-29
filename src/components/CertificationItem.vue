<template>
  <div class="wrapper mb-5">
    <div class="cert-badge mr-2">
      <a :href="certification.link" target="_blank">
        <g-image :src="certification.icon" alt="" />
      </a>
    </div>
    <div class="cert-content">
      <h4 class="mb-1"><a :href="certification.link" target="_blank">{{ certification.name }}</a></h4>
      <div>{{ certification.granted }} | {{ certification.date }}</div>
      <div class="mt-3">{{ certification.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
  props: {
    'certification': {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  line-height: 1.5;
}
.cert-badge {
  flex: 0 0 15%;
}

.cert-content {
  flex: 1;
  h4 {
    font-weight: 600;
  }
}
</style>
