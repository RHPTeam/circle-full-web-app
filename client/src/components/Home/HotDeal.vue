<template>
	<div class="hotdeal p_10">
		<div class="hotdeal--head t_bold">
			<span class="hotdeal--head-name">Hot Deal</span>
			<span class="hotdeal--head-more">See more</span>
		</div>
		<div class="hotdeal--content">
			<div class="hotdeal--item t_center" v-for='item in hotdeals'>
				<a href="">
					<img src="../../assets/images/slider-bg.png" />
					<span>{{item.hotdeal_name}}</span>
				</a>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
	data() {
		return {
			hotdeals:[
				{
					id: 0,
					hotdeal_image : "../../assets/images/slider-bg.png",
					hotdeal_name: "Hot deal 01"
				},
				{
					id: 1,
					hotdeal_image : "../../assets/images/slider-bg.png",
					hotdeal_name: "Hot deal 02"
				},
				{
					id: 2,
					hotdeal_image : "../../assets/images/slider-bg.png",
					hotdeal_name: "Hot deal 03"
				}
			]
		};
	},
	
};

</script>

<style></style>
