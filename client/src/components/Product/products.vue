<template>
    <div class="product--content">
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
</template>
<script>
    export default{
        data(){
            return {
            
			cate: "drink",
			products: [
				{
					id: 0,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 1",
					product_watch: 80,
					product_cate: "food"
				},
				{
					id: 1,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 10",
					product_watch: 90,
					product_cate: "food"
				},
				{
					id: 2,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 100",
					product_watch: 100,
					product_cate: "food"
				},
				{
					id: 3,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Mì xào cay cấp độ 100",
					product_watch: 120,
					product_cate: "food"
				},
				{
					id: 4,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Coca cola",
					product_watch: 120,
					product_cate: "drink"
				},
				{
					id: 5,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Pepsi",
					product_watch: 120,
					product_cate: "drink"
				},
				{
					id: 6,
					product_image: "../../assets/images/slider-bg.png",
					product_price: 1000000,
					product_name: "Milk Tea",
					product_watch: 120,
					product_cate: "drink"
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