const ENV: "TEST" | "DEV" | "PROD" = "TEST";

//API请求环境
const baseRequestUrl = {
	"DEV": "http://81.70.105.136:9323",
	"TEST": "http://api-2.laoniuche.cn",
	"PROD": "https://api-2.yunhaogroup.com"
}
const getRequestUrl = () => {
	// console.log(baseRequestUrl[ENV] + url)
	return baseRequestUrl[ENV];
};

/** 获取用户token */
const getToken = () => {
	return uni.getStorageSync('token')
};
/** 存储用户token */
const setToken = (token: string) => {
	uni.setStorageSync('token', token)
};

// /** 获取用户信息 */
// const getUserInfo = () => {
// 	return wx.getStorageSync('userInfo') || {}
// };
// /** 存储用户信息 */
// const setUserInfo = (userInfo) => {
// 	wx.setStorageSync('userInfo', userInfo)
// }
// /** 获取用户异常报餐信息 */
// const getUserErrInfo = () => {
// 	return wx.getStorageSync('userErrInfo') || {}
// };
// /** 存储用户异常报餐信息 */
// const setUserErrInfo = (userInfo) => {
// 	wx.setStorageSync('userErrInfo', userInfo)
// }
// /** 获取用户餐厅信息 */
// const getUserCanteenId = () => {
// 	return wx.getStorageSync('canteenId')
// };
// /** 存储用户餐厅信息 */
// const setUserCanteenId = (canteenId) => {
// 	wx.setStorageSync('canteenId', canteenId)
// }
// /** 获取系统字典树某一项 */
// const getDictTreeOne = (code) => {
// 	let dictTree = wx.getStorageSync('dict') || [];
// 	let treeOne = forFind(dictTree, code, "code");
// 	return treeOne ? treeOne.children || [] : [];
// };
// /** 存储系统字典树 */
// const setDictTree = (dictTree) => {
// 	wx.setStorageSync('dict', dictTree)
// }

// /**
//  * 跳转登录
//  */
// const gotoLogin = () => {
// 	wx.setStorageSync('token', '')
// 	wx.reLaunch({
// 		url: '/pages/login/login'
// 	})
// }

export {
	getToken,
	setToken,
	// getUserInfo,
	// setUserInfo,
	getRequestUrl,
	// gotoLogin,
	// getDictTreeOne,
	// setDictTree,
	// getUserCanteenId,
	// setUserCanteenId,
	// getUserErrInfo,
	// setUserErrInfo
}