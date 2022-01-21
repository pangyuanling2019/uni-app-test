import { IRequest, IRequestConfig, IResponseSuccessRes } from "../types/request"
import { getRequestUrl } from "./constants"
import { storage, IStorageEnum } from "./storage";
import { IRet } from "../types/AppTypes"
import { yhMessage } from "./message"

//储存request请求map
const requestList: Map<string, UniApp.RequestTask> = new Map()

class HttpRequest {

	private inst: IRequest;

	constructor() {
		let defaultCfg: IRequestConfig = {
			baseUrl: getRequestUrl(),
			timeout: 10000,
			dataType: 'json',
			loading: true,
			loadingText: "拼命加载中。。。"
		}
		this.inst = (requestCfg: IRequestConfig) => this.createRequest({ ...defaultCfg, ...requestCfg })
	}


	private successHandler<T>(res: IResponseSuccessRes<IRet<T>>, resolve: (params?: any) => void, reject: (params?: any) => void) {
		if (res.statusCode === 200) {
			resolve && resolve(res);
		} else {
			this.errorHandler(res, reject)
		}
	}

	private errorHandler<T>(res: IResponseSuccessRes<IRet<T>>, reject: (params?: any) => void) {
		if (res.statusCode === 404) {
			yhMessage.alert("服务不存在【404】")
			reject("服务不存在【404】");
		} else if (res.statusCode === 500 && res.data) {
			yhMessage.alert(res.data.retMsg);
			reject(res.data.retMsg);
		}
	}

	private createRequest<T>({ method, data, baseUrl, url, header = {}, loading, loadingText, dataType, timeout }: IRequestConfig): Promise<IResponseSuccessRes<T>> {
		const that = this;
		loading && yhMessage.loading(loadingText)
		return new Promise((resolve, reject) => {
			const requestClose: UniApp.RequestTask = uni.request({
				/** 服务器接口地址 */
				url: `${baseUrl}${url}`,
				/** 请求的参数 */
				data,
				/** 请求类型 */
				method,
				/** 超时时间 */
				timeout,
				/** 请求头 */
				header: {
					...header,
					Authorization: storage.get<string>(IStorageEnum.TOKEN),
					// Authorization: "ce86bf314fda435db1a7e2ddc06c228a",
				},
				/** 返回数据类型 */
				dataType,
				success: (res) => {
					that.successHandler(res as IResponseSuccessRes<IRet<T>>, resolve, reject);
					console.log(res, "成功");
				},
				fail: (err) => {
					reject(err)
					console.log(err, "错误")
				},

				//最终执行
				complete: (res) => {
					// 移除request请求
					// requestList.delete(requestKey)
					yhMessage.closeLoading()
					console.log(res, "每次调用")
				},
			})
			//先关闭上一个同路径同参数请求
			// requestList.get(requestKey)?.abort()
			// //存储请求
			// requestList.set(requestKey, requestClose)
		})
	}

	private responseTypeCheck(res: any) {
		const resType = res?.["content-type"];
		if (resType !== "application/json") {
			console.log("只支持json返回数据!");
		}
	}

	async post<Res>(url: string, data?: any, requestData: IRequestConfig = {}) {
		let ret = await this.inst<IRet<Res>>({
			...requestData,
			method: 'POST',
			url,
			data
		});
		this.responseTypeCheck(ret.header);
		return ret.data;
	}
	async get<Res>(url: string, requestData: IRequestConfig = {}) {
		let ret = await this.inst<IRet<Res>>({
			...requestData,
			method: 'GET',
			url,
		});
		this.responseTypeCheck(ret.header);
		return ret.data;
	}
}

export const httpRequest = new HttpRequest();
