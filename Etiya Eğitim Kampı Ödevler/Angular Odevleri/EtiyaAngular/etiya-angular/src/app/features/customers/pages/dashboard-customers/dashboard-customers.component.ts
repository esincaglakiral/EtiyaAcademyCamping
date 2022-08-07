import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../models/customers';
import { CustomersService } from '../../services/customers/customers.service';


@Component({
  selector: 'app-dashboard-customers',
  templateUrl: './dashboard-customers.component.html',
  styleUrls: ['./dashboard-customers.component.css']
})
export class DashboardCustomersComponent implements OnInit {
  customersList! : Customer[];
  constructor(private customersService: CustomersService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    console.log("Başarılı İşlem")
    this.customersService.getList().subscribe((response) =>{
      this.customersList = response;
    })
  }

  removeCustomer(id:number){
    if(confirm("Are you sure you want to remove this customer?")){
      this.customersService.delete(id).subscribe(() => {
        this.toastr.success("Customer Remove!!", "Delete");
        setTimeout(() => {
        this.getCustomers();
    }, 1000);
      })
    }

  }

  chooseCustomerId(chooseCustomer: Customer):void{
    this.router.navigateByUrl(`dashboard-customers/customer/${chooseCustomer.id}`);
  }

}
