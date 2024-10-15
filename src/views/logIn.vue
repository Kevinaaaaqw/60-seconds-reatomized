<script setup lang="ts">
import { ref } from 'vue';
import { ElInput, ElButton } from 'element-plus';
import { memberApi } from '@/api';
import { useRouter } from 'vue-router'
const { signIn } = memberApi
const router = useRouter()
const email = ref()
const password = ref()

const login = () => {
    signIn({ email: email.value, password: password.value }).then((res) => {
        router.push({ name: 'edit' })
    }).catch((reason) => {
        alert('登入失敗' + reason)
    })
}

</script>
<template>
    <div class="w-90%">
        <div class="flex gap-3">
            <span>帳號</span>
            <ElInput v-model="email" />
        </div>
        <div class="flex gap-3 mt-5">
            <span>密碼</span>
            <ElInput v-model="password" />
        </div>
        <ElButton @click="login" type="success">登入</ElButton>
    </div>
</template>