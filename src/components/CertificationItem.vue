<template>
  <div class="wrapper">
    <div class="cert-badge">
      <a :href="certification.link" target="_blank">
        <img :src="certification.icon" alt="">
      </a>
    </div>
    <div class="cert-content">
      <h4 class="mb-1"><a :href="certification.link" target="_blank">{{ certification.name }}</a></h4>
      <div>{{ certification.granted }}</div>
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
        return {
          "name": "MongoDB Certified Developer, Associate",
          "granted": "MongoDB University",
          "link": "https://certification.comptia.org/UI/Assets/siteIcons/logoSecurityPlus.svg",
          "icon": "https://certification.comptia.org/UI/Assets/siteIcons/logoSecurityPlus.svg",
          "description": "Certifies individuals with knowledge of the fundamentals of designing and building applications using MongoDB."
        }
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
