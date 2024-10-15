<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const ted = ref()
const tedRect = ref()
const mom = ref()
const momRect = ref()
const dauter = ref()
const dauterRect = ref()
const son = ref()
const sonRect = ref()
const updateRect = () => {
    ted.value && (tedRect.value = ted.value.getBoundingClientRect())
    mom.value && (momRect.value = mom.value.getBoundingClientRect())
    dauter.value && (dauterRect.value = dauter.value.getBoundingClientRect())
    son.value && (sonRect.value = son.value.getBoundingClientRect())
}

onMounted(() => {
    updateRect()
    window.addEventListener("resize", updateRect)
})

onUnmounted(() => {
    window.removeEventListener("resize", updateRect)
})



</script>
<template>
    <div class="w-full h-fit"
        :style="{ '--ted_x': tedRect?.x + 'px', '--mom_x': momRect?.x + 'px', '--dauter_x': dauterRect?.x + 'px', '--son_x': sonRect?.x + 'px' }">
        <div class="w-full bg-home-image">
            <div class="flex justify-center">
                <img class="mt-20 w-80% max-w-500px" src="@/img/game_logo_sh.png" alt="game_logo">
            </div>
            <div class="mt-20 bg-deep_ocean_blue flex justify-center">
                <div class="w-100% max-w-1000px flex justify-between gap-5 m-x-5 text-2xl p-2">
                    <router-link :to="{ name: 'home', hash: '#gameIntroduce' }">遊戲介紹</router-link>
                    <router-link :to="{ name: 'home', hash: '#story' }">故事</router-link>
                    <router-link :to="{ name: 'home', hash: '#role' }">角色介紹</router-link>
                    <router-link :to="{ name: 'home', hash: '#video' }">推薦影片</router-link>
                </div>
            </div>
            <div id="gameIntroduce" class="p-b-40 bg-texture bg-ocean_blue p-10 flex flex-col items-center gap-20">
                <div class="flag-amber">
                    <div class="text-4xl">
                        <span>
                            遊戲介紹
                        </span>
                    </div>
                </div>
                <div class="relative  w-90% max-w-1000px h-0 p-b-40%">
                    <iframe class="w-100% h-full absolute top-0 left-0" src="https://www.youtube.com/embed/xqC3Bu94eU8"
                        title="60 Seconds! Reatomized Game Trailer" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <a class="text-6xl" href="https://robotgentleman.com/60seconds/" target="_blank">前往官網</a>
                </div>
                <div class="w-90% text-2xl text-white">
                    <div class="text-4xl">
                        遊戲流程介紹：
                    </div><br>
                    《60 Seconds! Reatomized》是一款生存策略遊戲，玩家需要在末日來臨前的60秒內，從家中收集資源並帶領家庭成員躲入避難所，然後在地堡中面對長時間的核後生存挑戰。<br><br>
                    <ul class="flex flex-col gap-2rem">
                        <li> 準備階段（60秒倒數）：
                            <div class="ps-1rem">
                                玩家需要在60秒內在家中快速探索，收集生存所需的物資，例如食物、水、醫療包、武器、地圖等。也要決定是否救出家庭成員。家中分佈著各種物品，玩家必須在有限的時間內做出取捨。
                            </div>
                        </li>
                        <li> 生存階段（避難所生活）：
                            <div class="ps-1rem">
                                進入避難所後，遊戲進入生存階段。玩家每天需要管理食物和水的分配，照顧家庭成員的健康，同時應對隨機事件，比如外界突襲、疾病、補給減少等。這個階段的挑戰來自如何有效分配有限的資源，並做出生死攸關的決策。
                            </div>
                        </li>
                        <li> 外出探索：
                            <div class="ps-1rem">
                                在某些情況下，玩家可以派遣家庭成員外出探索，尋找更多資源或逃離的方法。然而，外出可能會遇到危險，需要玩家評估風險和收益。
                            </div>
                        </li>
                        <li> 隨機事件與選擇：
                            <div class="ps-1rem">
                                遊戲中會不斷出現隨機事件，玩家需要根據事件做出選擇，這些選擇將影響家庭的生存狀況。有時是來自外界的幫助，有時則是新的危機，玩家必須權衡利弊。
                            </div>
                        </li>
                        <li> 結局：
                            <div class="ps-1rem">
                                根據玩家的決策和資源管理，遊戲會有不同的結局，可能是成功存活，或者失敗並全家滅亡。
                            </div>
                        </li>
                    </ul>
                    這款遊戲充滿了緊張刺激的抉擇，每次遊玩都有不同的結局與變化，考驗玩家的應變能力和戰略規劃。
                </div>
            </div>
            <div id="story" class="p-b-40 bg-texture bg-amber p-10 flex flex-col items-center gap-20">
                <div class="flag-ocean_blue">
                    <div class="text-4xl">
                        <span>
                            故事
                        </span>
                    </div>
                </div>
                <div class="w-90% text-2xl text-white flex flex-wrap gap-20">
                    <div class="max-sm-flex-wrap flex gap-10 sm-gap-4% w-100%">
                        <div class="text-8xl">
                            泰德
                        </div>
                        <div class="text-4xl flex-grow w-200px flex items-center">
                            他是一名勤奮工作的公民，也是一位家庭男人。
                            你好，泰德！別害羞！
                        </div>
                    </div>
                    <div class="max-sm-flex-wrap flex gap-10 sm-gap-4% w-100%">
                        <div class="w-100% sm-w-50% max-w-600px">
                            <img class="w-full" src="@/img/ted.png" alt="">
                        </div>
                        <div class="text-4xl flex-grow w-200px flex flex-wrap items-center">
                            <div>
                                等一下，那是什麼聲音？
                            </div>
                            <div>
                                哦，不！是核彈警報！
                            </div>
                        </div>
                    </div>
                    <div class="max-sm-flex-wrap-reverse flex gap-10 sm-gap-4% w-100%">
                        <div class="text-4xl flex-grow w-200px flex flex-wrap items-center">
                            <div>
                                別擔心，泰德知道該怎麼做！政府的早期預警系統非常可靠，給了泰德 60 秒的時間進入他家地下的避難所。這對泰德來說已經足夠了，他可以收集物資，當然還有他的家人！
                                現在，泰德可以安心地和他所愛的人一起欣賞那充滿放射性廢土的迷人日落了。
                                祝你好運，泰德！
                            </div>
                        </div>
                        <div class="w-100% sm-w-50% max-w-600px">
                            <img class="w-full" src="@/img/nuclear.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="role" class="p-b-40 bg-texture bg-ocean_blue p-10 flex flex-col items-center gap-20">
                <div class="flag-amber">
                    <div class="text-4xl">
                        <span>
                            角色介紹
                        </span>
                    </div>
                </div>
                <div class="w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap">
                    <div ref="ted" class="bg-ted w-200px h-400px">
                        <img src="@/img/dad.png" alt="dad" class="sm-hidden">
                    </div>
                    <div class="w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0">
                        <div class="w-full text-4xl">
                            Ted（泰德）
                        </div>
                        <ul class="w-full flex flex-col gap-2rem box-border text-xl">
                            <li> 身份：父親
                            </li>
                            <li> 特點：泰德是這個家庭的支柱，災難發生時一肩扛起所有家人與物資前往避難室，他的心理狀況和健康狀況對整個家庭的生存至關重要。
                            </li>
                            <li> 個性：責任感強，為了保護家庭，他會做出許多艱難的決策，但在長期生存下，承受巨大的心理壓力。
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap-reverse">

                    <div class="w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0">
                        <div class="w-full text-4xl">
                            Dolores（多蘿莉絲）
                        </div>
                        <ul class="w-full flex flex-col gap-2rem box-border text-xl">
                            <li> 身份：母親
                            </li>
                            <li> 特點：多蘿莉絲是這個家庭的另一個核心成員，身體素質不亞於泰德。她是家中的可靠人物，尤其在食物和水分配方面十分理智。她的耐力較強，能承受更長的壓力和艱難環境。
                            </li>
                            <li> 個性：堅韌不拔，能在困難時刻保持冷靜並管理家庭內部事務。
                            </li>
                        </ul>
                    </div>
                    <div ref="mom" class="bg-mom w-200px h-400px">
                        <img src="@/img/mom.png" alt="mom" class="sm-hidden">
                    </div>
                </div>
                <div class="w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap">
                    <div ref="dauter" class="bg-dauter w-200px h-400px">
                        <img src="@/img/dauter.png" alt="dauter" class="sm-hidden">
                    </div>
                    <div class="w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0">
                        <div class="w-full text-4xl">
                            Mary Jane（瑪麗·珍）
                        </div>
                        <ul class="w-full flex flex-col gap-2rem box-border text-xl">
                            <li> 身份：女兒
                            </li>
                            <li> 特點：瑪麗·珍是家庭中最年長的孩子，經常表現出一定的獨立性。她在特定情況下的表現會比成人更好，比如在避難所內的一些隨機事件中，她的活力和樂觀態度會幫助家庭度過難關。
                            </li>
                            <li> 個性：富有冒險精神，有時會顯得衝動，但也可以在危機中展現出非凡的勇氣。
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap-reverse">

                    <div class="w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0">
                        <div class="w-full text-4xl">
                            Timmy（提米）
                        </div>
                        <ul class="w-full flex flex-col gap-2rem box-border text-xl">
                            <li> 身份：兒子
                            </li>
                            <li> 特點：提米是家中最年幼的成員，但他的敏捷和靈活性在探索階段有時會成為一個優勢。在某些情況下，他能幫助家庭渡過難關，尤其在生存日數長的情況下，提米能夠在逆境中發揮作用。
                            </li>
                            <li> 個性：充滿活力且樂觀，經常需要被保護，但在某些選擇上也會顯示出超乎年齡的智慧。
                            </li>
                        </ul>
                    </div>
                    <div ref="son" class="bg-son w-200px h-400px">
                        <img src="@/img/son.png" alt="son" class="sm-hidden">
                    </div>
                </div>
            </div>
            <div id="video" class="p-b-40 bg-texture bg-amber p-10 flex flex-col items-center gap-20">
                <div class="flag-ocean_blue">
                    <div class="text-4xl">
                        <span>
                            推薦影片
                        </span>
                    </div>
                </div>
                <div class="w-90% text-2xl text-white justify-center grid grid-cols-[repeat(auto-fill,300px)] gap-2%">
                    <a class="w-full"
                        href="https://www.youtube.com/watch?v=Bm58IU1_oX4&list=PLB97681LDaD0DeVVcoZNfOPa1-KQXkPYn&ab_channel=%E8%A0%A2%E8%A0%A2"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hqdefault.jpg" alt="">
                        </div>
                    </a>
                    <a class="w-full"
                        href="https://www.youtube.com/watch?v=RJzIuNroRMc&t=453s&ab_channel=%E7%86%8A%E8%B2%93%E5%9C%98%E5%9C%98"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hq720.webp" alt="">
                        </div>
                    </a>
                    <a class="w-full"
                        href="https://www.youtube.com/watch?v=1jwyZ7TPxTs&ab_channel=%E8%80%81%E7%9A%AE%EF%BC%88Opchannel%EF%BC%89"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hq720(1).webp" alt="">
                        </div>
                    </a>
                    <a class="w-full" href="https://www.youtube.com/watch?v=Fb0hUAqTTCU&ab_channel=RobotGentleman"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hq720(2).webp" alt="">
                        </div>
                    </a>
                    <a class="w-full"
                        href="https://www.youtube.com/watch?v=Lz_Hgp3s7LA&t=1234s&ab_channel=RobotGentleman"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hqdefault.webp" alt="">
                        </div>
                    </a>
                    <a class="w-full" href="https://www.youtube.com/watch?v=tbU2joDtEEk&ab_channel=BilaitiPapad"
                        target="_blank">
                        <div class="w-full overflow-hidden flex justify-center items-center">
                            <img class="aspect-[7/4] object-cover w-100%" src="@/img/hqdefault(1).webp" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-ted {
    background-image: url(@/img/dad.png);
    background-size: 200px 400px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: var(--ted_x);
}

.bg-mom {
    background-image: url(@/img/mom.png);
    background-size: 200px 400px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: var(--mom_x);
}

.bg-dauter {
    background-image: url(@/img/dauter.png);
    background-size: 200px 400px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: var(--dauter_x);
}

.bg-son {
    background-image: url(@/img/son.png);
    background-size: 200px 400px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: var(--son_x);
}
</style>