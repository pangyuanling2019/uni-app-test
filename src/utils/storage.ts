export enum IStorageEnum {
    TOKEN = "token", //token
    USER_INFO = "userInfo",  //用户信息
    DICT = "dictTree",  //数据字典
}

interface IStorage {
    get<T = any>(key: IStorageEnum): T;
    set(Key: IStorageEnum, value: string): void;
    remove(key: IStorageEnum): void;
}

//storage缓存
class Storage implements IStorage {

    // 存
    public set<T = any>(key: IStorageEnum, value: T): void {
        uni.setStorageSync(key, JSON.stringify(value));
    }

    // 取
    public get<T = any>(key: IStorageEnum): T {
        let res = uni.getStorageSync(key);
        return res ? JSON.parse(res) : null;
    }

    // 删
    public remove(key: IStorageEnum): void {
        uni.removeStorageSync(key);
    }

    //token
    public setToken<T = any>(value: T) {
        this.set<T>(IStorageEnum.TOKEN, value)
    }
    
    public getToken<T = any>(): T {
        return this.get<T>(IStorageEnum.TOKEN)
    }
}

export const storage = new Storage();

