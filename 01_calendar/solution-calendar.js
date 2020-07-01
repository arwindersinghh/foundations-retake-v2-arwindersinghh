/* eslint-disable no-unused-vars */
class CalendarEvent {
    constructor(arrOfInfo){
        this.date = arrOfInfo[0];
        this.duration = arrOfInfo[1];
        this.title = arrOfInfo[2];
        this.location = arrOfInfo[3];
        this.guestList = arrOfInfo[4];
        if(!arrOfInfo[4]) this.guestList = [];
    }
    
    modifyEvent(obj){
        const key = Object.keys(obj);
        const value = Object.values(obj);
        for(let i = 0; i < key.length; i++){
            this[key[i]] = value[i];
        }
    }
    modifyGuestList(arr){
       this.guestList = this.guestList.concat(arr);
       for(let i = 0; i < this.guestList.length; i++){
           let currentName = this.guestList[i];
           let nextName = this.guestList[i + 1];

           if(currentName === nextName)
           this.guestList = this.guestList.slice(i+2, this.guestList.length-1);
       }
        
    }
}

class Calendar {
    constructor(name, events = []){
        this.name = name;
        this.events = events;
    }
    listEvents () {
        
    }
    addEvent (arr) {
        this.events.push(arr);
       // console.log(this.events);
    }
}

class BirthdayEvent extends CalendarEvent {
    constructor(arrOfInfo){
        super(arrOfInfo);
    }

    isGiftReady () {
        false;
    }
}