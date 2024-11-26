import {createRouter, createWebHashHistory} from "vue-router";
import NotFoundView from "@/views/NotFoundView.vue";
import StorageListView from "@/views/StorageListView.vue";
import LoginView from "@/views/LoginView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import SignupView from "@/views/SignupView.vue";
import CrawlerView from "@/views/CrawlerView.vue";
import UserProfileView from "@/views/UserProfileView.vue";

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
            path: "/signup",
            name: "signup",
            component: SignupView,
        },
        {
            path: "/storages",
            name: "storages",
            component: StorageListView,
        },
        {
            path: "/schedules",
            name: "schedules",
            component: ScheduleView,
        },
        {
            path: "/crawlers",
            name: "crawlers",
            component: CrawlerView,
        },
        {
            path: "/users",
            name: "users",
            component: UserProfileView,
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
