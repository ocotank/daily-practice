<template>
  <div class="app-container">
    <header>共通ヘッダー</header>
    <router-view/>
    <footer>共通フッター</footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.app {
  &-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    padding-inline: 20px;
    margin-inline: auto;
  }
}
</style>