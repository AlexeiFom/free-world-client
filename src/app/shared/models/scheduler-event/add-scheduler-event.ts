//toDo Add interface

export class AddSchedulerEvent {
    date: Object;
    text: string;
    isActive: boolean;
    userId: string;
    
    constructor(date, text) {
        this.date = date;
        this.text = text;
        this.isActive = true;
    }
}