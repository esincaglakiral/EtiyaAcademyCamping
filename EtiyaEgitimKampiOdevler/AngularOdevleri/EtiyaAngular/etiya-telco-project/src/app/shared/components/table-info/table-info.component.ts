import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {
  @Input() tableList!:any[]
  @Input() tableHeaders!:any[]
  constructor() { }

  ngOnInit(): void {
  }

}
