import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/index";
import Product from "@/components/Product/index";
import ProductDetail from "@/components/ProductDetail/index";
import Cart from "@/components/Cart/index";
import CartInfo from "@/components/CartInfo/index";
import CartFinish from "@/components/CartFinish/index";
import Login from "@/components/Login/index";
import Register from "@/components/Register/index";
import Verification from "@/components/Register/verification";
import RegisterPassword from "@/components/Register/password";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
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
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/cart-info",
            name: "cart-info",
            component: CartInfo
        },
        {
            path: "/cart-finish",
            name: "cart-finish",
            component: CartFinish
        },
        {
			path:"/welcome",
			name:"welcome",
			component:Welcome
		},
		{
			path:"/login",
			name:"login",
			component:Login
		},
		{
			path:"/register",
			name:"register",
			component:Register
		},
		{
			path:"/verification",
			name:"verification",
			component:Verification
		},
		{
			path:"/register-password",
			name:"register-password",
			component:RegisterPassword
		},
    ]
});