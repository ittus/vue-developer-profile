<template>
  <Layout>
    <work-card />
    <certification-card />
    <education-card />
    <portfolio-card />
  </Layout>
</template>

<script>
import WorkCard from '~/components/WorkCard.vue'
import CertificationCard from '~/components/CertificationCard.vue'
import EducationCard from '~/components/EducationCard.vue'
import PortfolioCard from '~/components/PortfolioCard.vue'

export default {
  components: {
    WorkCard,
    CertificationCard,
    EducationCard,
    PortfolioCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
