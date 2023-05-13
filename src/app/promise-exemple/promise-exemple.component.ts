import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-promise-exemple',
  templateUrl: './promise-exemple.component.html',
  styleUrls: ['./promise-exemple.component.css']
})
export class PromiseExempleComponent implements OnInit {
  asyncPromise?: Promise<string>;
  asyncObservable?: Observable<string>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.asyncPromise = this.makePromise('Async Promise');
    this.asyncObservable = this.makeObservable('Async Observable');
  }

  makePromise(value: string): Promise<string> {
    this.dataService.asyncPromise?.then(()=>{
      console.log("hello");
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 3000);
    })
  }

  makeObservable(value: string): Observable<string> {
    return of(value).pipe(delay(3000));
  }


}
