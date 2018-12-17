<template>
    <div class="cartContent bg_grey p_10">
        <div class="userCart p_10">
            <div class="userCart--total color_black p_10 t_bold">Sản phẩm bạn đã chọn ({{products.length}})</div>
            <div class="userCart--list mt_10">
                <div class="userCart--list-item" v-for="product in products" :key="product.id">
                    <div class="infoProduct">
                        <div class="infoProduct--image">
                            <img src="../../assets/images/slider-bg.png">
                        </div>
                        <div class="infoProduct--detail">
                            <h5 class="infoProduct--detail-name">{{product.product_name}}</h5>
                            <span class="infoProduct--detail-price t_bold color_red">{{product.product_price}}đ</span>
                        </div>
                        <div class="infoProduct--action t_right">
                            <button>Xóa</button>
                        </div>
                    </div>
                    <div class="quantilyProduct mt_10">
                        <div class="quantilyProduct--status color_black"><i class="icon fas fa-circle"></i>Sản phẩm khả dụng</div>
                        <div class="quantilyProduct--number">
                            <i class="icon fas fa-minus-circle" :class="{'icon-disable' : product.product_quantity <= 0}" @click="product.product_quantity--"></i>
                            <input type="number" value="1" class="t_center" v-model="product.product_quantity">
                            <i class="icon fas fa-plus-circle" @click="product.product_quantity++"></i>
                        </div>                       
                    </div>
                </div>                
            </div>
            <div class="userCart--ship freeShip p_10">
                <i class="icon fas fa-shipping-fast"></i>
                <span>Miễn phí vận chuyển, giảm tối đa</span>
                <span class="color_green">50.000 VNĐ</span>
            </div>
            <div class="userCart--money t_bold">
                <span class="userCart--money-name color_black">Tổng tiền</span>
                <div class="userCart--money-total color_red">{{totalPrice}}đ</div>
            </div>
            <div class="userCart--action t_right">
                <router-link
				tag="button"
				class="btn userCart--action-btn t_bold bg_transparent"
				:to="{ name: 'cart-info' }"
			    >Mua hàng</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products:[
                    {
                        id: 0,
                        product_image : "../../assets/images/slider-bg.png",
                        product_name: "Mì xào cay cấp độ 10",
                        product_price: 1000,
                        product_quantity: 1,
                    },
                    {
                        id: 1,
                        product_image : "../../assets/images/slider-bg.png",
                        product_name: "Mì xào cay cấp độ 100",
                        product_price: 2000,
                        product_quantity: 2,
                    },
                ]
            }
        },
        computed: {
            totalPrice() {
                var total = 0;
                this.products.forEach(product => {
                    total += (product.product_price * product.product_quantity);
                });
                return total;
            }
        },
        methods: {
            // dec() {
            //     if(this.products.product_quantity >= 1) {
            //         this.products.product_quantity--;
            //     }
            // },
            // inc() {
            //     this.products.product_quantity++;
            // },
        }
    }
</script>

<style scoped>

</style>