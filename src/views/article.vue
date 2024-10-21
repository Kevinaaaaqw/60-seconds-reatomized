<script setup lang="ts">
import { ref, onMounted, watch, nextTick, Ref } from 'vue'
import { articalApi } from '@/api'
import { useRoute } from 'vue-router'
import { Location } from '@element-plus/icons-vue'

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

const replaceWithNumberedString = (text: string, targetString: string, replacementString: string) => {
  let counter = 1;
  const regex = new RegExp(targetString, 'g');  // 'g' 表示全域搜尋
  return text.replace(regex, () => `${replacementString}${counter++}"`);
}

const content = ref<Element>();
const anchors = ref<{ id: string, text: string }[]>([]);
const fetchAndProcessArticleContent = (articalId: Ref) => {
  getArtical({ articalId: articalId.value }).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      artica.value = data; // 將數據作為 JSON 返回給前端

      // 將 h2 標籤替換並增加編號
      artica.value.content = replaceWithNumberedString(artica.value.content, '<h2', '<h2 id="anchor');


      nextTick(() => {
        const h2Elements = content.value?.querySelectorAll('h2');
        anchors.value = []
        h2Elements?.forEach((h2) => {
          anchors.value.push({ id: h2.id, text: h2.textContent || '' }); // 將 h2 的 id 和內容存入 anchors 陣列
        });
      })

    } else {
      alert('無此文章');
    }
  }).catch((err) => {
    alert('錯誤' + err);
  });
};

const isAnchorOpen = ref<boolean>(false)
const toggleAnchorEl = () => {
  isAnchorOpen.value = !isAnchorOpen.value
}
onMounted(() => {
  if (Array.isArray(route.params.articalId)) {
    articalId.value = route.params.articalId[0]; // 使用第一個值
  } else {
    articalId.value = route.params.articalId; // 確保是 string
  }

  // getArtical({ articalId: articalId.value }).then((res) => {
  //   artica.value = res.data
  // })

  fetchAndProcessArticleContent(articalId)
})

watch(() => route.params.articalId, () => {
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

  fetchAndProcessArticleContent(articalId)

})

</script>

<template>
  <div v-if="anchors.length != 0" class="fixed right-10px bottom-80px w-40px h-40px rounded-full">
    <div @click="toggleAnchorEl"
      class="absolute top-0 left-0 w-40px h-40px rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-green/30 duration-300">
      <Location class="w-30px" />
    </div>
    <div class="absolute left-0 top-50% translate--100% rounded-xl bg-white box-border overflow-x-hidden duration-300"
      :class="{ 'p-1': isAnchorOpen, 'w-200px': isAnchorOpen, 'h-200px': isAnchorOpen, 'p-0': !isAnchorOpen, 'w-0': !isAnchorOpen, 'h-0px': !isAnchorOpen }">
      <div class="w-full h-full pr-17px overflow-x-hidden overflow-y-scroll box-content">
        <div class="w-full flex" v-for="i in anchors">
          <a :title="i.text" class="text-black text-lg my-1 text-truncate w-100%" :href="'#' + i.id">{{
            i.text }}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-deep_ocean_blue flex justify-center min-h-100vh">
    <div
      class="w-95% max-w-1000px h-fit bg-ocean_blue border-white border-1px border-solid rounded-sm my-5 p-5 box-border bg-texture text-white">
      <div class="w-full flex max-sm-flex-wrap gap-4 text-sm">
        <div>發布時間：{{ artica?.creat_time }}</div>
        <div>最後更新：{{ artica?.update_time }}</div>
      </div>
      <div ref="content" class="mt-5 ql-editor [&_img]:max-w-full" v-html="artica?.content">
      </div>
    </div>
  </div>
</template>
<style scoped></style>
