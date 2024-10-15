<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { QuillyEditor } from 'vue-quilly'
import Quill from 'quill'
import { Delta, Range } from 'quill/core'
import { articalApi } from '@/api';
import { ElButton } from 'element-plus'
import { onAuthStateChanged, } from 'firebase/auth';
import { auth } from '@/firebase';

const route = useRoute()
const router = useRouter()
const articalId = ref()
const { getArtical, updateArtical } = articalApi

if (Array.isArray(route.params.articalId)) {
    articalId.value = route.params.articalId[0]; // 使用第一個值
} else {
    articalId.value = route.params.articalId; // 確保是 string
}

// getArtical({ articalId: articalId.value }).then((res) => {
//     model.value = res.data.content
// })

getArtical({ articalId: articalId.value }).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        model.value = data.content;// 將數據作為 JSON 返回給前端
    } else {
        model.value = '';// 將數據作為 JSON 返回給前端
        alert('無此文章')
    }
}).catch((err) => {
    alert('錯誤' + err)
})

watch(() => route.params.articalId, (newId) => {
    articalId.value = newId

    getArtical({ articalId: articalId.value }).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            model.value = data.content;// 將數據作為 JSON 返回給前端
        } else {
            model.value = '';// 將數據作為 JSON 返回給前端
            alert('無此文章')
        }
    }).catch((err) => {
        alert('錯誤' + err)
    })
})

let quill: Quill | null = null
const editor = ref<InstanceType<typeof QuillyEditor>>()
const model = ref<string>(``)
const editorDelta = ref<Delta>()
const editorRange = ref<Range>()

const options = ref({
    theme: 'snow',
    modules: {
        toolbar: [
            [{ font: [] }, { size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: 'super' }, { script: 'sub' }],
            [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['direction', { align: [] }],
            ['link', 'image', 'video', 'formula'],
            ['clean']
        ]
    },
    placeholder: 'Insert text here ...',
    readOnly: false
})

onMounted(() => {
    quill = editor.value?.initialize(Quill)!
    quill
})

const onModelValueChange = () => { }
const onTextChange = (({ delta }: { delta: Delta }) => (editorDelta.value = delta))
const onSelectionChange = ({ range }: { range: Range }) => (editorRange.value = range)
const onEditorChange = () => { }

const sendEdit = () => {
    // updateArtical({ articalId: articalId.value, data: model.value }).then((res) => {
    //     // router.push({ name: 'edit' })
    // })
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // 已登入
            await updateArtical({ articalId: articalId.value, data: model.value }).then((res) => {
                if (res) {
                    router.push({ name: 'edit' })
                }

            })
        } else {
            // 未登入
            alert("未登入");
        }
    })

}
</script>
<template>
    <div class="w-90%">
        <QuillyEditor ref="editor" v-model="model" :options="options" @update:model-value="onModelValueChange"
            @text-change="onTextChange" @selection-change="onSelectionChange" @editor-change="onEditorChange" />
        <ElButton @click="sendEdit" type="warning">
            送出
        </ElButton>
    </div>
</template>
<style scoped></style>