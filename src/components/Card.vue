<template>
  <div class="i-card py-0 mx-0">
    <div class="i-card-header">
      <h2>{{ title }}</h2>
    </div>
    <div class="i-card-content pt-lg-4">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['title'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.i-card {
  position: relative;
  background-color: #fff;
  margin: 30px -30px;
  padding: 30px;
  -webkit-box-shadow: 0 1px 6px rgba(57,73,76,0.35);
  box-shadow: 0 1px 6px rgba(57,73,76,0.35);

  .i-card-header {
    border-bottom: 1px solid #E0E0E0;
    margin: 0 -30px;
    padding: 30px;
    background-color: #F9F9F9;

    h2 {
      margin: 0;
      border: none;
      font-weight: 500;
      padding: 0;
    }
  }

  .i-card-content {
    margin: 0 -30px;
    padding: 20px 30px;
  }

  .i-card-content:last-child {
    border-bottom: none;
  }
}
</style>
