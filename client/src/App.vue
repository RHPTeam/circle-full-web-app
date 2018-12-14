<template>
	<div id="app">
		<router-view />
		<app-nav />
	</div>
</template>

<script>
import AppNav from "@/components/Footer/Navbar";
export default {
	name: "App",
	components: {
		AppNav
	}
};
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
