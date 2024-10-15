import { createRouter, createWebHistory } from 'vue-router';
// import { memberApi } from '@/api'
import { onAuthStateChanged, } from 'firebase/auth';
import { auth } from '@/firebase';
// 已占用 name toDoList
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { title: '60秒核災生存-加強重製版' },
            component: () => import('@/views/home.vue')
        },
        {
            path: '/article/:articalId',
            name: 'article',
            meta: { title: '60秒核災生存-文章' },
            component: () => import('@/views/article.vue')
        },
        {
            path: '/edit',
            name: 'edit',
            meta: { title: '60秒核災生存-所有文章查詢' },
            component: () => import('@/views/edit.vue')
        },
        {
            path: '/editArtical/:articalId',
            name: 'editArtical',
            meta: { title: '60秒核災生存-修改文章' },
            component: () => import('@/views/editArtical.vue')
        },
        {
            path: '/logIn',
            name: 'logIn',
            meta: { title: '60秒核災生存-後臺登入' },
            component: () => import('@/views/logIn.vue')
        },
    ], scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash, // 錨點
                behavior: 'smooth', // 平滑滾動
            };
        }
        return { top: 0 }; // 默認回到頂部
    }
});
router.beforeEach((to, from, next) => {
    from;
    const { title } = to.meta;
    const defaultTitle = '60秒核災生存-加強重製版';
    // const defaultDescription = '';
    document.title = (title || defaultTitle);
    const needCheckRoutes = ['edit', 'editArtical'];
    // const { checkLogin } = memberApi;
    // 檢查是否需要驗證登入
    if (needCheckRoutes.includes(to.name)) {
        // checkLogin()
        //     .then(() => {
        //         next(); // 登錄成功，繼續跳轉
        //     })
        //     .catch(() => {
        //         next({ name: 'logIn' }); // 如果未登入，重定向到登入頁面
        //     });
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // 已登入
                next();
            }
            else {
                // 未登入
                next({ name: 'logIn' });
            }
        });
    }
    else if (to.name === 'logIn') {
        // checkLogin()
        //     .then(() => {
        //         next({ name: 'edit' }); // 如果已登入，直接跳轉到文章編輯頁面
        //     })
        //     .catch(() => {
        //         next(); // 未登入，進入登入頁面
        //     });
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // 已登入
                next({ name: 'edit' }); // 如果已登入，直接跳轉到文章編輯頁面
            }
            else {
                // 未登入
                next(); // 未登入，進入登入頁面
            }
        });
    }
    else {
        next(); // 對於其他不需要驗證的路由，直接放行
    }
});
export default router;
