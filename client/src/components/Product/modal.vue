<template>
<div class="productModal modal ">
        <div class="productModal--title modal-title t_center t_bold">Bạn có thể chọn sản phẩm khác ở đây</div>
        <div class="productModal--body modal-body">
             <div class="productModal--body-item"
                v-for="item in modals"
                :key="item.id"
             >
                <button @click="tabModal(item.name)" class="btn full_width bg_red t_bold"
                v-if="item.name==modal"   
                >{{item.name}}</button>
                 <button @click="tabModal(item.name)" class="btn full_width grey t_bold"
                v-else
                >{{item.name}}</button>
            </div>
        </div>
     
    </div>
</template>
<script>
   
    export default{
        props:['p_modal'],
        data(){
            return{           
                modal:this.p_modal,
                modals:[
                    {
                        id:0,
                        name:"Thức ăn",
                        
                    },
                    {
                        id:1,
                        name:"Đồ uống",
                        
                    },
                    {
                        id:2,
                        name:"Sản phẩm",
                        
                    },
                    {
                        id:3,
                        name:"Dịch vụ",
                      
                    },
                ]
            }
        },
        computed:{
             status: {
                get() { return this.itemstatus },
                set(value) {
                    this.itemstatus = value;
                }
                },
            checkName(name){
                if(name==this.modal){
                    return "bg_red";
                }else{
                    return "bg_greyish";
                }
            }
        },
        methods:{
          tabModal(name){
              this.p_modal=name;
              this.modal=name;
          }  
        }
    };
</script>
<style lang="">
    
</style>