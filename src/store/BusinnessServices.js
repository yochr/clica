import{makeObservable, observable, action} from "mobx";

class BusinnessServices{
    servicesList=[1,2,3];
    
    constructor()
    {
        makeObservable(this,{
            servicesList:observable,
            setServices:action
        }) 
    }

    setServices=(s)=>{
        this.servicesList = [...s];
    }
}
export default new BusinnessServices();
