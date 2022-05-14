<template>

	<view class="u-page__item">
		<u-navbar :leftText="leftText" :show="show" :title="title" :autoBack="autoBack" :custom="custom"
			:bgColor="bgColor" placeholder="true" @leftClick="showMenu" v-if="custom">
			<view class="u-nav-slot my-text" slot="left">
				<view style="width: 260rpx;">
					<u--text :lines="1" :bold="true" size="36" :selectable="false" :text="storeName" />
				</view>

			</view>
			<view class="u-nav-slot" slot="center" @click="showMenu">
				<u--text :bold="true" size="28" color="#35a5ed" :selectable="false" text="切换" />
				<u-icon name="arrow-right" color="#35a5ed" size="32"></u-icon>
			</view>
		</u-navbar>
		<u-navbar :leftIcon="leftIcon" :leftText="leftText" :title="title" :autoBack="autoBack" :custom="custom"
			:bgColor="bgColor" placeholder="true" :titleStyle="titleStyle" :leftIconSize="leftIconSize"
			:leftIconColor="leftIconColor" v-else="custom">

		</u-navbar>


	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	export default {
		name: "my-navbar",
		props: {
			leftText: {
				default: ' ',
				type: String
			},
			title: {
				default: " ",
				type: String
			},
			custom: {
				default: false,
				type: Boolean
			},
			autoBack: {
				default: true,
				type: Boolean
			},
			bgColor: {
				default: "#f8f8f8",
				type: String
			},
			leftIcon: {
				default: "",
				type: String
			},
			show: {
				default: false,
				type: Boolean
			},
			titleStyle: {
				type: [String, Object],
				default: uni.$u.props.navbar.titleStyle
			},
			// 左侧返回图标的大小
			leftIconSize: {
				type: [String, Number],
				default: uni.$u.props.navbar.leftIconSize
			},
			// 左侧返回图标的颜色
			leftIconColor: {
				type: String,
				default: uni.$u.props.navbar.leftIconColor
			},
			storeName: {
				type: String,
				default: '请选择门店'
			}
		},
		data() {
			return {};
		},
		computed: {
			...mapState(['store'])
		},
		methods: {
			showMenu() {
				// this.show = true
				console.log("navbar showMenu " + this.show)

				this.$emit('changeShow')

			},
			leftClick() {
				console.log("navbar")
				this.$emit('leftClick')
			}
		},
		mounted() {
			console.log("mounted")
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: $u-bg-color;
	}

	/* #endif */

	.u-page {
		padding: 0;
		flex: 1;
		background-color: $u-bg-color;

		&__item {

			&__title {
				color: $u-tips-color;
				background-color: $u-bg-color;
				padding: 15px;
				font-size: 15px;

				&__slot-title {
					color: $u-primary;
					font-size: 14px;
				}
			}
		}
	}

	.u-nav-slot {
		@include flex;

		align-items: center;
		justify-content: space-between;
		border-width: 0.5px;
		border-radius: 100px;
		border-color: $u-border-color;
		padding: 3px 7px;
		opacity: 0.8;
	}

	.my-text {
		color: #000000 !important;
		opacity: 1 !important;
	}
</style>
