<template>
  <div>
    <Card title="Portfolio">
      <div class="row">
        <PortfolioItem
          @showDetail="onShowDetail(proj)"
          v-for="(proj, idx) in projects"
          :project="proj"
          :key="proj.name"
          class="col-6" />
      </div>
    </Card>
    <modal v-if="showModal && currentProject" @close="showModal = false">
      <h3 slot="header">{{ currentProject.name }}</h3>
      <div slot="body">
        <div v-html="getDescription(currentProject.code)"></div>
      </div>
    </modal>
  </div>
</template>
<script>
import Card from './Card.vue'
import PortfolioItem from './PortfolioItem.vue'
import Modal from './common/Modal.vue'

export default {
  name: "",
  props: {
    'projects': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  components: {
    PortfolioItem,
    Card,
    Modal
  },
  data: () => ({
    showModal: false,
    currentProject: null
  }),
  computed: {
    projectDescriptions() {
      return this.$static.projects.edges.map(item => item.node)
    }
  },
  watch: {
    showModal (newVal) {
      if (newVal) {
        document.body.classList.add('v--modal-block-scroll')
      } else {
        document.body.classList.remove('v--modal-block-scroll')
      }
    }
  },
  methods: {
    getDescription(projectFileName) {
      const filename = `/src/data/projects/${projectFileName}`
      return this.projectDescriptions.find(item => item.path === filename).content
    },
    onShowDetail (project) {
      this.currentProject = project
      this.showModal = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
<static-query>
  query Projects {
    projects: allProject {
      totalCount
      edges {
        node {
          content
          title
          id
          path
        }
      }
    }
  }
</static-query>
