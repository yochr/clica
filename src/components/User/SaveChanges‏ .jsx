import {setMeetings, getMeetings} from "../../store/server";

export default async function  SaveChanges(name,date){
    await setMeetings(name, date);
    getMeetings();
}