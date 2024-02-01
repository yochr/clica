import { makeObservable, observable,action } from 'mobx';

class dataStore {
    isLogin = false;
    services = [];
    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                services: observable,
                setIsLogin: action
            }
        )
    }
    setIsLogin(status) {
        this.isLogin = status;
    }

}

export default new dataStore();
