<script setup lang="ts">
import { Burger, Cherry, Discount } from '@element-plus/icons-vue'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'
import {
    useRoute,
    //  useRouter
} from 'vue-router';

const route = useRoute();
// const router = useRouter();
const activeMenu = ref<string>(''); // 當前選中的菜單項

// 監聽路由名稱變化
watch(() => route.fullPath, (newName) => {
    if (typeof newName === 'string') {
        activeMenu.value = newName.slice(1); // 只有當 newName 是字串時才賦值
    }
});

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

// const menuSelect = (key: string) => {

//     let sleep = key.split('/')
//     router.push({ name: sleep[0], params: { articalId: sleep[1] } })
// }


const isCollapse = ref<boolean>(false)

const handleResize = () => {
    if (window.innerWidth >= 640) { isCollapse.value = false } else { isCollapse.value = true }
}
onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

</script>
<template>
    <el-menu class="w-full flex items-center" style="border-bottom: 0;" :collapse="isCollapse"
        active-text-color="#ffd04b" background-color="#0A4362" mode="horizontal" :default-active="activeMenu"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <RouterLink :to="{ name: 'home' }">
            <el-menu-item index="home">
                <div class="flex justify-center">
                    <img class="object-cover w-70px" src="@/img/game_logo_sh.png" alt="Element logo" />
                </div>
            </el-menu-item>
        </RouterLink>
        <RouterLink :to="{ name: 'article', params: { articalId: 'CompleteGuide' } }">
            <el-menu-item index="article/CompleteGuide">
                <el-icon>
                    <Burger />
                </el-icon>
                <span>Steam 全程就攻略</span>
            </el-menu-item>
        </RouterLink>
        <RouterLink :to="{ name: 'article', params: { articalId: 'ItemIntroduction' } }">
            <el-menu-item index="
            article/ItemIntroduction">
                <el-icon>
                    <Cherry />
                </el-icon>
                <span>物品介紹</span>
            </el-menu-item>
        </RouterLink>
        <RouterLink :to="{ name: 'article', params: { articalId: 'EventIntroduction' } }">
            <el-menu-item index="article/EventIntroduction">
                <el-icon>
                    <Discount />
                </el-icon>
                <span>事件介紹</span>
            </el-menu-item>
        </RouterLink>
    </el-menu>
</template>