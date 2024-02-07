import {setMeetings, getMeetings} from "../../store/server";

export   default async function  SaveChanges(service,date, name, phone){
    const res =  await setMeetings(service, date, name, phone);
    alert(res);
    getMeetings();      
}