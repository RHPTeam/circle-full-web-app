<template>
	<div class="product">
		<app-header-background />
		<app-menu-bar :modal="modal" :tabCate="tabCate" :statusCate="statusCate"/>
		<app-products :cate="cate"  :modal="modal" :stt_cate="stt_cate"/>
		<app-modal :modal="modal" :tabModal="tabModal"/>
		<app-nav />
	</div>
</template>

<script>
import AppHeaderBackground from "@/components/Head/HeadBackground";
import AppMenuBar from "@/components/Product/menubar";
import AppProducts from "@/components/Product/products";
import AppModal from "@/components/Product/modal";
import AppNav from "@/components/Footer/Navbar";

export default {
	components: {
		AppHeaderBackground,
		AppMenuBar,
		AppProducts,
		AppModal,
		AppNav
	},
	data:function(){
		return{
			modal:"Thức ăn",
			cate: "drink",
			stt_cate:true,
		}
	},
	computed:{
		
	},
	methods:{
		tabModal(name){
			this.modal=name;
			this.stt_cate=true;
		},
		tabCate(name){
			this.cate=name;
			this.stt_cate=false;
		},
		statusCate(){
			this.stt_cate=true;
		}
	}
	
};
</script>

<style></style>
