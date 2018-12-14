<template>
	<div><app-slide /> <app-hot-deal /> <app-product /></div>
</template>

<script>
import AppSlide from "@/components/Home/Slider";
import AppHotDeal from "@/components/Home/HotDeal";
import AppProduct from "@/components/Home/Product";
export default {
	data() {
		return {};
	},
	components: {
		AppSlide,
		AppHotDeal,
		AppProduct
	}
};
</script>

<style></style>
