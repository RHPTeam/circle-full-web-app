<template>
      <div class="infoShip bg_grey p_10">
        <div class="infoShip--title mt_10 t_bold">
            <i class="icon fas fa-info-circle color_black"></i>LỰA CHỌN THÔNG TIN
        </div>
        <div class="infoShip--content p_10">
            <div class="type--select">
                <input type="radio" name="input-info" id="type-available" value="">
                <label for="type-available">Thông tin có sẵn</label>
            </div>
            <div class="type--select">
                <input type="radio" name="input-info" id="type-write" value="" checked>
                <label for="type-write">Không! Tôi tự nhập thông tin</label>
            </div>
        </div>
        <div class="infoShip--title mt_20 t_bold">
            <i class="icon fas fa-map-marker-alt color_black"></i>THÔNG TIN GIAO HÀNG
        </div>
        <div class="infoShip--content p_10">
            <div class="input--item">
                <input type="text" class="color_black width_full" required>
                <label>Họ tên người nhận</label>
            </div>
            <div class="input--item">
                <input type="mail" class="color_black width_full" required>
                <label>Email</label>
            </div>
            <div class="input--item">
                <input type="tel" class="color_black width_full" required>
                <label>Điện thoại</label>
            </div>
            <div class="input--item">
                <input type="text" class="color_black width_full" required>
                <label>Địa chỉ giao hàng</label>
            </div>
        </div>
        <div class="infoShip--title mt_20 t_bold">
            <i class="icon fas fa-shipping-fast color_black"></i>CHỌN DỊCH VỤ VẬN CHUYỂN
        </div>
        <div class="infoShip--content p_10">
            <div class="infoShip--notify">
                Hiện tại có một số trường hợp lừa đảo, giả danh để lừa gạt khách hàng, chú ý:
                <span class="color_red">- Sản phẩm được gói trong bao bì Circle-K</span>
                <span class="color_red">- Check mã đơn hàng ghi trên hóa đơn</span>
            </div>
        </div>
        <div class="infoShip--ship freeShip p_10">
            <i class="icon fas fa-shipping-fast"></i>
            <span>Miễn phí vận chuyển, giảm tối đa</span>
            <span class="color_green">50.000 VNĐ</span>
        </div>
        <div class="infoShip--action">
            <router-link
				tag="button"
				class="btn color_white t_bold"
				:to="{ name: 'cart-finish' }"
			    >ĐẶT HÀNG</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>