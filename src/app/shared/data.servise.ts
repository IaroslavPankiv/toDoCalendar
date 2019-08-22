import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import * as moment from 'moment' ;

@Injectable({
  providedIn: "root"
})

export class DataServise {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  public chengeMounth(dir: number){
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  public changeDate(date: moment.Moment) {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(value);
  }
}
