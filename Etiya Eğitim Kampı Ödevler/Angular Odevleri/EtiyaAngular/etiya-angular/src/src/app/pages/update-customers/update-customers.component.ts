import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {

  updateCustomerList!:  FormGroup;
  chooseId!: number;
  customer!: Customer;

  constructor(private activatedRoute:ActivatedRoute, private customerService:CustomersService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  createUpdateCustomerList(): void{
    this.updateCustomerList = this.formBuilder.group({
      id:[this.customer.id,Validators.required],
      companyName: [this.customer.companyName, Validators.required],
      contactName: [this.customer.contactName, Validators.required],
      contactTitle: [this.customer.contactTitle, Validators.required],
      street: [this.customer.street, Validators.required],
      city: [this.customer.city, Validators.required],
      region: [this.customer.region, Validators.required],
      postalCode: [this.customer.postalCode, Validators.required],
      country: [this.customer.country, Validators.required],
      phone: [this.customer.phone, Validators.required],
      customerKey: [this.customer.customerKey, Validators.required],

    })
  }


  // route params
  getCustomerById(){
    this.activatedRoute.params.subscribe((param) => {
      if(param['id']){
        this.chooseId = param['id'];
      }
    });
    this.customerService.getCustomerById(this.chooseId).subscribe((c) =>{
      this.customer = c;
      this.createUpdateCustomerList();
    });
  }

  updateList(){
    if(!this.updateCustomerList.valid){
      alert("There are still empty fields, please fill in all required fields!!");
      return;
    }
    this.customer = Object.assign({}, this.updateCustomerList.value);
    this.customerService.updateList(this.customer).subscribe((c) => {
      setTimeout(() => {
        location.reload();
        location.href="/dashboard-customers"
        alert("Customer updated!")
      }, 1000);
    });
  }

}
