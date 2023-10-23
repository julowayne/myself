import { createWebHistory, createRouter } from "vue-router";
import GarminContent from "../components/content/GarminContent.vue";
import ProfilContent from "../components/content/ProfilContent.vue";
import GithubContent from "../components/content/GithubContent.vue";
import ProjectsContent from "../components/content/ProjectsContent.vue";
import WowContent from "../components/content/WowContent.vue";

const routes = [
  {
    path: "/jules",
    name: "Jules",
    component: ProfilContent,
  },
  {
    path: "/github",
    name: "Github",
    component: GithubContent,
  },
  {
    path: "/garmin",
    name: "Garmin",
    component: GarminContent,
  },
  {
    path: "/projects",
    name: "Projets",
    component: ProjectsContent,
  },
  {
    path: "/wow",
    name: "World Of Warcraft",
    component: WowContent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;