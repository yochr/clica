import{makeObservable, observable, action} from "mobx";

class Meetings{
    meetingsList=[];
    
    constructor()
    {
        makeObservable(this,{
            meetingsList:observable,
            setMeetings:action
        }) 
    }

    setMeetings=(s)=>{
        this.meetingsList = [...s];
        console.log(this.meetingsList[0].service);

    }
}
export default new Meetings();
