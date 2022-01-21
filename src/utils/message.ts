/**
 * 提示框工具类
 */
class MessageService {
	private defaultTip: string;
	private defaultConfirmContent: string;
	private defaultLoadingTip: string;

	constructor() {
		this.defaultTip = "提示信息";
		this.defaultConfirmContent = "确认操作吗？";
		this.defaultLoadingTip = "确认操作吗？";
	}

	/**
	 * alert弹出框
	 * @param {String} message    //提示文本
	 */
	alert(message: string) {
		uni.showModal({
			title: this.defaultTip,
			content: message + "",
			showCancel: false
		})
	}

	/**
	 * 打开确认取消弹出框
	 * @param {string} message //提示文本
	 * @param {function} okFun //确认方法
	 * @param {function} cancelFun //关闭方法
	 */
	confirm(message: any, title: any, okFun: () => any, cancelFun?: () => any | undefined) {
		uni.showModal({
			title: title || this.defaultTip,
			content: message || this.defaultConfirmContent,
			showCancel: cancelFun ? true : false,
			success(res) {
				if (res.confirm) {
					okFun && okFun();
				} else if (res.cancel) {
					cancelFun && cancelFun();
				}
			}
		})
	}

	/**
	 * 显示Toast提示
	 * @param {string} message //提示文本
	 */
	toast(message = this.defaultTip) {
		uni.showToast({
			title: message,
			icon: 'none',
			duration: 2000
		})
	}

	/**
	 * 吐司水印提示框
	 */
	tipToast(message = this.defaultTip, duration = 2000) {
		uni.showToast({
			title: message,
			// icon: 'success',
			duration: duration
		})
	}

	/**
	 * 显示loading小提示，自动关闭
	 */
	tipLoading(message = this.defaultLoadingTip, duration = 2000) {
		uni.showLoading({
			title: message,
		})
		setTimeout(function () {
			uni.hideLoading()
		}, duration)
	}

	/**
	 * 显示loading动画，需要调用closeLoading()手动关闭
	 */
	loading(message = this.defaultLoadingTip) {
		uni.showLoading({
			title: message,
			mask: true,
		})
		uni.showNavigationBarLoading()
	}

	/**
	 * 关闭loading
	 */
	closeLoading() {
		uni.hideLoading();
		uni.hideNavigationBarLoading()
	}
}

export const yhMessage = new MessageService();