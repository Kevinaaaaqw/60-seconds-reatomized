<script setup lang="ts">
import { ElBacktop } from 'element-plus'
import Menu from '@/components/Menu.vue'
import { } from '@/api/index'
</script>

<template>
  <div class="w-full min-h-100vh box-border font-DotGothic16">
    <div>
      <Menu />
    </div>
    <div class=" flex-grow-1 flex justify-center">
      <RouterView />
      <el-backtop :right="100" :bottom="100" />
    </div>
  </div>
</template>

<style scoped></style>
