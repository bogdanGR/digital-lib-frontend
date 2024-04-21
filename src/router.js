import { createRouter, createWebHistory} from "vue-router";
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from "@/pages/ProjectsPage.vue";
import PublicationsPage from "@/pages/PublicationsPage.vue";
import CoursesPage from "@/pages/CoursesPage.vue";
import PeoplePage from "@/pages/PeoplePage.vue";
import LinksPage from "@/pages/LinksPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/about'},
        {path: '/about', component: AboutPage},
        {path: '/projects', component: ProjectsPage},
        {path: '/publications', component: PublicationsPage},
        {path: '/courses', component: CoursesPage},
        {path: '/people', component: PeoplePage},
        {path: '/links', component: LinksPage},
    ]
});

export default router;