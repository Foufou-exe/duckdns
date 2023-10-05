// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Create a Vue Router
const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            // Redirect to the home page if the URL doesn't match
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            // Redirect About page
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            // Redirect FAQ page for questions
            path: '/faq',
            name: 'faq',
            component: () => import('../views/Faq.vue')
        },
        {
            // Redirect Privacy Statement page for conditions of use
            path: '/privacy-statement',
            name: 'privacy-statement',
            component: () => import('../views/PrivacyStatement.vue')
        },
        {
            // Redirect Terms Of Use page for conditions of use
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: () => import('../views/TermsOfUse.vue')
        },
        {
            // Redirect Specification page for installation 
            path: '/specification',
            name: 'specification',
            component: () => import('../views/Specification.vue')
        },
        {
            // Redirect Documentation page for installation
            path: '/documentation',
            name: 'documentation',
            component: () => import('../views/Documentation.vue')
        },
        {
            // Redirection for News
            path: '/news',
            component: () => import('../views/News.vue'),
            children: [
                {
                    // Redirection news page Reddit
                    path: 'NewsReddit',
                    name: 'NewsReddit',
                    component: () => import('../components/News/NewsReddit.vue')
                }
            ],
        }

    ]


});

export default router;
