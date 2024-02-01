import axios from 'axios';
import  BusinnessServices from './BusinnessServices.js';
import AdminEdit from './AdminEdit.js';


 export async function getServices() {
    try {
        const services = await axios.get('http://localhost:8787/services');
        BusinnessServices.setServices(services.data);
        console.log(services.data);
    } catch (error) {
    }     
 }

export async function setServices(name, description, cost){
  try {
    const res = await axios.post('http://localhost:8787/service',{"name":name,"description":description, "cost":cost} );
      return "success";
    
  } catch (error) {
    alert("there is a service in this name");
  }
}

export async function getBusinessData() {
    try
    {
      const businessData = await axios.get('http://localhost:8787/businessData');
      const{name, address, phone, email} = businessData.data;
      AdminEdit.updateDetails(name, address,phone, email);
    }
    catch (error)
    {
    }
  }
  
  export async function setBusinessData(name, address, phone, email ) {
    try {
      const res = await axios.post('http://localhost:8787/businessData',{"name":name,"address":address, "phone":phone, "email":email } );
        return "success";
      
    } catch (error) {
    }
  }  