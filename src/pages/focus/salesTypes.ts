import { ISearchPage } from "../../types/AppTypes";

//详情
export interface ISalesDetail {
	id: string;
	code: string;
	offerCode?: string;
	shopCode?: string; // "门店编码",
	shopName?: string; // "门户名称",
	customerId?: string; // "客户id",
	customerCode?: string; // "客户编号",
	customerName?: string; // "客户名称",
	contact?: string; // "客户联系人",
	phone?: string; // "客户联系电话",
	customerTypeCode?: string; // "客户类型",
	customerTypeName?: string; // "客户类型名称 ",
	currency?: string; // "币种",
	typeNum?: string | number; // "发票类型",
	country?: string; // "贸易国别",
	status?: string; // "状态",
	rmbAmount?: string | number; // "人民币金额",
	goodsAmount: string | number; // "货值金额",
	addAmount: string | number; // "附加费",
	contractAmount: string | number; // "合同总金额",
	exchangeRate: string | number; // "汇率",
	discount?: string | number; // "整体上浮",
	clause?: string; // "价格条款",
	transportMode?: string; // "运输方式",
	destination?: string; // "目的地",
	shipment?: string; // "装货港",
	discharge?: string; // "卸货港",
	agentCompany?: string; // "代货公司",
	shippingMark?: string; // "唛头",
	advise?: string; // "审批意见",
	adviseOne?: string; // "审批意见1",
	deliveryTime?: string; // "出库日期",
	shippingTime?: string; // "发运日期",
	settlementTime?: string; // "结算日期",
	payTime?: string; // "结款日期",
	reckoner?: string; // "财务",
	insure?: string; // "保险",
	bentityCode?: string; // "实体编码",
	bentityName?: string; // "实体名称",
	note?: string; // "备注",
	batches?: string | boolean; // "分批",
	transship?: string | boolean; // "转船",
	relevanceOrderId?: string; // "备注",
	currencyCode?: string,
	details?: ISalesMaterialDetail[];
	detailsAdd?: ISalesDetailsAdded[];
	detailsPayment?: ISalesDetailMethod[];
}

//外贸商品信息
export interface ISalesMaterialDetail {
	key: string;
	num: string | number; // 1,
	price?: string | number; // 2,
	amount?: string | number; // "外卖总价",
	id?: string;
	materialId?: string; // "物料id",
	materialCode?: string; // "物料编号",
	materialName?: string; // "物料名称",
	materialEname?: string; // "物料名称英文",
	replaceCode?: string; // "替换号",
	typeCode?: string; // "物料类型",
	typeName?: string; // "物料类型名称",
	model?: string; // "规格",
	salePrice: string | number; // "云湖销售单价(人民币)",
	saleAmount: string | number; // "云湖销售总额(人民币)",
	tradePrice: string | number; // "外贸单价",
	tradeAmount: string | number; // "外贸总额(人民币)",
	customsCode?: string; // "海关商品编码",
	note?: string; // "备注"
	unitCode?: string;
	unitName?: string;
	totalTxt?: string; // "备注"
}
//新增
export interface ISalesInsert extends ISalesDetail { }

//编辑
export interface ISalesUpdate extends ISalesInsert {
	id: string;
}

//搜索条件
export interface ISalesSearchFields { }

export interface ISalesSearch extends ISalesSearchFields, ISearchPage { }

//加收费用
export interface ISalesDetailsAdded {
	key: string;
	amount: string | number; //      50
	code?: string; //    "询-999-21121400001"
	createTime?: string; //          "2021-12-14T20?:string,
	createUser?: string; //          null
	currencyCode?: string | number; //            "币种"
	currencyAmount?: string | number; //            "币种"
	currencyName?: string; //            "币种"
	deleteFlag?: string; //          0
	ename?: string; //     "加收英文"
	id?: string; //  "1"
	name?: string; //    "加收费用"
	orderNum?: string; //        0
	updateTime?: string; //          "2021-12-14T20?:string,
	updateUser?: string; //         // null
	totalTxt?: string; //         // null
}

//收汇方式
export interface ISalesDetailMethod {
	key: string;
	amount?: string | number; // 65
	around?: string; // "或前"
	code?: string; // "询-999-21121400001"
	createTime?: string; // "2021-12-14T20:45:38"
	createUser?: string; // null
	deleteFlag?: string; // 0
	id?: string; // "1"
	orderNum?: string; // 0
	paymentMethod?: string; // "收汇方式"
	proportion?: string; // "比例"
	updateTime?: string; // "2021-12-14T20:46:29"
	updateUser?: string; // null
}

/**
 * 详情s
 */
//tab枚举
export enum ISalesTabEnum {
	BASE_DETAIL = 'base_detail', //基本信息
	MATERIAL_INFO = 'material_info', //商品信息
	RELEVANCE_TASK = 'relevance_task', //关联单据
	FILES = 'files', //附件管理
	LOGISTICS_PROCESS = 'logistics_process', //物流进程
}

export interface ISalesExamine {
	id?: string; // "ecf65d81b424438f937565cee152a7f5",
	status?: string; // "0",
	advise?: string; // "审批意见1111"
	title?: string;
	code?: string;
}

export interface ISaleDescType {
	numAll: number,
	saleAmountAll: number,
	tradeAmountAll: number,
	addedAmountAll: number
}