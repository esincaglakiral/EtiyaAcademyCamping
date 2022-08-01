import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-dashboard-customers',
  templateUrl: './dashboard-customers.component.html',
  styleUrls: ['./dashboard-customers.component.css']
})
export class DashboardCustomersComponent implements OnInit {
  customersList! : Customer[];
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customersService.getList().subscribe((response) =>{
      this.customersList = response;
    })
  }

  removeCustomer(id:number){
    if(confirm("Are you sure you want to remove this customer?")){
      this.customersService.delete(id).subscribe()
    }
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

  chooseCustomerId(chooseCustomer: Customer):void{
    window.location.href = `dashboard-customers/customer/${chooseCustomer.id}`
  }

}
