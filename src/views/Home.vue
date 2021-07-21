<template>
  <div class="home-container page-container">
    <!-- <img class="vue-element-plus-logo" alt="Vue logo" src="../assets/logo.png" /> -->
    <Icon name="test"></Icon>
    <div class="page-title">Vite2.x + Vue3.x + TypeScript + Element Plus</div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
</script>

<style scoped lang="stylus">
.home-container
  .vue-element-plus-logo
    width 50%
</style>
