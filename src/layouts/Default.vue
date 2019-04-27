<template>
  <div>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
