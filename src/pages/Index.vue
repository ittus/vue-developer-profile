<template>
  <Layout>
    <fork-github :githubUrl="profile.githubUrl" v-if="profile.githubUrl" />
    <Intro :socials="profile.socials" :personal="profile.personal"/>
    <div class="layout">
      <overview
        :socials="profile.socials"
        :personal="profile.personal"
        :coffeeDonateUrl="profile.buy_me_coffee_url"/>
      <work-card :works="profile.works" />
      <certification-card :certifications="profile.certifications"/>
      <education-card :educations="profile.educations"/>
      <portfolio-card :projects="profile.projects" />
    </div>
  </Layout>
</template>

<script>
import Intro from '~/components/introduction/Intro.vue'
import WorkCard from '~/components/WorkCard.vue'
import CertificationCard from '~/components/CertificationCard.vue'
import EducationCard from '~/components/EducationCard.vue'
import PortfolioCard from '~/components/PortfolioCard.vue'
import Overview from '~/components/Overview.vue'
import profile from '~/data/profile.json'
import ForkGithub from '~/components/common/ForkGithub.vue'

export default {
  components: {
    WorkCard,
    CertificationCard,
    EducationCard,
    PortfolioCard,
    Intro,
    Overview,
    ForkGithub
  },
  data: () => ({
    profile
  }),
  metaInfo: {
    title: 'Thang Minh Vu profile'
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
