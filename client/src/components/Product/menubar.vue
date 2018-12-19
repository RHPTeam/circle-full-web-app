<template>
     <div class="menuBar">
            <div class="menuBar--list height_full">
                <div class="list height_full">
                    <span @click="statusCate()" class="list--item">Tất cả</span>
                    <span class="list--item"
                        v-for="item in cates"
                        v-if="item.cate_modal==modal"
                        :key="item.id"
                        @click="tabCate(item.cate_name)"
                    >{{item.cate_name}}</span>
                    
                </div>
            </div>
            <div class="menuBar--icon t_center">
                <i class="icon fas fa-list-ul"></i>
            </div>
        </div>
        
</template>
<script>
     export default{
        props:['modal','tabCate','statusCate'],
        data(){
            return {
                cates:[
                    {
                        id:0,
                        cate_name:"Bánh mì",
                        cate_modal:"Thức ăn",
                    },
                    {
                        id:1,
                        cate_name:"Mì trộn",
                        cate_modal:"Thức ăn",
                    },
                    {
                        id:2,
                        cate_name:"Mì xúc xích",
                        cate_modal:"Thức ăn",
                    },
                    {
                        id:3,
                        cate_name:"Cơm",
                        cate_modal:"Thức ăn",
                    },
                    {
                        id:4,
                        cate_name:"Froster",
                        cate_modal:"Đồ uống",
                    },
                    {
                        id:5,
                        cate_name:"Milk",
                        cate_modal:"Sản phẩm",
                    },
                    {
                        id:6,
                        cate_name:"Bánh kẹo",
                        cate_modal:"Sản phẩm",
                    },
                     {
                        id:7,
                        cate_name:"Thanh toán bằng thẻ",
                        cate_modal:"Dịch vụ",
                    },
                    {
                        id:8,
                        cate_name:"ATM",
                        cate_modal:"Dịch vụ",
                    }
                    
                ]
            }
        },
        
    };
</script>
<style lang="">
    
</style>