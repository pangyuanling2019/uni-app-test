import { IPage } from "@/types/AppTypes";
import { getToken } from "@/utils/constants";
import { httpRequest } from '@/utils/request';

export interface IRelevanceOrder {
    code?: string,  // "X-UTYT-2105"
    createUser?: string,  // "管理员"
    exWarehouseTime?: string,  // null
    name?: string,  // "陕西同德汽车配件销售有限公司（中心库)"
    shopName?: string,  // "天津斯堪尼亚"
    signingTime?: string,  // null
    status?: string,  // "inquiry.init"
    type?: string,  // "询价单"
}

export interface IFileInfo {
    id?: string
    "code"?: string,   // "单号",
    "name"?: string,   // "我是文件名",
    "typeCode"?: string,   // "采购合同",
    "typeName"?: string,   // "采购",
    "md5"?: string,   // "出库日期"
}
export interface IFileInsert extends IFileInfo {

}


export interface IAccountType {
    abatementAmount?: string,           // null
    accountTypeCode?: string,           // "account-type.credit"
    accountTypeName?: string,           // "授信账户"
    availableAmount?: number,           // 0
    beCode?: string,           // "dhzd33"
    beName?: string,           // "德恒直达3"
    branch?: string,           // "ci"
    categoryCode?: string,           // null
    categoryName?: string,           // null
    code?: string,           // "ACC-PfeH-00000016"
    createTime?: string,           // "2021-02-20 14?:string,           //59?:string,           //43"
    creditAmount?: number,           // 0
    creditFlag?: number,           // 1
    key?: string,           // "3b1f307f1247fc58f49d69320e93238c"
    name?: string,           // "测试5"
    note?: string,           // null
    orgCode?: string,           // "yh.auto-service.pioneer"
    orgName?: string,           // "云豪创业空间"
    partnerCode?: string,           // "CUS-M-00000005"
    partnerName?: string,           // "上海繁沃汽车服务有限公司"
    partnerTypeCode?: string,           // "user-type.customer"
    remainingAmount?: number,           // 0
    status?: number,           // 0
    usedAmount?: number,           // 0
}

/**
 * 结算
 */

export interface IPayMethod {
    key?: string,
    available?: number,
    payMethodCode: string,
    payMethodName: string,
    accountCode?:string,
    accountName?:string,
    payAmount: string,
    payee: string,
    note?: string,
}

export interface ISettleParams {
    shopId?: string,
    shopCode?: string,
    id: string,
    payType: string,
    accountCode?: string,    //"账户编码", 
    amount?: string | number //"金额",
    details: IPayMethod[],
    note?: string,
}

class PublicService {

    //关联单据通用接口
    //所有单据中增加 关联单据字段id
    async relevanceOrder(relevanceOrderId: string) {
        const appPageUrl = `/gtm/base/relevanceOrder/findById/${relevanceOrderId}`;
        return await httpRequest.get<IRelevanceOrder[]>(appPageUrl);
    }

    //查询附件
    async getFileList(relevanceOrderId: string) {
        const appPageUrl = `/gtm/appendix/findById/${relevanceOrderId}`;
        return await httpRequest.get<IFileInfo[]>(appPageUrl);
    }
    //删除附件
    async removeFile(id: string) {
        const appPageUrl = `/gtm/appendix/remove/${id}`;
        return await httpRequest.get<boolean>(appPageUrl);
    }
    //添加附件
    async insertFile(vo: IFileInsert) {
        const appPageUrl = `/gtm/appendix/insert`;
        return await httpRequest.post<string>(appPageUrl, vo);
    }
    // //下载附件
    // async downloadFile(md5: string) {
    //     const noticeUrl = `/fsrv/fetch/${md5}?Authorization=${getToken()}`;
    //     // return await httpRequest.getFile(noticeUrl, { baseURL: "http://81.70.248.140:8585" });
    //     return await httpRequest.getFile(noticeUrl);
    // }


    /**财务接口 */
    //查询特定得收款账户
    accountFind(params: object) {
        const apiUrl = "/fms/account/find";
        return httpRequest
            // .post<IPage<IAccountType>>(apiUrl, params);
            .post<IAccountType[]>(apiUrl, params);
    }

}

export const publicService = new PublicService();
