<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
				<icon class="iconfont icon-biaotizhishi go-login-navigat-arrow navigat-arrow"  v-if="!login"></icon>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<icon class="iconfont icon-zihuanjie2x list-icon"></icon>
				<text class="list-text">账号管理</text>
				<icon class="iconfont icon-mulu navigat-arrow"></icon>
			</view>
			<view class="center-list-item">
				<icon class="iconfont icon-zihuanjie2x list-icon"></icon>
				<text class="list-text">新消息通知</text>
				<icon class="iconfont icon-mulu navigat-arrow"></icon>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<icon class="iconfont icon-zihuanjie2x list-icon"></icon>
				<text class="list-text">帮助与反馈</text>
				<icon class="iconfont icon-mulu navigat-arrow"></icon>
			</view>
			<view class="center-list-item">
				<icon class="iconfont icon-zihuanjie2x list-icon"></icon>
				<text class="list-text">服务条款及隐私</text>
				<icon class="iconfont icon-mulu navigat-arrow"></icon>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item">
				<icon class="iconfont icon-zihuanjie2x list-icon"></icon>
				<text class="list-text">关于应用</text>
				<icon class="iconfont icon-mulu navigat-arrow"></icon>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	interface IUserType{
		login: boolean,
		avatarUrl:string,
		uerInfo: object
	}
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				uerInfo: {}
			}
		},
		methods: {
			goLogin() {
				const {login} = this as any
				if (login) {
					console.log('点击前往登录');
				}
			}
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/text-icon.ttf') format('truetype');
	}

	page {
		background-color: #f8f8f8;
	}

	/* #endif*/

	/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */
	/* #ifdef MP-TOUTIAO */
	text :not(view) {
		font-family: texticons;
	}

	/* #endif */
	view{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-shrink: 0;
		flex-shrink: 0;
		-webkit-box-flex: 0;
		-webkit-flex-grow: 0;
		flex-grow: 0;
		-webkit-flex-basis: auto;
		flex-basis: auto;
		-webkit-box-align: stretch;
		-webkit-align-items: stretch;
		align-items: stretch;
		-webkit-align-content: flex-start;
		align-content: flex-start;
	}
	.center {
		flex: 1;
		flex-direction: column;
		background-color: #f8f8f8;
	}

	.logo {
		width: 750rpx;
		height: 240rpx;
		padding: 20rpx;
		background-color: #2F85FC;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
	}

	.logo-title {
		height: 150rpx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20rpx;
	}

	.uer-name {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.go-login-navigat-arrow {
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150rpx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 20rpx;
	}

	.center-list {
		flex-direction: column;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 750rpx;
	}

	.center-list-item {
		height: 90rpx;
		width: 750rpx;
		flex-direction: row;
		padding: 0rpx 20rpx;
	}

	.border-bottom {
		border-bottom-width: 1rpx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #2F85FC;
		text-align: center;
		font-family: texticons;
		margin-right: 20rpx;
	}

	.list-text {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #555;
		flex: 1;
	}

	.navigat-arrow {
		height: 90rpx;
		width: 40rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>
