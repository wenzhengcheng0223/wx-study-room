<template>
	<view>
		<u-action-sheet :show="show" @close="close" title="切换门店" icon="close" :iconSize="36" :round="40" :safeAreaInsetBottom="true">
			<view  style="margin-top: 40rpx;"></view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<u-cell-group :border="false" v-for="index in 5" :key="index">
					<view class="cel-item">
						<u-cell :border="false" :name="index" @click="click">
							<view slot="icon" style="position: absolute; top: 52rpx; left: 20rpx;">
								<u-icon size="64" name="map-fill" color="#e66f57"></u-icon>
							</view>
							<view slot="title" style="position: absolute; top: 50rpx;left: 90rpx; width: 360rpx;">
								<u--text :lines="1" :bold="true" size="36rpx" :selectable="false"
									text="MiNa（重庆）大学城熙街店大学城店" />
							</view>
							<view slot="label" style="width: 420rpx;position: absolute; bottom: 55rpx;left: 75rpx;">
								<u--text :lines="1" :bold="false" size="24rpx" :selectable="false" color="#888888"
									text="重庆市沙坪坝区大学城重庆科技学院虎溪校区" />

							</view>
							<view slot="value" style="width: 500rpx;">
								<view style="position: absolute; top: 50rpx;right: 20rpx;">
									<u--text :lines="1" :bold="true" size="34rpx" :selectable="false" color="#87dedb"
										text="08:00-23:00" />
								</view>
								<view style="position: absolute; bottom: 55rpx;right: 20rpx;">
									<u--text :lines="1" :bold="true" size="26rpx" :selectable="false" color="#c0c0c0"
										text="'| '620.2km" />
								</view>
							</view>
						</u-cell>
					</view>

				</u-cell-group>
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
			click(name){
				console.log(name)
				this.$emit('closeShow')
			}
		}

	}
</script>

<style lang="scss">
	.scroll-Y {
		height: 640rpx;
	}
	.cel-item{
		position: relative;
		height: 200rpx;
		border-radius: 20rpx;
		border: 2rpx solid #d4d9e3;
		margin: auto 40rpx;
		margin-bottom: 20rpx;
	}
</style>
