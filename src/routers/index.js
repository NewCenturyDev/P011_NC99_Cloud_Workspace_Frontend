import {createRouter, createWebHashHistory} from "vue-router";
import NotFoundView from "@/views/NotFoundView.vue";
import MyCalendarView from "@/views/MyCalendarView.vue";
import StorageListView from "@/views/StorageListView.vue";
import LoginView from "@/views/LoginView.vue";

const scrollResetRoutes = ["/", "/engines"];
const index = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: LoginView,
        },
        {
            path: "/storages",
            name: "storages",
            component: StorageListView,
        },
        {
            path: "/calendar",
            name: "calendar",
            component: MyCalendarView,
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFoundView,
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return scrollResetRoutes.includes(to.path) || scrollResetRoutes.includes(from.path) ? {left: 0, top: 0} : savedPosition;
    },
});

export default index;
