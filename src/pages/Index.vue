<template>
  <Layout>
    <Intro />
    <div class="layout">
      <work-card />
      <certification-card />
      <education-card />
      <portfolio-card />
    </div>
  </Layout>
</template>

<script>
import Intro from '~/components/introduction/Intro.vue'
import WorkCard from '~/components/WorkCard.vue'
import CertificationCard from '~/components/CertificationCard.vue'
import EducationCard from '~/components/EducationCard.vue'
import PortfolioCard from '~/components/PortfolioCard.vue'

export default {
  components: {
    WorkCard,
    CertificationCard,
    EducationCard,
    PortfolioCard,
    Intro
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
