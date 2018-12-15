<template>
    <div class="cartContent bg_grey p_10">
        <div class="userCart p_10">
            <div class="userCart--total color_black p_10 t_bold">Sản phẩm bạn đã chọn (2)</div>
            <div class="userCart--list mt_10">
                <div class="userCart--list-item">
                    <div class="infoProduct">
                        <div class="infoProduct--image">
                            <img src="../../assets/images/slider-bg.png">
                        </div>
                        <div class="infoProduct--detail">
                            <h5 class="infoProduct--detail-name">Mì xào cay cấp độ 10</h5>
                            <span class="infoProduct--detail-price t_bold color_red">1.000.000đ</span>
                        </div>
                        <div class="infoProduct--action t_right">
                            <button>Xóa</button>
                        </div>
                    </div>
                    <div class="quantilyProduct mt_10">
                        <div class="quantilyProduct--status color_black"><i class="icon fas fa-circle"></i>Sản phẩm khả dụng</div>
                        <div class="quantilyProduct--number">
                            <i class="icon fas fa-minus-circle icon-disable"></i>
                            <input type="number" value="1" class="t_center">
                            <i class="icon fas fa-plus-circle"></i>
                        </div>
                    </div>
                </div>
                <div class="userCart--list-item">
                    <div class="infoProduct">
                        <div class="infoProduct--image">
                            <img src="../../assets/images/slider-bg.png">
                        </div>
                        <div class="infoProduct--detail">
                            <h5 class="infoProduct--detail-name">Mì xào cay cấp độ 10</h5>
                            <span class="infoProduct--detail-price t_bold color_red">1.000.000đ</span>
                        </div>
                        <div class="infoProduct--action t_right">
                            <button>Xóa</button>
                        </div>
                    </div>
                    <div class="quantilyProduct mt_10">
                        <div class="quantilyProduct--status color_black"><i class="icon fas fa-circle"></i>Sản phẩm khả dụng</div>
                        <div class="quantilyProduct--number">
                            <i class="icon fas fa-minus-circle icon-disable"></i>
                            <input type="number" value="1" class="t_center">
                            <i class="icon fas fa-plus-circle"></i>
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
                <div class="userCart--money-total color_red">120.000đ</div>
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
        
    }
</script>

<style scoped>

</style>