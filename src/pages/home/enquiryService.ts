import { IPage, ISearchPage } from "@/types/AppTypes";
import { httpRequest } from '@/utils/request';
import { IEnquirySearch, IEnquiryDetail, IEnquiryInsert, IEnquiryUpdate, ISupplierOfferSearch, ISupplierOfferDetails, ISupplierOfferInsert, ISupplierOfferUpdate } from './enquiryTypes';



class EnquiryService {
    async page(searchVo: IEnquirySearch, config: object = {}) {
        const apiUrl = "/gtm/inquiry/listPage";
        return await httpRequest.post<IPage<IEnquiryDetail>>(apiUrl, searchVo, config);
    }
    async insert(insertVo: IEnquiryInsert) {
        const apiUrl = "/gtm/inquiry/insert";
        return await httpRequest.post<string>(apiUrl, insertVo);
    }
    async update(updateVo: IEnquiryUpdate) {
        const apiUrl = "/gtm/inquiry/update";
        return await httpRequest.post<string>(apiUrl, updateVo);
    }
    async one(id: string) {
        const apiUrl = `/gtm/inquiry/findByIdOrCode/${id}`;
        return await httpRequest.get<IEnquiryDetail>(apiUrl);
    }
    //转报价合同
    async  transferQuottion(id: string) {
        const apiUrl = ` /gtm/inquiry/transfer/${id}`;
        return await httpRequest.get<IEnquiryDetail>(apiUrl);
    }
    //作废
    async disable(id: string) {
        const apiUrl = `/gtm/inquiry/disable/${id}`;
        return await httpRequest.get<boolean>(apiUrl);
    }
   

  

    /**供应商报价 */
    async pageOffer(searchVo: ISupplierOfferSearch, config: object = {}) {
        const apiUrl = "/gtm/supplierOffer/listPage";
        return await httpRequest.post<IPage<ISupplierOfferDetails>>(apiUrl, searchVo, config);
    }
    async insertOffer(insertVo: ISupplierOfferInsert) {
        const apiUrl = "/gtm/supplierOffer/insert";
        return await httpRequest.post<string>(apiUrl, insertVo);
    }
    async updateOffer(updateVo: ISupplierOfferUpdate) {
        const apiUrl = "/gtm/supplierOffer/update";
        return await httpRequest.post<string>(apiUrl, updateVo);
    }
    async oneOffer(id: string) {
        const apiUrl = `/gtm/supplierOffer/findByIdOrCode/${id}`;
        return await httpRequest.get<ISupplierOfferDetails>(apiUrl);
    }
    async disableOffer(id: string) {
        const apiUrl = `/gtm/supplierOffer/disable/${id}`;
        return await httpRequest.get<boolean>(apiUrl);
    }
    //出口报价
    async transferOffer(vo: { "code": string, "shopCode": string }) {
        const apiUrl = "/gtm/supplierOffer/transfer";
        return await httpRequest.post<string>(apiUrl, vo);
    }
   
}

export const enquiryService = new EnquiryService();
