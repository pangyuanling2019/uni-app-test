import { ISearchPage } from "@/types/AppTypes";

//详情
export interface IEnquiryDetail {
    id: string,
    "code": string,   // "询价单code",
    "shopCode"?: string,     // "门户编号",
    "shopName"?: string,     // "门户名称",
    "customerCode"?: string,     // "客户编码",
    "customerName"?: string,     // "客户名称",
    "typeNum"?: string,     // "商品类别数量",
    "status"?: string,     // "状态",
    "inquiryTime"?: string,     // "询价日期",
    "feedbackTime"?: string,     // "反馈日期",
    "inquiryDemand"?: string,     // "询价要求",
    "currencyCode"?: string,     // "币种",
    "currencyName"?: string,     // "币种",
    "stocKeeper"?: string,     // "库管",
    "reckoner"?: string,     // "结算员",
    "casher"?: string,     // "财务",
    "note"?: string,     // "备注"
    "relevanceOrderId"?: string,     // "备注"
    "details"?: IEnquiryMaterialDetail[]

}

//询价单商品详情
export interface IEnquiryMaterialDetail {
    key: string,  //自己用
    price?: string | number,  //供应商报价用
    "id"?: string,   // "询价单详情id",
    "inquiryOrderId"?: string,   // "询价单code",
    "code"?: string,   // "询价单code",
    "materialId"?: string,   // "物料id",
    "materialCode"?: string,   // "物料编号",
    "replaceCode"?: string,   // "替换号",
    "materialName"?: string,   // "物料名称",
    "materialEname"?: string,   // "物料名称",
    "typeCode"?: string,   // "物料类型",
    "typeName"?: string,   // "物料类型名称",
    "num"?: string | number,   // "询价数量",
    "model"?: string,   // "规格",
    "note"?: string,   // "备注"
    "isOffer"?: string,   // "是否报价"
    [key: string]: any
}

//新增
export interface IEnquiryInsert extends IEnquiryDetail {

}

//编辑
export interface IEnquiryUpdate extends IEnquiryInsert {
    id: string,
}

//搜索条件
export interface IEnquirySearchFields {
    "code"?: string,   // "询价单好",
    "customerName"?: string,   // "客户名称",
    "shopCode"?: string,   // "门店Code",
    "status"?: string,   // "状态"
}

export interface IEnquirySearch
    extends IEnquirySearchFields, ISearchPage {

}


/**
 * 详情
 */
//tab枚举
export enum IEnquiryTabEnum {
    BASE_DETAIL = "base_detail",  //询价详情
    SUPPLIER_PRICE = "supplier_price", //供应商报价
    RELEVANCE_TASK = "relevance_task", //关联单据
    FILES = "files"   //附件管理
}

/*************供应商报价****************/
export interface ISupplierPriceDialog {
    visible: boolean,
    mode: 'add' | 'edit'
}

//供应商报价详情
export interface ISupplierOfferDetails {
    id: string,
    "shopCode"?: string,  // "code",
    "shopName"?: string,  // "门户名称",
    "inquiryOrderCode"?: string,  // "1",
    "supplierId"?: string,  // "供应商id",
    "supplierCode"?: string,  // "SUP-M-00000414",
    "supplierName"?: string,  // "供应商名称",
    "contact"?: string,  // "联系人",
    "phone"?: string,  // "电话",
    "code"?: string,  // "电话",
    "status"?: string,  // "反馈日期",
    details?: ISupplierMaterialDetails[]
}

//供应商报价商品详情
export interface ISupplierMaterialDetails {
    key?: string,
    id?: string,
    "inquiryOrderDetailsId"?: string,    // "询价单详情id",
    "materialCode"?: string,    // "物料编号",
    "replaceCode"?: string,    // "替换号",
    "materialName"?: string,    // "物料名称",
    "materialEname"?: string,    // "物料名称",
    "typeCode"?: string,    // "物料类型",
    "typeName"?: string,    // "物料类型名称",
    "num"?: string | number,    // 5,
    "price"?: string | number,    // 99,
    "amount"?: string | number,    // 99,
    "model"?: string,    // "规格",
    "note"?: string,    // "备注"
    createTime?: string,
    createUser?: string,
    deleteFlag?: string,
    updateTime?: string,
    updateUser?: string,
    giftsNum?: string,
}

//供应商报价新增
export interface ISupplierOfferInsert extends ISupplierOfferDetails {
    "inquiryOrderCode"?: string,
}

//供应商报价编辑
export interface ISupplierOfferUpdate extends ISupplierOfferInsert {
    id: string,
}

//搜索条件
export interface ISupplierOfferSearchFields {

}

export interface ISupplierOfferSearch
    extends ISupplierOfferSearchFields, ISearchPage {

}