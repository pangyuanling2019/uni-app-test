import { ISalesDetail, ISalesInsert, ISalesSearch, ISalesUpdate, ISalesExamine } from "./salesTypes";
import { httpRequest } from "../../utils/request";
import { IPage } from "../../types/AppTypes";


 class SalesService {
    async page(searchVo: ISalesSearch) {
        const apiUrl = "/gtm/sale/listPage";
        return await httpRequest.post<IPage<ISalesDetail>>(apiUrl, searchVo);
    }
    async pageBySupplier(searchVo: { "code": string, "shopCode": string }, config: object = {}) {
        const apiUrl = "/gtm/sale/selectBySupplier";
        return await httpRequest.post<ISalesDetail[]>(apiUrl, searchVo, config);
    }
    async one(id: string) {
        const apiUrl = `/gtm/sale/findByIdOrCode/${id}`;
        return await httpRequest.get<ISalesDetail>(apiUrl);
    }
    async insert(insertVo: ISalesInsert) {
        const apiUrl = "/gtm/sale/insert";
        return await httpRequest.post<string>(apiUrl, insertVo);
    }
    async update(updateVo: ISalesUpdate) {
        const apiUrl = "/gtm/sale/update";
        return await httpRequest.post<string>(apiUrl, updateVo);
    }
    // 总监审核
    async examineManager(Vo: ISalesExamine) {
        const apiUrl = "/gtm/sale/examineManager";
        return await httpRequest.post<boolean>(apiUrl, Vo);
    }
    // 财务审核
    async examineReckoner(Vo: ISalesExamine) {
        const apiUrl = "/gtm/sale/examineReckoner";
        return await httpRequest.post<boolean>(apiUrl, Vo);
    }
    // 提交审核
    async submitSales(id: string) {
        const apiUrl = `/gtm/sale/submit/${id}`;
        return await httpRequest.get<boolean>(apiUrl);
    }
    //作废
    async disable(id: string) {
        const apiUrl = `/gtm/sale/disable/${id}`;
        return await httpRequest.get<boolean>(apiUrl);
    }
    //出运
    async whConfirm(vo: { "code": string, "shopCode": string }) {
        const apiUrl = `/gtm/sale/whConfirm`;
        return await httpRequest.post<boolean>(apiUrl, vo);
    }
    //发运
    async transferShipping(vo: { "code": string, "shopCode": string }) {
        const apiUrl = `/gtm/sale/transferShipping`;
        return await httpRequest.post<string>(apiUrl, vo);
    }
}

export const salesService = new SalesService();
