<template>
	<div class="productHome">
		<div class="productHome--tab t_center">
			<button class="btn" :class="isFood ? 'bg_red' : 'bg_white'" @click="tabFood">Thức Ăn</button>
			<button class="btn" :class="!isFood ? 'bg_red' : 'bg_white'" @click="tabDrink">Đồ Uống</button>
		</div>
		<div class="productHome--item p_10" v-for="product in products" v-if="product.product_cate == cate" :key="product.id">
			<div class="product--image">
				<img src="../../assets/images/slider-bg.png" />
			</div>
			<div class="product--detail t_bold">
				<div class="product--detail-price color_black">
					Giá: <b class="color_red">{{product.product_price}}đ</b>
				</div>
				<div class="product--detail-name">{{product.product_name}}</div>
			</div>
			<div class="product--watched t_center">
				<i class="icon fas fa-user"></i>
				<div class="product--watched-number t_bold">{{product.product_watch}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isFood: true,
				cate: 'food',
				products : [
					{
						id: 0,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Mì xào cay cấp độ 1",
						product_watch: 80,
						product_cate: "food",
					},
					{
						id:1,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Mì xào cay cấp độ 10",
						product_watch: 90,
						product_cate: "food",
					},
					{
						id: 2,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Mì xào cay cấp độ 100",
						product_watch: 100,
						product_cate: "food",
					},
					{
						id: 3,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Mì xào cay cấp độ 100",
						product_watch: 120,
						product_cate: "food",
					},
					{
						id: 4,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Coca cola",
						product_watch: 120,
						product_cate: "drink",
					},
					{
						id: 5,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Pepsi",
						product_watch: 120,
						product_cate: "drink",
					},
					{
						id: 6,
						product_image : "../../assets/images/slider-bg.png",
						product_price: 1000000,
						product_name: "Milk Tea",
						product_watch: 120,
						product_cate: "drink",
					}
				]
			}
		},
		methods: {
			tabFood() {
				this.isFood =  true,
				this.cate = 'food'
			},
			tabDrink() {
				this.isFood =  false,
				this.cate = 'drink'
			}

		}
	}


</script>

<style></style>
