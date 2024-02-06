import {setMeetings, getMeetings} from "../../store/server";

export default async function  SaveChanges(service,date, name, phone){
   const res =  await setMeetings(service, date, name, phone);
    alert(res);
    if (res == "הזמן שבחרת תפוס - בחר מחדש") {
        return 1
    }
    else return 0;
    getMeetings();
}