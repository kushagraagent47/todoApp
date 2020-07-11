import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable() 
export class DataService {

    dateObj:any = new Date();
    month:any = this.dateObj.getUTCMonth() + 1; //months from 1-12
    day:any = this.dateObj.getUTCDate();
    year:any = this.dateObj.getUTCFullYear();

    newdate:any = this.year + "-" + this.month + "-" + this.day;

    private messageSource = new BehaviorSubject<any>('');
    currentMessage = this.messageSource.asObservable();

    constructor() {
    }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

}