import {setMeetings, getMeetings} from "../../store/server";

export default async function  SaveChanges(service,date, name, phone){
    await setMeetings(service, date, name, phone);
    getMeetings();
}