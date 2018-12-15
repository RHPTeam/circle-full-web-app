<template>
	<div>
		<app-header />
		<div class="detailProduct">
			<app-image />
			<app-info />
			<app-library-image />
			<app-action />
		</div>
	</div>
</template>

<script>
import AppHeader from "@/components/Head/HeaderControl";
import AppImage from "@/components/ProductDetail/image";
import AppInfo from "@/components/ProductDetail/info";
import AppLibraryImage from "@/components/ProductDetail/libraryImage";
import AppAction from "@/components/ProductDetail/action";
export default {
	data() {
		return {};
	},
	components: {
		AppHeader,
		AppImage,
		AppInfo,
		AppLibraryImage,
		AppAction
	}
};
</script>

<style></style>
