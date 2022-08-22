import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  @Input() filterTitle!:string
  searchForm! : FormGroup;
  @Input() data! :any[];
  @Output() data1: any = new EventEmitter()
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createSearchForm();

  }

  createSearchForm(): void{
    this.searchForm = this.formBuilder.group({
      id: [''],
      customerId: [''],
      accountNumber: [''],
      gsmNumber: [''],
      firstName: [''],
      lastname: [''],
      orderNumber: ['']
    })
  }

  search(){
    console.log(this.data)
    console.log(this.searchForm.value.id)
    let filteredData = this.data.filter(item=> (item.id == this.searchForm.value.id) ||
    (item.customerId == this.searchForm.value.customerId) ||
    (item.accountNumber == this.searchForm.value.accountNumber) ||
    (item.gsmNumber == this.searchForm.value.gsmNumber) ||
    (item.firstName == this.searchForm.value.firstName)||
    (item.lastname == this.searchForm.value.lastname)||
    (item.orderNumber == this.searchForm.value.orderNumber))
    console.log("aaaaaa")
    // console.log(filteredData)

    this.data1.emit(filteredData)
    this.createSearchForm();

  }
}
