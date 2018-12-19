<template>
	<div>
		<div class="product--content" 
		v-if="stt_cate">
				<div class="card--body"
					v-for="product in products"
					v-if = "product.product_modal == modal"
					:key="product.id"
				>
					<div class="card--image">
						<img src="../../assets/images/slider-bg.png">
					</div>
					<div class="card--detail">
						<div class="card--info t_center mt_10">
							<h5 class="card--info-name t_bold">{{product.product_name}}</h5>
							<span class="card--info-price">{{formatPrice(product.product_price)}}đ</span>
						</div>
						<div class="card--action">
							<button class="btn bg_red full_width">Thêm vào giỏ</button>
						</div>
					</div>
				</div>
		</div>
		<div class="product--content"
		 v-else
		 >
				<div class="card--body"
					v-for="product in products"
					v-if = "product.product_cate == cate"
					:key="product.id"
				>
					<div class="card--image">
						<img src="../../assets/images/slider-bg.png">
					</div>
					<div class="card--detail">
						<div class="card--info t_center mt_10">
							<h5 class="card--info-name t_bold">{{product.product_name}}</h5>
							<span class="card--info-price">{{formatPrice(product.product_price)}}đ</span>
						</div>
						<div class="card--action">
							<button class="btn bg_red full_width">Thêm vào giỏ</button>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>
<script>
    export default{
		props:['cate','stt_cate','modal'],
        data(){
            return {
            
			products: [
				{
					id: 0,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Cơm chiên dương châu",
					product_watch: 80,
					product_cate: "Cơm",
					product_modal:"Thức ăn"
				},
				{
					id: 1,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 10",
					product_watch: 90,
					product_cate: "Mì trộn",
					product_modal:"Thức ăn"
				},
				{
					id: 2,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 100",
					product_watch: 100,
					product_cate: "Mì trộn",
					product_modal:"Thức ăn"
				},
				{
					id: 3,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 100",
					product_watch: 120,
					product_cate: "Mì trộn",
					product_modal:"Thức ăn"
				},
				{
					id: 4,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "froster chanh",
					product_watch: 120,
					product_cate:"Froster",
					product_modal: "Đồ uống"
				},
				{
					id: 5,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "froster dâu tây",
					product_watch: 120,
					product_cate: "Froster",
					product_modal: "Đồ uống"
				},
				{
					id: 6,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Milk Tea Green",
					product_watch: 120,
					product_cate: "Milk",
					product_modal: "Sản phẩm"
				}
			]
            }
        },
        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
    }
</script>
<style lang="">
    
</style>