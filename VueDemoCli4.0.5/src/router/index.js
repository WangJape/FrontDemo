import Vue from "vue";
import VueRouter from "vue-router";
/* import Home from "../views/Home.vue"; */
import Index from "../views/Index.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index ,
	children: [{
		path: "/about",
		component: () => import("../views/About.vue")
	},
	{
		path: "/rolePermissionWithPermissionList",
		component: () => import("../views/rolePermissionWithPermissionList.vue")
	},
	{
		path: "/Responsive",
		component: () => import("../views/Responsive.vue")
	},
	{
		path: "/news",
		component: () => import("../views/news.vue")
	}
	]
  }
];

const router = new VueRouter({
  routes
});

export default router;
