import { IPage, ISearchPage, ISearchPageField } from "@/types/AppTypes";
import { httpRequest } from '@/utils/request';

export interface IShopDetail {
    id: string,// "9c7daf6085eed60019fad6647cbe25bc"
    code: string,// "SHOP-M-00000102"
    orderNum?: string,// 0
    deleteFlag?: string,// 0
    createTime?: string,// [2021, 12, 11, 13, 49, 38]
    updateTime?: string,// [2021, 12, 11, 13, 49, 38]
    createUser?: string,// "郝磊"
    updateUser?: string,// null
    branch?: string,// "gtm"
    ver?: string,// 1
    enable?: string,// 1
    orgCode?: string,// "yh.foreign"
    orgName?: string,// "海外业务管理公司"
    name: string,// "云湖门店"
    contact?: string,// "小小"
    phone?: string,// "150"
    address?: string,// "北京总部"
    categoryCode?: string,// "shop-type-003"
    categoryName?: string,// "配件类"
    currency?: string,// "currency-002"
    currencyName?: string,// "人民币"
    nature?: string,// "shop-nature-001"
    natureName?: string,// "自有"
    region?: string,// "shop-area-003"
    regionName?: string,// "天津"
    status?: string,// 0
    note?: string,// "11"
    details: {
        shopCode: string,     // "备注",
        bentityCode: string,     // "实体编码",
        bentityName: string,     // "实体名称"
    }[], 
}

//搜索条件
export interface IShopSearchFields {
    branch?: string,
}

export interface IShopSearch extends IShopSearchFields, ISearchPageField { }

class MdmService {
    async getMdmShop(searchVo: IShopSearch) {
        const appPageUrl = `/md/shop/page`;
        return await httpRequest.post<IPage<IShopDetail>>(appPageUrl, searchVo);
    }
}

export const mdmService = new MdmService();
