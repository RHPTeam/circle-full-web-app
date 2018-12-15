<template>
    <div>
        <app-header />
        <app-info-customer />
    </div>
</template>

<script>
import AppHeader from "@/components/Head/HeadBackgroundControl";
import AppInfoCustomer from "@/components/CartInfo/cartInfoContent";
    export default {
        data() {
		return {};
	},
	components: {
        AppHeader,
        AppInfoCustomer
	}
}
</script>

<style>

</style>