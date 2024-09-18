import {createRouter, createWebHashHistory} from "vue-router";
import NotFoundView from "@/views/NotFoundView.vue";
import MyFileListView from "@/views/MyFileListView.vue"
import MyCalendarView from "@/views/MyCalendarView.vue";
import SharedFileListView from "@/views/SharedFileListView.vue";

const scrollResetRoutes = ["/", "/engines"];
const index = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: MyFileListView,
        },
        {
            path: "/calendar",
            name: "calendar",
            component: MyCalendarView,
        },
        {
            path: "/shared",
            name: "shared",
            component: SharedFileListView,
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
