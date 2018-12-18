<template>
	<div class="product">
		<app-header-background />
		<app-menu-bar />
		<app-products />
		<app-modal />
		<app-nav />
	</div>
</template>

<script>
import AppHeaderBackground from "@/components/Head/HeadBackground";
import AppMenuBar from "@/components/Product/menubar";
import AppProducts from "@/components/Product/products";
import AppModal from "@/components/Product/modal";
import AppNav from "@/components/Footer/Navbar";

export default {
	components: {
		AppHeaderBackground,
		AppMenuBar,
		AppProducts,
		AppModal,
		AppNav
	},
	data:function(){
		return{
			p_modal:"Thức ăn",
			p_cate: "drink",
		}
	}
};
</script>

<style></style>
