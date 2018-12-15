<template>
    <div class="orderComplete t_center p_40">
        <div class="orderComplete--icon"><i class="icon far fa-check-circle color_red"></i></div>
        <div class="orderComplete--info">
            <span class="t_bold">Đặt hàng hoàn tất</span>
            <div class="orderComplete--info-code t_bold color_red mt_20 mb_20">106537124</div>
            <div class="orderComplete--info-message">Cảm ơn bạn đã đặt hàng tại Circle-K! Nhân viên sẽ gọi cho bạn để xác nhận lại thông tin. Bạn có thể sử dụng mã đơn hàng để kiểm tra sản phẩm khi nhận hàng</div>
        </div>
        <div class="orderComplete--back">
            <router-link
				tag="button"
				class="btn bg_greyish t_bold"
				:to="{ name: 'home' }"
			    >Quay trở lại trang chủ</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>