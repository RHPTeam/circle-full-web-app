<template>
	<div class="homepage bg-grey">
		<app-header /><app-slide /> <app-hot-deal /> <app-product /> <app-nav />
	</div>
</template>

<script>
import AppHeader from "@/components/Head/Header";
import AppSlide from "@/components/Home/Slider";
import AppHotDeal from "@/components/Home/HotDeal";
import AppProduct from "@/components/Home/Product";
import AppNav from "@/components/Footer/Navbar";
export default {
	data() {
		return {};
	},
	components: {
		AppHeader,
		AppSlide,
		AppHotDeal,
		AppProduct,
		AppNav
	}
};
</script>

<style></style>
