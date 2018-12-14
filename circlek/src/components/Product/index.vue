<template>
	<div class="product">
		<app-menu-bar/>
		<app-products/>
		<app-modal/>
	</div>
</template>

<script>
	import AppMenuBar from '@/components/Product/menubar';
	import AppProducts from '@/components/Product/products';
	import AppModal from '@/components/Product/modal';
	export default{
		components: {
			AppMenuBar,
			AppProducts,
			AppModal
		}
	}
</script>

<style></style>
