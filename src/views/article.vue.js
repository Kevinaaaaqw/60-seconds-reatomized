import { ref, onMounted, watch } from 'vue';
import { articalApi } from '@/api';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const { getArtical } = articalApi;
const articalId = ref();
const artica = ref({
    content: '讀取中',
    creat_time: '',
    name: '',
    update_time: '',
});
onMounted(() => {
    if (Array.isArray(route.params.articalId)) {
        articalId.value = route.params.articalId[0]; // 使用第一個值
    }
    else {
        articalId.value = route.params.articalId; // 確保是 string
    }
    // getArtical({ articalId: articalId.value }).then((res) => {
    //   artica.value = res.data
    // })
    getArtical({ articalId: articalId.value }).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            artica.value = data; // 將數據作為 JSON 返回給前端
        }
        else {
            alert('無此文章');
        }
    }).catch((err) => {
        alert('錯誤' + err);
    });
});
watch(() => route.params.articalId, () => {
    if (Array.isArray(route.params.articalId)) {
        articalId.value = route.params.articalId[0]; // 使用第一個值
    }
    else {
        articalId.value = route.params.articalId; // 確保是 string
    }
    artica.value = {
        content: '讀取中',
        creat_time: '',
        name: '',
        update_time: '',
    };
    // getArtical({ articalId: articalId.value }).then((res) => {
    //   artica.value = res.data
    // })
    getArtical({ articalId: articalId.value }).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            artica.value = data; // 將數據作為 JSON 返回給前端
        }
        else {
            alert('無此文章');
        }
    }).catch((err) => {
        alert('錯誤' + err);
    });
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full bg-deep_ocean_blue flex justify-center min-h-100vh") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-95% max-w-1000px h-fit bg-ocean_blue border-white border-1px border-solid rounded-sm my-5 p-5 box-border bg-texture text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex max-sm-flex-wrap gap-4 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.artica?.creat_time);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.artica?.update_time);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5 ql-editor [&_img]:max-w-full") }, });
    __VLS_directiveAsFunction(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.artica?.content) }, null, null);
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-deep_ocean_blue'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['min-h-100vh'];
    __VLS_styleScopedClasses['w-95%'];
    __VLS_styleScopedClasses['max-w-1000px'];
    __VLS_styleScopedClasses['h-fit'];
    __VLS_styleScopedClasses['bg-ocean_blue'];
    __VLS_styleScopedClasses['border-white'];
    __VLS_styleScopedClasses['border-1px'];
    __VLS_styleScopedClasses['border-solid'];
    __VLS_styleScopedClasses['rounded-sm'];
    __VLS_styleScopedClasses['my-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['bg-texture'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['max-sm-flex-wrap'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['ql-editor'];
    __VLS_styleScopedClasses['[&_img]:max-w-full'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            artica: artica,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
