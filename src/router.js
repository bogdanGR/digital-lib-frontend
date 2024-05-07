import { createRouter, createWebHistory} from "vue-router";
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from "@/pages/ProjectsPage.vue";
import PublicationsPage from "@/pages/PublicationsPage.vue";
import ViewAbstract from "@/components/publication/ViewAbstract.vue";
import CoursesPage from "@/pages/CoursesPage.vue";
import PeoplePage from "@/pages/PeoplePage.vue";
import LinksPage from "@/pages/LinksPage.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/about'},
        {path: '/about', component: AboutPage},
        {path: '/projects', component: ProjectsPage},
        {path: '/publications', component: PublicationsPage},
        {name: 'view-abstract', path: '/publication/:publicationId', component: ViewAbstract, props: true},
        {path: '/courses', component: CoursesPage},
        {path: '/people', component: PeoplePage},
        {path: '/links', component: LinksPage},
        {path: '/:notFound(.*)', component: NotFound} // catch all urls that doesn't exist in app
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0};
    }
});

export default router;