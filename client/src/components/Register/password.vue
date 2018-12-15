<template>
    <div class="content-login t_center">
        <app-back-welcome/>
        <app-head-logo/>
        <div class="input-group pl_40 pr_40">
            <input type="text" placeholder="Nhập mật khẩu mới" class="color_white width_full mb_15">
            <div class="button-group">
                <button class="btn bg_red">Đăng Ký</button>
            </div>

        </div>
        <div class="button-social pl_40 pr_40">
            <button class="btn btn-facebook mb_20">Đăng nhập với Facebook</button>
            <button class="btn btn-google">Đăng nhập với Google</button>
        </div>
        <div class="space"></div>
    </div>
</template>

<script>
    import AppHeadLogo from "@/components/Head/HeadLogo";
    import AppBackWelcome from "@/components/Login/BackWelcome";
    export default {
        components: {
            AppHeadLogo,
            AppBackWelcome
        }
    };
</script>
<style lang="scss">
    
</style>