<script setup lang="ts">
import { articalApi } from '@/api'
import { ElTable, ElTableColumn, ElButton, } from 'element-plus';
import { onMounted, ref, type CSSProperties } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { getArticalList } = articalApi
type artical = Array<{
    articalId: string,
    creat_time: string,
    name: string,
    update_time: string
}>
const articalListData = ref<artical>([])

onMounted(async () => {

    // getArticalList().then((res) => {
    //     articalListData.value = res.data
    // })

    getArticalList().then((snapshot) => {
        if (snapshot.exists()) {
            const data: artical = Object.keys(snapshot.val()).map((key) => {
                return {
                    articalId: key,
                    name: snapshot.val()[key].name as string,
                    creat_time: snapshot.val()[key].creat_time as string,
                    update_time: snapshot.val()[key].update_time as string,
                };
            });
            articalListData.value = data
        } else {
            alert('該文章不存在或沒有數據');
            return []
        }
    }).catch((error) => {
        console.log(error);

    })
})

//CSS回傳
const headerCellStyle = (): CSSProperties => {
    return {
        backgroundColor: '#F5F7FA',
        color: '#909399'
    }
}

const cellStyle = (): CSSProperties => {
    return {
        color: '#303133',
        textAlign: 'center'
    }
}
</script>
<template>
    <div class="w-90%">
        <el-table :header-cell-style="headerCellStyle" :cell-style="cellStyle" empty-text="查無資料" border
            class="mb-4 mt-3" :data="articalListData">
            <el-table-column align="center" prop="articalId" label="文章Id" />
            <el-table-column align="center" prop="name" label="文章分類名稱" />
            <el-table-column align="center" prop="creat_time" label="創建時間" />
            <el-table-column align="center" prop="update_time" label="更新時間" />
            <el-table-column align="center" min-width="120px" fixed="right" prop="" label="操作">
                <template #default="scope">
                    <div class="p-1 box-border w-full flex gap-2 flex-wrap justify-center items-center">
                        <div>
                            <el-button type="success"
                                @click="() => { router.push({ name: 'editArtical', params: { articalId: scope.row.articalId } }) }">查看</el-button>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>