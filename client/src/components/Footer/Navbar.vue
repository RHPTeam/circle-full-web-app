<template>
	<div class="navbar">
		<ul class="navbar-nav hide-nav-text">
			<router-link
				tag="li"
				class="nav-item"
				:to="{ name: 'home' }"
				active-class="active"
				exact
			>
				<a href="">
					<i class="fas fa-home"></i> <span class="menu-text">Trang chủ</span>
				</a>
			</router-link>
			<router-link
				tag="li"
				class="nav-item"
				:to="{ name: 'products' }"
				active-class="active"
			>
				<a href="">
					<i class="fas fa-cookie-bite"></i>
					<span class="menu-text">Sản Phẩm</span>
				</a>
			</router-link>
			<router-link
				tag="li"
				class="nav-item"
				:to="{ name: 'cart' }"
				active-class="active"
			>
				<a href="">
					<i class="fas fa-cart-plus"></i>
					<span class="menu-text">Giỏ hàng</span>
				</a>
			</router-link>
			<router-link
				tag="li"
				class="nav-item"
				:to="{ name: 'promotion' }"
				active-class="active"
			>
				<a href="">
					<i class="fas fa-gift"></i> <span class="menu-text">Khuyến mãi</span>
				</a>
			</router-link>
			<router-link
				tag="li"
				class="nav-item"
				:to="{ name: 'account' }"
				active-class="active"
			>
				<a href="">
					<i class="fas fa-bars"></i> <span class="menu-text">Tài khoản</span>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script></script>

<style></style>
