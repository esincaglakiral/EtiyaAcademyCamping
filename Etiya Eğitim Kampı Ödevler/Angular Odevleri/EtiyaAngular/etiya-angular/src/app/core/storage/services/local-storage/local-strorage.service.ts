import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStrorageService {

  constructor() { }

  public set(key: string,value:any):void{
    localStorage.setItem(key,value)
  }

  public get(key: string): string|null{
   return  localStorage.getItem(key)
  }

  public remove(key: string): void{
    localStorage.removeItem(key)
   }

}
