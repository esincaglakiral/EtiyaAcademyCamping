import { CustomersService } from './../../../features/customers/services/customers/customers.service';
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
  constructor(private formBuilder: FormBuilder, private customersService : CustomersService) { }

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


    this.customersService.getListByFilter(this.searchForm.value).subscribe(data=>{
      this.data1.emit(data)
     })


  }
}
