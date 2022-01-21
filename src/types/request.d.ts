
//request请求
export type IRequestConfig<T = any> = {
  /** 请求方式 */
  method?: 'GET' | 'POST'
  /** 传递的数据 */
  data?: T
  /** 父路径 */
  baseUrl?: string
  /** 路径 */
  url?: string
  /** 请求头 */
  header?: any
  /** 是否加载动画 */
  loading?: boolean
  /** 加载动画文案 */
  loadingText?: string,
  /** 传递的data数据类型 */
  dataType?: string
  /** 超时时间 */
  timeout?: number
}

// export type IRequestHeader {
// 	"content-length"?: string,
// 	"content-type"?: string,
// 	[key:string]:any
// }

export interface IResponseSuccessRes<T> {
  /**
   * 开发者服务器返回的数据
   */
  data: T;
  /**
   * 开发者服务器返回的 HTTP 状态码
   */
  statusCode: number;
  /**
   * 开发者服务器返回的 HTTP Response Header
   */
  header: any;
  /**
   * 开发者服务器返回的 cookies，格式为字符串数组
   */
  cookies: string[];
}


/**
 * request请求
 */
export type IRequest = <T>(
  requestCfg: IRequestConfig
) => Promise<IResponseSuccessRes<T>>


