<template>
	<div class="detailProduct--grid p_10">
		<span class="t_bold">Hình ảnh</span>
		<div class="detailProduct--grid-img" v-if="statusLibraryImage">
			<div class="grid--item">
				<img src="../../assets/images/slider-bg.png" />
			</div>
			<div class="grid--item">
				<img src="../../assets/images/slider-bg.png" />
			</div>
			<div class="grid--item">
				<img src="../../assets/images/slider-bg.png" />
			</div>
			<div class="grid--item">
				<img src="../../assets/images/slider-bg.png" />
			</div>
		</div>
		<div class="detailProduct--empty t_center" v-else>
			Không có hình ảnh khả dụng cho sản phẩm này
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			statusLibraryImage: true
		};
	}
};
</script>

<style></style>
