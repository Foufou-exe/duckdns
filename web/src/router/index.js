/*
 *
 * Path : routeur/index.js
 *
 * Automatically included in `./src/main.js`
 *
 */

// Import Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Import store
import {useLoginStore} from "@store/store.js";

// Create a Vue Router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      // Redirect to the home page if the URL doesn't match
      path: "/",
      name: "home",
      component: () => import("@views/Home.vue"),
    },
    {
      // Redirect About page
      path: "/about",
      name: "about",
      component: () => import("@views/About.vue"),
    },
    {
      // Redirect FAQ page for questions
      path: "/faq",
      name: "faq",
      component: () => import("@views/Faq.vue"),
    },
    {
      // Redirect Privacy Statement page for conditions of use
      path: "/privacy-statement",
      name: "privacy-statement",
      component: () => import("@views/PrivacyStatement.vue"),
    },
    {
      // Redirect Terms Of Use page for conditions of use
      path: "/terms-of-use",
      name: "terms-of-use",
      component: () => import("@views/TermsOfUse.vue"),
    },
    {
      // Redirect Specification page for installation
      path: "/specification",
      name: "specification",
      component: () => import("@views/Specification.vue"),
    },
    {
      // Redirect Documentation page for installation
      path: "/documentation",
      name: "documentation",
      component: () => import("@views/Documentation.vue"),
    },
    {
      // Redirect for News
      path: "/news",
      name: "news",
      component: () => import("@views/News.vue"),
    },
    {
      path: "/news/:id/:viewName",
      name: "baseNews",
      props: true,
      component: () => import("@components/news/BaseNews.vue"),
    },
    {
      // Redirect for Profils User
      path: "/profils",
      name: "profils",
      component: () => import("@views/Profils.vue"),
    },
    {
      // Redirect for Domains User
      path: "/domains",
      name: "domains",
      component: () => import("@views/Domains.vue"),
    },
    {
      // Redirect Error 404 page
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@views/NotFound.vue"),
    },
    {
      // Redirect to Panel Admin
      path: "/admin",
      name: "admin",
      component: () => import("@views/Admin.vue"),
    },
    {
      // Redirect to Dasgboard Admin after login
      path: "/admin/dashboard",
      name: "dashboard",
      meta: { requiresAuth: true },
      component: () => import("@views/Dashboard.vue"),
      children: [
        {
          path: "create-news-article",
          name: "create-news-article",
          component: () => import("@components/dashboard/CreateNewArticle.vue"),
        },
        {
          path: "list-article",
          name: "list-article",
          component: () => import("@components/dashboard/ListArticle.vue"),
        },
        {
          path: "",
          name: "dashboard-home",
          component: () => import("@components/dashboard/Home.vue"),
        },
        {
          path: "edit-article/:id",
          name: "edit-article",
          props: true,
          component: () => import("@components/dashboard/EditArticle.vue"),
        },
        {
          path: "user-setting",
          name: "user-setting",
          component: () => import("@components/dashboard/UserSetting.vue"),
        }
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore(); // Utilisez le store Pinia
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && loginStore.checkUser === false) {
    next('/admin'); // Redirect to login page if not logged in
  } else {
    next(); // Otherwise, continue as normal
  }
});

export default router;
