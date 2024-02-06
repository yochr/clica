import { observer } from "mobx-react";
import BusinnessServices from "../../store/BusinnessServices";
import Services from "./service3+";
import Services1 from "./service1";
import Services2 from "./service2";
import ButtonAddService from "./AddService";

const SwitchService = (observer(() =>{

    const response="";
    switch (BusinnessServices.servicesList.length) {
        case 0:
            return <><h3>אין שרותים זמינים</h3></>;
        case 1:
            return <Services1/>
        case 2:
            return <Services2/>            
        case 3:
            return <Services/>
        default:
            return <h3>הכנס שירות חדש  </h3>;
      }
}))

export default SwitchService;
