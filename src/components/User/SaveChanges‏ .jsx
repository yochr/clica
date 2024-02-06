import {setMeetings, getMeetings} from "../../store/server";
import dataStore from "../../Data/dataStore";

export   default async function  SaveChanges(service,date, name, phone){
    const res =  await setMeetings(service, date, name, phone);
    alert(res);
    getMeetings();
    if (res== "הזמן שבחרת תפוס - בחר מחדש") {
        dataStore.setIsMakeMeeting(false);
        console.log(res)
    }
    else{
        dataStore.setIsMakeMeeting(true)
        console.log(res)

    }
        
    
}