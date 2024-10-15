import { Burger, Cherry, Discount } from '@element-plus/icons-vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { ElMenu, ElMenuItem } from 'element-plus';
import { useRoute,
//  useRouter
 } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
// const router = useRouter();
const activeMenu = ref(''); // 當前選中的菜單項
// 監聽路由名稱變化
watch(() => route.fullPath, (newName) => {
    if (typeof newName === 'string') {
        activeMenu.value = newName.slice(1); // 只有當 newName 是字串時才賦值
    }
});
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};
// const menuSelect = (key: string) => {
//     let sleep = key.split('/')
//     router.push({ name: sleep[0], params: { articalId: sleep[1] } })
// }
const isCollapse = ref(false);
const handleResize = () => {
    if (window.innerWidth >= 640) {
        isCollapse.value = false;
    }
    else {
        isCollapse.value = true;
    }
};
onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onOpen': {} }, ...{ 'onClose': {} }, ...{ class: ("w-full flex items-center") }, ...{ style: ({}) }, collapse: ((__VLS_ctx.isCollapse)), activeTextColor: ("#ffd04b"), backgroundColor: ("#0A4362"), mode: ("horizontal"), defaultActive: ((__VLS_ctx.activeMenu)), textColor: ("#fff"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onOpen': {} }, ...{ 'onClose': {} }, ...{ class: ("w-full flex items-center") }, ...{ style: ({}) }, collapse: ((__VLS_ctx.isCollapse)), activeTextColor: ("#ffd04b"), backgroundColor: ("#0A4362"), mode: ("horizontal"), defaultActive: ((__VLS_ctx.activeMenu)), textColor: ("#fff"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onOpen: (__VLS_ctx.handleOpen)
    };
    const __VLS_8 = {
        onClose: (__VLS_ctx.handleClose)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ to: (({ name: 'home' })), }));
    const __VLS_11 = __VLS_10({ to: (({ name: 'home' })), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ index: ("home"), }));
    const __VLS_17 = __VLS_16({ index: ("home"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("object-cover w-70px") }, src: ("@/img/game_logo_sh.png"), alt: ("Element logo"), });
    __VLS_nonNullable(__VLS_20.slots).default;
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    __VLS_nonNullable(__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ to: (({ name: 'article', params: { articalId: 'CompleteGuide' } })), }));
    const __VLS_23 = __VLS_22({ to: (({ name: 'article', params: { articalId: 'CompleteGuide' } })), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ index: ("article/CompleteGuide"), }));
    const __VLS_29 = __VLS_28({ index: ("article/CompleteGuide"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.Burger;
    /** @type { [typeof __VLS_components.Burger, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_nonNullable(__VLS_38.slots).default;
    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_32.slots).default;
    const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
    __VLS_nonNullable(__VLS_26.slots).default;
    const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ to: (({ name: 'article', params: { articalId: 'ItemIntroduction' } })), }));
    const __VLS_47 = __VLS_46({ to: (({ name: 'article', params: { articalId: 'ItemIntroduction' } })), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ index: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u002f\u0049\u0074\u0065\u006d\u0049\u006e\u0074\u0072\u006f\u0064\u0075\u0063\u0074\u0069\u006f\u006e"), }));
    const __VLS_53 = __VLS_52({ index: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u002f\u0049\u0074\u0065\u006d\u0049\u006e\u0074\u0072\u006f\u0064\u0075\u0063\u0074\u0069\u006f\u006e"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
    const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
    const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.Cherry;
    /** @type { [typeof __VLS_components.Cherry, ] } */
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({}));
    const __VLS_65 = __VLS_64({}, ...__VLS_functionalComponentArgsRest(__VLS_64));
    __VLS_nonNullable(__VLS_62.slots).default;
    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_56.slots).default;
    const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    __VLS_nonNullable(__VLS_50.slots).default;
    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
    const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ to: (({ name: 'article', params: { articalId: 'EventIntroduction' } })), }));
    const __VLS_71 = __VLS_70({ to: (({ name: 'article', params: { articalId: 'EventIntroduction' } })), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ index: ("article/EventIntroduction"), }));
    const __VLS_77 = __VLS_76({ index: ("article/EventIntroduction"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({}));
    const __VLS_83 = __VLS_82({}, ...__VLS_functionalComponentArgsRest(__VLS_82));
    const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.Discount;
    /** @type { [typeof __VLS_components.Discount, ] } */
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({}));
    const __VLS_89 = __VLS_88({}, ...__VLS_functionalComponentArgsRest(__VLS_88));
    __VLS_nonNullable(__VLS_86.slots).default;
    const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_80.slots).default;
    const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
    __VLS_nonNullable(__VLS_74.slots).default;
    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-70px'];
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
            Burger: Burger,
            Cherry: Cherry,
            Discount: Discount,
            ElMenu: ElMenu,
            ElMenuItem: ElMenuItem,
            activeMenu: activeMenu,
            handleOpen: handleOpen,
            handleClose: handleClose,
            isCollapse: isCollapse,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
