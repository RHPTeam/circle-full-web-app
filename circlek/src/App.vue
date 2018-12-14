<template>
	<div id="app">
		<app-header />
		<router-view />
		<app-nav />
	</div>
</template>

<script>
import AppHeader from "@/components/Head/Header";
import AppNav from "@/components/Footer/Navbar";
export default {
	name: "App",
	components: {
		AppHeader,
		AppNav
	}
};
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
