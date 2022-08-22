import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {
  @Input() warnText!:string;
  @Input() warnAlert!:boolean;
  @Input() warnIcon!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
