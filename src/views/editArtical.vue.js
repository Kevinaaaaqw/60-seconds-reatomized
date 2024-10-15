import { watch, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { QuillyEditor } from 'vue-quilly';
import Quill from 'quill';
import { articalApi } from '@/api';
import { ElButton } from 'element-plus';
import { onAuthStateChanged, } from 'firebase/auth';
import { auth } from '@/firebase';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const articalId = ref();
const { getArtical, updateArtical } = articalApi;
if (Array.isArray(route.params.articalId)) {
    articalId.value = route.params.articalId[0]; // 使用第一個值
}
else {
    articalId.value = route.params.articalId; // 確保是 string
}
// getArtical({ articalId: articalId.value }).then((res) => {
//     model.value = res.data.content
// })
getArtical({ articalId: articalId.value }).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        model.value = data.content; // 將數據作為 JSON 返回給前端
    }
    else {
        model.value = ''; // 將數據作為 JSON 返回給前端
        alert('無此文章');
    }
}).catch((err) => {
    alert('錯誤' + err);
});
watch(() => route.params.articalId, (newId) => {
    articalId.value = newId;
    getArtical({ articalId: articalId.value }).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            model.value = data.content; // 將數據作為 JSON 返回給前端
        }
        else {
            model.value = ''; // 將數據作為 JSON 返回給前端
            alert('無此文章');
        }
    }).catch((err) => {
        alert('錯誤' + err);
    });
});
let quill = null;
const editor = ref();
const model = ref(``);
const editorDelta = ref();
const editorRange = ref();
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
});
onMounted(() => {
    quill = editor.value?.initialize(Quill);
    quill;
});
const onModelValueChange = () => { };
const onTextChange = (({ delta }) => (editorDelta.value = delta));
const onSelectionChange = ({ range }) => (editorRange.value = range);
const onEditorChange = () => { };
const sendEdit = () => {
    // updateArtical({ articalId: articalId.value, data: model.value }).then((res) => {
    //     // router.push({ name: 'edit' })
    // })
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // 已登入
            await updateArtical({ articalId: articalId.value, data: model.value }).then((res) => {
                if (res) {
                    router.push({ name: 'edit' });
                }
            });
        }
        else {
            // 未登入
            alert("未登入");
        }
    });
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-ocean_blue w-100% flex justify-center flex-wrap h-fit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-90% max-w-1000px h-fit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white h-fit min-h-100vh") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.QuillyEditor;
    /** @type { [typeof __VLS_components.QuillyEditor, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onTextChange': {} }, ...{ 'onSelectionChange': {} }, ...{ 'onEditorChange': {} }, ref: ("editor"), modelValue: ((__VLS_ctx.model)), options: ((__VLS_ctx.options)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onTextChange': {} }, ...{ 'onSelectionChange': {} }, ...{ 'onEditorChange': {} }, ref: ("editor"), modelValue: ((__VLS_ctx.model)), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const editor = ref()`
    __VLS_ctx.editor;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        'onUpdate:modelValue': (__VLS_ctx.onModelValueChange)
    };
    const __VLS_9 = {
        onTextChange: (__VLS_ctx.onTextChange)
    };
    const __VLS_10 = {
        onSelectionChange: (__VLS_ctx.onSelectionChange)
    };
    const __VLS_11 = {
        onEditorChange: (__VLS_ctx.onEditorChange)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, ...{ class: ("mt-10") }, type: ("warning"), }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, ...{ class: ("mt-10") }, type: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (__VLS_ctx.sendEdit)
    };
    let __VLS_15;
    let __VLS_16;
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_styleScopedClasses['bg-ocean_blue'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['h-fit'];
    __VLS_styleScopedClasses['w-90%'];
    __VLS_styleScopedClasses['max-w-1000px'];
    __VLS_styleScopedClasses['h-fit'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['h-fit'];
    __VLS_styleScopedClasses['min-h-100vh'];
    __VLS_styleScopedClasses['mt-10'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "editor": __VLS_6,
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
            QuillyEditor: QuillyEditor,
            ElButton: ElButton,
            editor: editor,
            model: model,
            options: options,
            onModelValueChange: onModelValueChange,
            onTextChange: onTextChange,
            onSelectionChange: onSelectionChange,
            onEditorChange: onEditorChange,
            sendEdit: sendEdit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
