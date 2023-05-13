import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  asyncPromise?: Promise<boolean>;
  constructor() {
    this.asyncPromise = this.makePromise();
  }

  private makePromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
      fetch('https://dummyjson.com/products')
      .then((res) => {
        const response = res.json();
        console.log(response);
        resolve(true);
      })
      .then(console.log);
    }, 3000)
    });
  }
}
