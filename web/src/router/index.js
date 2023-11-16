/*
 *
 * Path : routeur/index.js
 *
 * Automatically included in `./src/main.js`
 * 
*/

// Import Vue Router
import { createRouter, createWebHistory } from "vue-router";

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
      component: () => import("@views/Dashboard.vue"),
      children: [
        {
          path: "support",
          name: "support",
          component: () => import("@components/dashboard/Support.vue"),
        },
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
          path: '',
          name: 'dashboard-home',
          component: () => import("@components/dashboard/Home.vue"),
        }

      ]
    }
  ],
});

export default router;


/*
 *
 * Path : routeur/index.js
 *
 * Automatically included in `./src/main.js`
 * 
*/

// // Import Vue Router
// import { createRouter, createWebHistory } from "vue-router";

// // Create a Vue Router
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes: [
//     {
//       // Change language route
//       path: "/:lang",
//       component : {
//         render: (c) => c("router-view"),
//       },
//       children: [
//         {
//           // Redirect to the home page if the URL doesn't match
//           path: "/",
//           name: "home",
//           component: () => import("@views/Home.vue"),
//         },
//         {
//           // Redirect About page
//           path: "/about",
//           name: "about",
//           component: () => import("@views/About.vue"),
//         },
//         {
//           // Redirect FAQ page for questions
//           path: "/faq",
//           name: "faq",
//           component: () => import("@views/Faq.vue"),
//         },
//         {
//           // Redirect Privacy Statement page for conditions of use
//           path: "/privacy-statement",
//           name: "privacy-statement",
//           component: () => import("@views/PrivacyStatement.vue"),
//         },
//         {
//           // Redirect Terms Of Use page for conditions of use
//           path: "/terms-of-use",
//           name: "terms-of-use",
//           component: () => import("@views/TermsOfUse.vue"),
//         },
//         {
//           // Redirect Specification page for installation
//           path: "/specification",
//           name: "specification",
//           component: () => import("@views/Specification.vue"),
//         },
//         {
//           // Redirect Documentation page for installation
//           path: "/documentation",
//           name: "documentation",
//           component: () => import("@views/Documentation.vue"),
//         },
//         {
//           // Redirect for News
//           path: "/news",
//           name: "news",
//           component: () => import("@views/News.vue"),
//         },
//         {
//           path: "/news/:id/:viewName",
//           name: "baseNews",
//           props: true,
//           component: () => import("@components/news/BaseNews.vue"),
//         },
//         {
//           // Redirect for Profils User
//           path: "/profils",
//           name: "profils",
//           component: () => import("@views/Profils.vue"),
//         },
//         {
//           // Redirect for Domains User
//           path: "/domains",
//           name: "domains",
//           component: () => import("@views/Domains.vue"),
//         },
//       ]
//     },
//     {
//       // Redirect Error 404 page
//       path: "/:pathMatch(.*)*",
//       name: "not-found",
//       component: () => import("@views/NotFound.vue"),
//     },
//   ],
// });

// export default router;
