<template>
    <div class="header bg_red">
        <div class="header--subpage width_full">
            <i class="icon color_white fas fa-chevron-left" v-if="hideBack"></i>
            <div class="header--subpage-title t_center t_bold color_white">{{changeTitlePage}}</div>
            <i class="icon color_white fas fa-search" v-if="hideSearch"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            changeTitlePage() {
                if(this.$route.path === '/cart') {
                    return "Giỏ hàng";
                }
                if(this.$route.path === '/cart-info') {
                    return "Thông tin giao hàng";
                }
                if(this.$route.path === '/cart-finish') {
                    return "Hoàn tất";
                }
            },
            hideSearch() {
                return this.$route.path === '/history';
            },
            hideBack() {
                return this.$route.path === '/cart' || this.$route.path === '/cart-info';
            }
        }
    }
</script>

<style scoped>

</style>