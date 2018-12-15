<template>
    <div class="content-login t_center">
        <app-head-logo/>
        <div class="title pl_40 pr_40 color_white">RHP là nhà.<br> Không ai bỏ đi, cũng không ai bị bỏ lại</div>
        <div class="button-group pl_40 pr_40">
            <router-link tag="button" class="btn bg_red mb_20" :to="{name:'login'}">Đăng nhập</router-link>
            <router-link tag="button" class="btn bg_greyish t_bold" :to="{name:'register'}">Đăng ký</router-link>
        </div>
        <div class="link-ignore">
            <a href="">Bỏ qua bước này</a>
        </div>
    </div>
</template>
<script>
    import AppHeadLogo from "@/components/Head/HeadLogo";
    export default {
        components: {
            AppHeadLogo
        }
    };
</script>
<style lang="scss">
   
</style>