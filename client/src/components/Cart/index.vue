<template>
    <div>
        <app-header />
        <app-cart />
    </div>
</template>

<script>
import AppHeader from "@/components/Head/HeadBackgroundControl";
import AppCart from "@/components/Cart/CartContent";
    export default {
        data() {
		return {};
	},
	components: {
        AppHeader,
        AppCart
	}
}
</script>

<style>

</style>