import BusinnessServices from '../../store/BusinnessServices.js';
import { observer } from "mobx-react";


const ServiceList=(observer(()=> {

  return (
    <>
      {BusinnessServices.servicesList.map((services, index)=>{
        <div key={index}>{services.name}</div>
      })}
    </>
  )
}))

export default ServiceList