import{makeObservable, observable, action} from "mobx";

class Meetings{
    meetingsList=[1,2,3];
    
    constructor()
    {
        makeObservable(this,{
            meetingsList:observable,
            setMeetings:action
        }) 
    }

    setMeetings=(s)=>{
        this.meetingsList = [...s];
    }
}
export default new Meetings();
