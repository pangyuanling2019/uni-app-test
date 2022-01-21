import { httpRequest } from '@/utils/request';

//菜单信息
export interface Auth2MenuDetail {
    appCode: string,
    appName: string,
    children: Auth2MenuDetail[],
    code: string,
    createTime: string,
    createUser: string,
    deleteFlag: number,
    id: string,
    linkUrl: string,
    menuTypeCode: string,
    menuTypeName: string,
    name: string,
    note: string,
    orderNum: number,
    params: string,
    pcode: string,
    status: string,
    updateTime: string,
    updateUser: string,
}

export interface Auth2UserInfo {
    lastVisitTime: string,     //最后返回时间
    loginTime: string,         //登陆时间
    menus: {
        [key: string]: Auth2MenuDetail[]   //用户菜单列表
    },
    portals: string[],        //用户门户列表
    resources: string[],       //用户资源列表
    roles: string[],            //用户角色列表
    shops: string[],            //用户门店列表
    userCode: string,
    userName: string,
}

export interface Auth2User {
    userCode: string;
    userPassword: string;
    sourceApp?: string,
    token?: string
}

// 鉴权2.0 auth
class LoginServiceAuth2 {

    //账号密码登录  返回token
    async Login(user: Auth2User, config?: object) {
        const apiUrl = "/portal/auth/login/login";
        return await httpRequest
            .post<string>(apiUrl, user, config);
    }
    async Logout() {
        const apiUrl = "/portal/auth/login/logout";
        return await httpRequest.post<string>(apiUrl);
    }

    //根据token查询所有用户权限信息
    async VerifyInfo(data: { sourceApp?: string, token: string }) {
        const apiUrl = "/portal/auth/login/verify";
        return httpRequest
            .post<Auth2UserInfo>(apiUrl, data)
    }
    //搜狐提供的公用获取ip地址接口
    async getIp() {
        // const apiUrl = "";
        // return httpRequest
        //     .getFile<Auth2UserInfo>(apiUrl, { baseURL: "http://pv.sohu.com/cityjson?ie=utf-8" });
    }

    //记录app登陆信息
    async recordAppLoginInfo(appCode: string, userCode: string) {
        const apiUrl = `/portal/log/appAccess/recordAppLoginInfo/${appCode}/${userCode}`;
        return httpRequest
            .post<Auth2UserInfo>(apiUrl)
    }
    //记录app登出信息
    async recordAppLogoutInfo(appCode: string, userCode: string) {
        const apiUrl = `/portal/log/appAccess/recordAppLogoutInfo/${appCode}/${userCode}`;
        return httpRequest
            .post<Auth2UserInfo>(apiUrl)
    }
}

export const loginServiceAuth = new LoginServiceAuth2();
