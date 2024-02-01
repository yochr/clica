import { setBusinessData, getBusinessData} from "../../store/server";
import { EditDetails } from "./EditDetails";

export default async function  SaveChanges(name, address, phone, details){
    await setBusinessData(name, address, phone, details);
    getBusinessData();
    EditDetails(false);
}