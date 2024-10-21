import { ref, onMounted, watch, nextTick } from 'vue';
import { articalApi } from '@/api';
import { useRoute } from 'vue-router';
import { Location } from '@element-plus/icons-vue';
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
const replaceWithNumberedString = (text, targetString, replacementString) => {
    let counter = 1;
    const regex = new RegExp(targetString, 'g'); // 'g' 表示全域搜尋
    return text.replace(regex, () => `${replacementString}${counter++}"`);
};
const content = ref();
const anchors = ref([]);
const fetchAndProcessArticleContent = (articalId) => {
    getArtical({ articalId: articalId.value }).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            artica.value = data; // 將數據作為 JSON 返回給前端
            // 將 h2 標籤替換並增加編號
            artica.value.content = replaceWithNumberedString(artica.value.content, '<h2', '<h2 id="anchor');
            nextTick(() => {
                const h2Elements = content.value?.querySelectorAll('h2');
                anchors.value = [];
                h2Elements?.forEach((h2) => {
                    anchors.value.push({ id: h2.id, text: h2.textContent || '' }); // 將 h2 的 id 和內容存入 anchors 陣列
                });
            });
        }
        else {
            alert('無此文章');
        }
    }).catch((err) => {
        alert('錯誤' + err);
    });
};
const isAnchorOpen = ref(false);
const toggleAnchorEl = () => {
    isAnchorOpen.value = !isAnchorOpen.value;
};
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
    fetchAndProcessArticleContent(articalId);
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
    fetchAndProcessArticleContent(articalId);
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
    if (__VLS_ctx.anchors.length != 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed right-10px bottom-80px w-40px h-40px rounded-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleAnchorEl) }, ...{ class: ("absolute top-0 left-0 w-40px h-40px rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-green/30 duration-300") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Location;
        /** @type { [typeof __VLS_components.Location, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-30px") }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("w-30px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute left-0 top-50% translate--100% rounded-xl bg-white box-border overflow-x-hidden duration-300") }, ...{ class: (({ 'p-1': __VLS_ctx.isAnchorOpen, 'w-200px': __VLS_ctx.isAnchorOpen, 'h-200px': __VLS_ctx.isAnchorOpen, 'p-0': !__VLS_ctx.isAnchorOpen, 'w-0': !__VLS_ctx.isAnchorOpen, 'h-0px': !__VLS_ctx.isAnchorOpen })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-full pr-17px overflow-x-hidden overflow-y-scroll box-content") }, });
        for (const [i] of __VLS_getVForSourceType((__VLS_ctx.anchors))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ title: ((i.text)), ...{ class: ("text-black text-lg my-1 text-truncate w-100%") }, href: (('#' + i.id)), });
            (i.text);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full bg-deep_ocean_blue flex justify-center min-h-100vh") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-95% max-w-1000px h-fit bg-ocean_blue border-white border-1px border-solid rounded-sm my-5 p-5 box-border bg-texture text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex max-sm-flex-wrap gap-4 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.artica?.creat_time);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.artica?.update_time);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("content"), ...{ class: ("mt-5 ql-editor [&_img]:max-w-full") }, });
    __VLS_directiveAsFunction(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.artica?.content) }, null, null);
    // @ts-ignore navigation for `const content = ref()`
    __VLS_ctx.content;
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['right-10px'];
    __VLS_styleScopedClasses['bottom-80px'];
    __VLS_styleScopedClasses['w-40px'];
    __VLS_styleScopedClasses['h-40px'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['w-40px'];
    __VLS_styleScopedClasses['h-40px'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-green/30'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-30px'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-50%'];
    __VLS_styleScopedClasses['translate--100%'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['overflow-x-hidden'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['h-200px'];
    __VLS_styleScopedClasses['p-0'];
    __VLS_styleScopedClasses['w-0'];
    __VLS_styleScopedClasses['h-0px'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['pr-17px'];
    __VLS_styleScopedClasses['overflow-x-hidden'];
    __VLS_styleScopedClasses['overflow-y-scroll'];
    __VLS_styleScopedClasses['box-content'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['my-1'];
    __VLS_styleScopedClasses['text-truncate'];
    __VLS_styleScopedClasses['w-100%'];
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
    const __VLS_refs = {
        "content": __VLS_nativeElements['div'],
    };
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
            Location: Location,
            artica: artica,
            content: content,
            anchors: anchors,
            isAnchorOpen: isAnchorOpen,
            toggleAnchorEl: toggleAnchorEl,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
