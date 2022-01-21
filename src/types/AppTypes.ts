export interface IRet<T> {
	success: boolean;
	retCode: string;
	retMsg: string;
	retData: T;
}

export interface IPgProps {
	total: number;
	size: number;
	current: number;
}

export interface IPage<T> extends IPgProps {
	records: T[];
}

export interface IPageRet<T> {
	retCode: string;
	retMsg: string;
	retData: IPage<T>;
}

export interface ISearchOrderItem {
	column: string;
	asc: boolean;
}

export interface ISearchPage {
	pageSize?: number;
	pageNum?: number;
	current?: number;
	orders?: ISearchOrderItem[];
}

export interface ISearchPageField {
	page: ISearchPage;
}
