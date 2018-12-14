import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/index";
import Product from "@/components/Product/index";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/products",
			name: "products",
			component: Product
		}
	]
});
