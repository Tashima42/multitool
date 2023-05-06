import {createRouter, createWebHistory} from "vue-router"
import App from "@/views/Home.vue";

const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {path: "/", component: App},
            {path: "/:id", component: () => import("./views/Url.vue")},
            {path: "/f/:id", component: () => import("./views/File.vue")},
        ],
    }
)

export default router
