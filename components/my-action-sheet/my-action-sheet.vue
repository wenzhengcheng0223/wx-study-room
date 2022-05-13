<template>
	<view>
		<u-action-sheet :show="show" @close="close" title="切换门店" icon="close" :iconSize="36" :round="40"
			:safeAreaInsetBottom="true">
			<view style="margin-top: 40rpx;"></view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<view v-for="(item,index) in list" :key="index" @click="click(item)">
					<view class="cel-item">
						<view style="padding: 30rpx 24rpx;height: 100%;">
							<view style="display: flex;justify-content: flex-start;align-items: center;">
								<view style="">
									<u-icon size="50" name="/static/index/store.png" color="#e66f57"></u-icon>
								</view>
								<view
									style="display: flex;justify-content: space-between;align-items: baseline;width: 100%;">
									<view style="width: 65%;margin-left: 10rpx;">
										<u--text :lines="1" :bold="true" size="32rpx" :selectable="false" align="left"
											:text="item.roomName" />
									</view>
									<view style="width: 35%;">
										<u--text :lines="1" :bold="true" size="30rpx" :selectable="false" align="right"
											color="#87dedb" text="08:00-23:00" />
									</view>
								</view>
							</view>
							<view style="display: flex;justify-content: space-between;margin-top: 10rpx;">
								<view style="">
									<u--text :lines="1" :bold="false" size="24rpx" :selectable="false" color="#888888"
										align="left" :text="item.roomAddr" />
								</view>
								<view style="width: 20%;margin-left: 2rpx;">
									<u--text :lines="1" :bold="true" size="24rpx" :selectable="false" color="#c0c0c0"
										align="right" text=" | 100km" />
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

		</u-action-sheet>
	</view>

</template>

<script>
	export default {
		name: "my-action-sheet",
		props: {
			show: {
				default: false,
				type: Boolean
			},
			list: {
				type: Array
			}
		},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		methods: {
			close() {
				console.log("my-action-sheet close" + this.show)
				this.$emit('closeShow')
			},
			upper: function(e) {

			},
			lower: function(e) {

			},
			scroll: function(e) {

				this.old.scrollTop = e.detail.scrollTop
			},
			click(e) {
				console.log(e)
				this.$store.commit('setStore', e)
				uni.setStorageSync('store', JSON.stringify(e))
				this.$emit('closeShow')
			}
		}

	}
</script>

<style lang="scss">
	.scroll-Y {
		max-height: 640rpx;
	}

	.cel-item {
		// position: relative;
		height: 160rpx;
		border-radius: 20rpx;
		border: 2rpx solid #d4d9e3;
		margin: auto 40rpx;
		margin-bottom: 20rpx;
	}
</style>
