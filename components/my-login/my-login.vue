<template>
	<view style="background-color: #ffffff;">
		<my-navbar></my-navbar>
		<view style="margin: 100rpx;margin-top: 200rpx;">

			<u-row>
				<u-col span="2">
					<u-icon color="#1daa07" name="weixin-circle-fill" size="100"></u-icon>
				</u-col>
				<u-col span="10">
					<view style="padding-top: 15px;margin-left: 10px;">
						<text style="font-size: 18px;font-weight: 700;">米娜桑の自习室：</text>
						<text style="font-weight: 600;font-size: 16px;">申请</text>
					</view>
				</u-col>
			</u-row>
			<view style="margin: 10px 0px;">
				<u-line />

			</view>
			<view style="margin-top: 10px; font-weight: 500;font-size: 16px;font-weight: 600;">
				<text>获取你的昵称、头像、性别和手机号码</text>
			</view>
			<u-line />
			<view style="margin-top: 60px;font-weight: 600;font-size: 13px;">
				<text>同意</text>
				<text style="color: #2B85E4;">《用户授权协议》</text>
			</view>
			<view style="margin-top: 20px;" class="u-text-center">
				<u-button @click="back" size="medium" style="margin-right: 30px;">拒绝</u-button>
				<u-button type="primary" @click="getUserInfo" size="medium">同意</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		login
	} from '@/config/api.js'
	export default {
		name: 'my-login',
		data() {
			return {

			}
		},
		methods: {
			login() {
				const that = this
				uni.login({
					provider: 'weixin',
					success(res) {
						const code = {
							code: res.code
						}
						login(code, {
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							}
						}).then((data) => {
							uni.setStorageSync('token', data.token)

						}).catch((msg) => {

						})
					}
				})
			},
			getUserInfo() {
				uni.getUserProfile({
					desc: "获取用户信息",
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>

</style>
