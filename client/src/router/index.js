import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/index";
import Product from "@/components/Product/index";
import ProductDetail from "@/components/ProductDetail/index";

Vue.use(Router);

export default new Router({
	mode: "history",
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
		},
		{
			path: "/product-detail",
			name: "product-detail",
			component: ProductDetail
		}
	]
});
