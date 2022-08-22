import { Customer } from './../../models/customer';
import { CustomersService } from './../../services/customers/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customerList! : Customer[];
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomersList();
  }

  getCustomersList(){
    this.customersService.getList().subscribe(response=>{
      this.customerList= response


    })
  }
}
