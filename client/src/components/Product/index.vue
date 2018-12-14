<template>
	<div class="product">
		<app-header-background />
		<app-menu-bar />
		<app-products />
		<app-modal />
	</div>
</template>

<script>
import AppHeaderBackground from "@/components/Head/HeadBackground";
import AppMenuBar from "@/components/Product/menubar";
import AppProducts from "@/components/Product/products";
import AppModal from "@/components/Product/modal";
export default {
	components: {
		AppHeaderBackground,
		AppMenuBar,
		AppProducts,
		AppModal
	}
};
</script>

<style></style>
