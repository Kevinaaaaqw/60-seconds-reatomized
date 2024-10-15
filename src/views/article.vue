<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { articalApi } from '@/api'
import { useRoute } from 'vue-router'

type artica = { content: string, creat_time: string, name: string, update_time: string }

const route = useRoute()
const { getArtical } = articalApi
const articalId = ref()
const artica = ref<artica>({
  content: '讀取中',
  creat_time: '',
  name: '',
  update_time: '',
})
onMounted(() => {
  if (Array.isArray(route.params.articalId)) {
    articalId.value = route.params.articalId[0]; // 使用第一個值
  } else {
    articalId.value = route.params.articalId; // 確保是 string
  }

  // getArtical({ articalId: articalId.value }).then((res) => {
  //   artica.value = res.data
  // })

  getArtical({ articalId: articalId.value }).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      artica.value = data;// 將數據作為 JSON 返回給前端
    } else {
      alert('無此文章')
    }
  }).catch((err) => {
    alert('錯誤' + err)
  })
})

watch(() => route.params.articalId, (newId, oldId) => {
  if (Array.isArray(route.params.articalId)) {
    articalId.value = route.params.articalId[0]; // 使用第一個值
  } else {
    articalId.value = route.params.articalId; // 確保是 string
  }
  artica.value = {
    content: '讀取中',
    creat_time: '',
    name: '',
    update_time: '',
  }

  // getArtical({ articalId: articalId.value }).then((res) => {
  //   artica.value = res.data
  // })

  getArtical({ articalId: articalId.value }).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      artica.value = data;// 將數據作為 JSON 返回給前端
    } else {
      alert('無此文章')
    }
  }).catch((err) => {
    alert('錯誤' + err)
  })

})

</script>

<template>
  <div class="w-full bg-deep_ocean_blue flex justify-center min-h-100vh">
    <div
      class="w-95% bg-ocean_blue border-white border-1px border-solid rounded-sm my-5 p-5 box-border bg-texture text-white">
      <div class="w-full flex gap-4">
        <div>文章發布時間：{{ artica?.creat_time }}</div>
        <div>最後更新：{{ artica?.update_time }}</div>
      </div>
      <div class="mt-5 ql-editor" v-html="artica?.content">
      </div>
    </div>
  </div>
</template>
<style scoped></style>
