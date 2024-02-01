import{makeObservable, observable, action} from "mobx";

class BusinnessServices{
    servicesList=[];
    
    constructor()
    {
        makeObservable(this,{
            servicesList:observable,
            setServices:action
        }) 
    }

    setServices=(s)=>{
        this.servicesList = s;
        console.log(this.servicesList);
    }
}
export default new BusinnessServices();
