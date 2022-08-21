import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'etiya-angular';
  


  ngOnInit(): void {
      this.counter += 5;
      console.log('app component init fonksiyonu')
  }
  counter:number = 0;
  
  increase(count:number=1){
    this.counter+=count;
  }

  get Counter(){
    return(
      this.counter.toString() + (this.counter < 10? ' Çok az' : ' Çok fazla')
      );
  }



}
