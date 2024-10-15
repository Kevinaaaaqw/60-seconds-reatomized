import { articalApi } from '@/api';
import { ElTable, ElTableColumn, ElButton, } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const { getArticalList } = articalApi;
const articalListData = ref([]);
onMounted(async () => {
    // getArticalList().then((res) => {
    //     articalListData.value = res.data
    // })
    getArticalList().then((snapshot) => {
        if (snapshot.exists()) {
            const data = Object.keys(snapshot.val()).map((key) => {
                return {
                    articalId: key,
                    name: snapshot.val()[key].name,
                    creat_time: snapshot.val()[key].creat_time,
                    update_time: snapshot.val()[key].update_time,
                };
            });
            articalListData.value = data;
        }
        else {
            alert('該文章不存在或沒有數據');
            return [];
        }
    }).catch((error) => {
        console.log(error);
    });
});
//CSS回傳
const headerCellStyle = () => {
    return {
        backgroundColor: '#F5F7FA',
        color: '#909399'
    };
};
const cellStyle = () => {
    return {
        color: '#303133',
        textAlign: 'center'
    };
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90%") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ headerCellStyle: ((__VLS_ctx.headerCellStyle)), cellStyle: ((__VLS_ctx.cellStyle)), emptyText: ("查無資料"), border: (true), ...{ class: ("mb-4 mt-3") }, data: ((__VLS_ctx.articalListData)), }));
    const __VLS_2 = __VLS_1({ headerCellStyle: ((__VLS_ctx.headerCellStyle)), cellStyle: ((__VLS_ctx.cellStyle)), emptyText: ("查無資料"), border: (true), ...{ class: ("mb-4 mt-3") }, data: ((__VLS_ctx.articalListData)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ align: ("center"), prop: ("articalId"), label: ("文章Id"), }));
    const __VLS_8 = __VLS_7({ align: ("center"), prop: ("articalId"), label: ("文章Id"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ align: ("center"), prop: ("name"), label: ("文章分類名稱"), }));
    const __VLS_14 = __VLS_13({ align: ("center"), prop: ("name"), label: ("文章分類名稱"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ align: ("center"), prop: ("creat_time"), label: ("創建時間"), }));
    const __VLS_20 = __VLS_19({ align: ("center"), prop: ("creat_time"), label: ("創建時間"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ align: ("center"), prop: ("update_time"), label: ("更新時間"), }));
    const __VLS_26 = __VLS_25({ align: ("center"), prop: ("update_time"), label: ("更新時間"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ align: ("center"), minWidth: ("120px"), fixed: ("right"), prop: (""), label: ("操作"), }));
    const __VLS_32 = __VLS_31({ align: ("center"), minWidth: ("120px"), fixed: ("right"), prop: (""), label: ("操作"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_35.slots);
        const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-1 box-border w-full flex gap-2 flex-wrap justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, type: ("success"), }));
        const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        let __VLS_42;
        const __VLS_43 = {
            onClick: (() => { __VLS_ctx.router.push({ name: 'editArtical', params: { articalId: scope.row.articalId } }); })
        };
        let __VLS_39;
        let __VLS_40;
        __VLS_nonNullable(__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    }
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['box-border'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
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
            ElTable: ElTable,
            ElTableColumn: ElTableColumn,
            ElButton: ElButton,
            router: router,
            articalListData: articalListData,
            headerCellStyle: headerCellStyle,
            cellStyle: cellStyle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
