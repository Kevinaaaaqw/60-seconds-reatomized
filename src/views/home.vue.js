import { ref, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ted = ref();
const tedRect = ref();
const mom = ref();
const momRect = ref();
const dauter = ref();
const dauterRect = ref();
const son = ref();
const sonRect = ref();
const updateRect = () => {
    ted.value && (tedRect.value = ted.value.getBoundingClientRect());
    mom.value && (momRect.value = mom.value.getBoundingClientRect());
    dauter.value && (dauterRect.value = dauter.value.getBoundingClientRect());
    son.value && (sonRect.value = son.value.getBoundingClientRect());
};
onMounted(() => {
    updateRect();
    window.addEventListener("resize", updateRect);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateRect);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-fit") }, ...{ style: (({ '--ted_x': __VLS_ctx.tedRect?.x + 'px', '--mom_x': __VLS_ctx.momRect?.x + 'px', '--dauter_x': __VLS_ctx.dauterRect?.x + 'px', '--son_x': __VLS_ctx.sonRect?.x + 'px' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full bg-home-image") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("mt-20 w-80% max-w-500px") }, src: ("@/img/game_logo_sh.png"), alt: ("game_logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20 bg-deep_ocean_blue flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-100% max-w-1000px flex justify-between gap-5 m-x-5 text-2xl p-2") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'home', hash: '#gameIntroduce' })), }));
    const __VLS_2 = __VLS_1({ to: (({ name: 'home', hash: '#gameIntroduce' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: (({ name: 'home', hash: '#story' })), }));
    const __VLS_8 = __VLS_7({ to: (({ name: 'home', hash: '#story' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: (({ name: 'home', hash: '#role' })), }));
    const __VLS_14 = __VLS_13({ to: (({ name: 'home', hash: '#role' })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: (({ name: 'home', hash: '#video' })), }));
    const __VLS_20 = __VLS_19({ to: (({ name: 'home', hash: '#video' })), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("gameIntroduce"), ...{ class: ("p-b-40 bg-texture bg-ocean_blue p-10 flex flex-col items-center gap-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flag-amber") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative  w-90% max-w-1000px h-0 p-b-40%") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("w-100% h-full absolute top-0 left-0") }, src: ("https://www.youtube.com/embed/xqC3Bu94eU8"), title: ("60 Seconds! Reatomized Game Trailer"), frameborder: ("0"), allow: ("accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), referrerpolicy: ("strict-origin-when-cross-origin"), allowfullscreen: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("text-6xl") }, href: ("https://robotgentleman.com/60seconds/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-2xl text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-col gap-2rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-1rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-1rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-1rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-1rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-1rem") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("story"), ...{ class: ("p-b-40 bg-texture bg-amber p-10 flex flex-col items-center gap-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flag-ocean_blue") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-2xl text-white flex flex-wrap gap-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-sm-flex-wrap flex gap-10 sm-gap-4% w-100%") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-8xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl flex-grow w-200px flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-sm-flex-wrap flex gap-10 sm-gap-4% w-100%") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-100% sm-w-50% max-w-600px") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("w-full") }, src: ("@/img/ted.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl flex-grow w-200px flex flex-wrap items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-sm-flex-wrap-reverse flex gap-10 sm-gap-4% w-100%") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl flex-grow w-200px flex flex-wrap items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-100% sm-w-50% max-w-600px") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("w-full") }, src: ("@/img/nuclear.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("role"), ...{ class: ("p-b-40 bg-texture bg-ocean_blue p-10 flex flex-col items-center gap-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flag-amber") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("ted"), ...{ class: ("bg-ted w-200px h-400px") }, });
    // @ts-ignore navigation for `const ted = ref()`
    __VLS_ctx.ted;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/img/dad.png"), alt: ("dad"), ...{ class: ("sm-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-full flex flex-col gap-2rem box-border text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap-reverse") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-full flex flex-col gap-2rem box-border text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("mom"), ...{ class: ("bg-mom w-200px h-400px") }, });
    // @ts-ignore navigation for `const mom = ref()`
    __VLS_ctx.mom;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/img/mom.png"), alt: ("mom"), ...{ class: ("sm-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("dauter"), ...{ class: ("bg-dauter w-200px h-400px") }, });
    // @ts-ignore navigation for `const dauter = ref()`
    __VLS_ctx.dauter;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/img/dauter.png"), alt: ("dauter"), ...{ class: ("sm-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-full flex flex-col gap-2rem box-border text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-white flex justify-between sm-gap-3% max-sm-flex-wrap-reverse") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full sm-w-10% sm-flex-grow-1 mt-10 sm-mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-full flex flex-col gap-2rem box-border text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("son"), ...{ class: ("bg-son w-200px h-400px") }, });
    // @ts-ignore navigation for `const son = ref()`
    __VLS_ctx.son;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/img/son.png"), alt: ("son"), ...{ class: ("sm-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("video"), ...{ class: ("p-b-40 bg-texture bg-amber p-10 flex flex-col items-center gap-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flag-ocean_blue") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-4xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% text-2xl text-white justify-center grid grid-cols-[repeat(auto-fill,300px)] gap-2%") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=Bm58IU1_oX4&list=PLB97681LDaD0DeVVcoZNfOPa1-KQXkPYn&ab_channel=%E8%A0%A2%E8%A0%A2"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hqdefault.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=RJzIuNroRMc&t=453s&ab_channel=%E7%86%8A%E8%B2%93%E5%9C%98%E5%9C%98"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hq720.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=1jwyZ7TPxTs&ab_channel=%E8%80%81%E7%9A%AE%EF%BC%88Opchannel%EF%BC%89"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hq720(1).webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=Fb0hUAqTTCU&ab_channel=RobotGentleman"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hq720(2).webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=Lz_Hgp3s7LA&t=1234s&ab_channel=RobotGentleman"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hqdefault.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("w-full") }, href: ("https://www.youtube.com/watch?v=tbU2joDtEEk&ab_channel=BilaitiPapad"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full overflow-hidden flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("aspect-[7/4] object-cover w-100%") }, src: ("@/img/hqdefault(1).webp"), alt: (""), });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-fit'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-home-image'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['w-80%'];
    __VLS_styleScopedClasses['max-w-500px'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['bg-deep_ocean_blue'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['max-w-1000px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['gap-5'];
    __VLS_styleScopedClasses['m-x-5'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['p-b-40'];
    __VLS_styleScopedClasses['bg-texture'];
    __VLS_styleScopedClasses['bg-ocean_blue'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-20'];
    __VLS_styleScopedClasses['flag-amber'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['max-w-1000px'];
    __VLS_styleScopedClasses['h-0'];
    __VLS_styleScopedClasses['p-b-40%'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['text-6xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2rem'];
    __VLS_styleScopedClasses['ps-1rem'];
    __VLS_styleScopedClasses['ps-1rem'];
    __VLS_styleScopedClasses['ps-1rem'];
    __VLS_styleScopedClasses['ps-1rem'];
    __VLS_styleScopedClasses['ps-1rem'];
    __VLS_styleScopedClasses['p-b-40'];
    __VLS_styleScopedClasses['bg-texture'];
    __VLS_styleScopedClasses['bg-amber'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-20'];
    __VLS_styleScopedClasses['flag-ocean_blue'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-20'];
    __VLS_styleScopedClasses['max-sm-flex-wrap'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['sm-gap-4%'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['text-8xl'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['max-sm-flex-wrap'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['sm-gap-4%'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['sm-w-50%'];
    __VLS_styleScopedClasses['max-w-600px'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['max-sm-flex-wrap-reverse'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['sm-gap-4%'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['sm-w-50%'];
    __VLS_styleScopedClasses['max-w-600px'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-b-40'];
    __VLS_styleScopedClasses['bg-texture'];
    __VLS_styleScopedClasses['bg-ocean_blue'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-20'];
    __VLS_styleScopedClasses['flag-amber'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['sm-gap-3%'];
    __VLS_styleScopedClasses['max-sm-flex-wrap'];
    __VLS_styleScopedClasses['bg-ted'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['h-400px'];
    __VLS_styleScopedClasses['sm-hidden'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm-w-10%'];
    __VLS_styleScopedClasses['sm-flex-grow-1'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['sm-mt-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2rem'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['sm-gap-3%'];
    __VLS_styleScopedClasses['max-sm-flex-wrap-reverse'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm-w-10%'];
    __VLS_styleScopedClasses['sm-flex-grow-1'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['sm-mt-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2rem'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['bg-mom'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['h-400px'];
    __VLS_styleScopedClasses['sm-hidden'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['sm-gap-3%'];
    __VLS_styleScopedClasses['max-sm-flex-wrap'];
    __VLS_styleScopedClasses['bg-dauter'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['h-400px'];
    __VLS_styleScopedClasses['sm-hidden'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm-w-10%'];
    __VLS_styleScopedClasses['sm-flex-grow-1'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['sm-mt-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2rem'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['sm-gap-3%'];
    __VLS_styleScopedClasses['max-sm-flex-wrap-reverse'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm-w-10%'];
    __VLS_styleScopedClasses['sm-flex-grow-1'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['sm-mt-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-2rem'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['bg-son'];
    __VLS_styleScopedClasses['w-200px'];
    __VLS_styleScopedClasses['h-400px'];
    __VLS_styleScopedClasses['sm-hidden'];
    __VLS_styleScopedClasses['p-b-40'];
    __VLS_styleScopedClasses['bg-texture'];
    __VLS_styleScopedClasses['bg-amber'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-20'];
    __VLS_styleScopedClasses['flag-ocean_blue'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[repeat(auto-fill,300px)]'];
    __VLS_styleScopedClasses['gap-2%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['aspect-[7/4]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-100%'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "ted": __VLS_nativeElements['div'],
        "mom": __VLS_nativeElements['div'],
        "dauter": __VLS_nativeElements['div'],
        "son": __VLS_nativeElements['div'],
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
            ted: ted,
            tedRect: tedRect,
            mom: mom,
            momRect: momRect,
            dauter: dauter,
            dauterRect: dauterRect,
            son: son,
            sonRect: sonRect,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;