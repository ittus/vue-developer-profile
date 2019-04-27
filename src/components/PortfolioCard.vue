<template>
  <div>
    <Card title="Portfolio">
      <div class="row">
        <PortfolioItem class="col-6" />
        <PortfolioItem class="col-6" />
        <PortfolioItem class="col-6" />
        <PortfolioItem class="col-6" />
      </div>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'
import PortfolioItem from './PortfolioItem.vue'

export default {
  name: "",
  components: {
    PortfolioItem,
    Card
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
